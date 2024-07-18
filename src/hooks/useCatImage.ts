import { useEffect, useState } from "react"

export function useCatImage({ fact }: { fact: string }) {
    const [imageUrl, setImageUrl] = useState()
    useEffect(() => {
        if (!fact) return
        const threeFirstWord = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                console.log(url)
                setImageUrl(url)
            })
    }, [fact])
    return { imageUrl }
}