import React from 'react'
import './index.scss'

export const PostTitle = ({ title, date }) => (
    <h1>
        {title} <h4>{date}</h4>
    </h1>
)