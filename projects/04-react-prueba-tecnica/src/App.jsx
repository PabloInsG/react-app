// Entrar en la api para ver que endpoint nos puede ser util/necesitamos antes de codear
import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button data-testid="boton"  onClick={handleClick}>Obtener hecho</button>

      {fact && <p data-testid="texto">{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}