import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'


// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
function App() {

  const [fact, setFact] = useState<string>('')
  const { imageUrl } = useCatImage({ fact })
  useEffect(() => { getRandomFact().then(newFact => setFact(newFact)) }, [])
  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get New fact</button>
      {fact && <p>{fact}</p>}
      {
        imageUrl && <img src={`https://cataas.com${imageUrl}`} alt={fact} />
      }
    </>
  )
}

export default App
