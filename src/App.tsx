import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
function App() {

  const [fact, setFact] = useState('lorem ipsum')
  const [imageUrl, setImageUrl] = useState('')
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWord = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            console.log(url)
            setImageUrl(url)
          })
      })
  }, [])

  return (
    <>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {
        imageUrl && <img src={`https://cataas.com${imageUrl}`} alt={fact} />
      }
    </>
  )
}

export default App
