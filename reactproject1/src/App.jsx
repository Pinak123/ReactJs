import './index.css'
import Example from './Components/navbar'
import Chai from './Components/chai'
function App( ) {
    
    const username = "Pinak"
    return (
        <>
            <Example />
            <h5 className="text-3xl font-bold underline">Hello {username}</h5>
            <h5 >Hello {username}</h5>
            <Chai username='Pinak sarode '/>
           
        </>
  )
}

export default App
