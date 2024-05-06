import React from 'react'
import { useParams } from 'react-router-dom'

const SingleItem = () => {

    const {itemId} = useParams();

    return (
        <div>SingleItem: {itemId}</div>
    )
}

export default SingleItem