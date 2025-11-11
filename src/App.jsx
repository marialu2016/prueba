// import react router dom
import { Routes, Route } from 'react-router-dom'

// import componentes
import Navegacion from './components/navegacion.jsx'

import Footer from './components/footer.jsx'

// import sitio web
import Inicio from './pages/inicio.jsx'
import Juegos from './pages/juegos.jsx'
import About from './pages/about.jsx'
import Contacto from './pages/contacto.jsx'
import Test from './pages/test.jsx'
import Pokemon from './pages/Pokemon.jsx'
import JuegosSencillo from './pages/JuegosSencillo.jsx'

function App() {
    return (
        <div className="bg-dark text-white">
            <Navegacion />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/juegos" element={<Juegos />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/test" element={<Test />} />
                <Route path="/pokemon" element={<Pokemon />} />
                <Route path="/juegossencillo" element={<JuegosSencillo />} />
      
            </Routes>
            <Footer />
        </div>
    )
}

export default App