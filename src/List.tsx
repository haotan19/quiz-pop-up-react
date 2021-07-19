import React from 'react'

interface Props {
    children: React.ReactNode
}

const List: React.FC<Props> = ({ children }) => {
    return (
        <ul>
            {children}
        </ul>
    )
}

export default List
