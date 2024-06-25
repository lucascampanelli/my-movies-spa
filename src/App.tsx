import './App.css'
import { Header } from './components/Header'
import { MoviesList } from './components/MoviesList'



function App() {

  return (
    <>
      <Header/>

      <section>
        <MoviesList movies={[]}/>
      </section>
    </>
  )
}

export default App
