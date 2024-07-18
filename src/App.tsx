import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'


// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`


function App() {

  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })



  const handleClick = async () => {
    refreshFact()
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
