import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FiltroTareas from './components/FiltroTareas'

function App() {

    //COMPLETAR LOS ESTILOS CON TAILWIND PARA EL HEADER Y PARA EL FOOTER (LIBRE)
    return (
        <>
            <div className='min-h-screen bg-gray-100'>
                <Header />
                <main className='max-w-4xl mx-auto px-6 py-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-6'>Mis tareas</h2>
                    <FiltroTareas />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default App
