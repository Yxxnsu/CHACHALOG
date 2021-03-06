import { throttle } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from './useOnClickOutside'
import { Title, TocDiv, TocIcon, TocLink, TocToggle } from './styles'
import './index.scss'
const accumulateOffsetTop = (el, totalOffset = 0) => {
    while (el) {
        totalOffset += el.offsetTop - el.scrollTop + el.clientTop
        el = el.offsetParent
    }
    return totalOffset
}
export const Toc = ({ headingSelector, getTitle, getDepth, ...rest }) => {
    const { throttleTime = 200, tocTitle = `Contents` } = rest
    const [headings, setHeadings] = useState({
        titles: [],
        nodes: [],
        minDepth: 0,
    })
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState()
    const ref = useRef()
    useOnClickOutside(ref, () => setOpen(false))
    useEffect(() => {
        // Fallback to sensible defaults for headingSelector, getTitle and getDepth
        // inside useEffect rather than specifying them as Toc default props to avoid
        // the need for useMemo and useCallback, resp.
        // Otherwise, these would change on every render and since this effect calls
        // setHeadings which triggers a rerender, it would cause an infinite loop.
        const selector =
            headingSelector ||
            Array.from({ length: 6 }, (_, i) => `.post-container h` + (i + 1))
        const nodes = Array.from(document.querySelectorAll(selector))
        const titles = nodes.map(node => ({
            title: getTitle ? getTitle(node) : node.innerText,
            depth: getDepth ? getDepth(node) : Number(node.nodeName[1]),
        }))
        const minDepth = Math.min(...titles.map(h => h.depth))
        setHeadings({ titles, nodes, minDepth })
    }, [headingSelector, getTitle, getDepth])
    // Add scroll event listener to update currently active heading.
    useEffect(() => {
        // Throttling the scrollHandler saves computation and hence battery life.
        const scrollHandler = throttle(() => {
            const { titles, nodes } = headings
            // Offsets need to be recomputed inside scrollHandler because
            // lazily-loaded content increases offsets as user scrolls down.
            const offsets = nodes.map(el => accumulateOffsetTop(el))
            const activeIndex = offsets.findIndex(
                offset => offset > window.scrollY + 0.05 * window.innerHeight
            )
            setActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1)
        }, throttleTime)
        window.addEventListener(`scroll`, scrollHandler)
        return () => window.removeEventListener(`scroll`, scrollHandler)
    }, [headings])
    return (
        <>
            <TocToggle
                className="toc_toggle"
                opener
                open={open}
                onClick={() => setOpen(true)}
            />
            <TocDiv className="toc_div" id="toc_container" ref={ref} open={open}>
                <Title>
                    <TocIcon />
                    {tocTitle}
                    <TocToggle className="toc_toggle" onClick={() => setOpen(false)} />
                </Title>
                <nav>
                    {headings.titles.map(({ title, depth }, index) => (
                        <TocLink
                            key={title}
                            className={`toc_link ${active === index ? 'active' : ''}`}
                            active={active === index}
                            depth={depth - headings.minDepth}
                            onClick={event => {
                                event.preventDefault()
                                setOpen(false)
                                headings.nodes[index].scrollIntoView({
                                    behavior: `smooth`,
                                    // block: `center`,
                                })
                            }}
                        >
                            {title}
                        </TocLink>
                    ))}
                </nav>
            </TocDiv>
        </>
    )
}