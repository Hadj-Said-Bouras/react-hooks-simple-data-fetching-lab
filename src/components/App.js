// create your App component here
import React, { useEffect, useState } from 'react'

export default function App() {
    const [dogImage, setDogImage] = useState('');
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then((data) => {
            setDogImage(data.message)
            setIsLoaded(true)
        })
        .catch((error) => {
            console.error("Eooro", error)
        })
    },[])

    if(!isLoaded) return <h1>Loading......&&& .....</h1>

    return (
        <div>
            {dogImage && <img src={dogImage} alt='A Random Dog' />}
        </div>
    )
}
