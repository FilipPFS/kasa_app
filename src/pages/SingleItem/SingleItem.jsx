import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../../data.json";
import Pictures from '../../components/Pictures/Pictures';

const SingleItem = () => {

    const {itemId} = useParams();
    const selectedItem = data.filter(item => item.id === itemId)
    const pictures = selectedItem[0].pictures;

    return (
        <main>
            <Pictures 
                pictures = {pictures}
            />
        </main>
    )
}

export default SingleItem