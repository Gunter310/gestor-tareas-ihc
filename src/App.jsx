import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FiltroTareas from './components/FiltroTareas'
import ActivityForm from './components/ActivityForm'
import tareasIniciales from './data/tareas'

function App() {
    // La lista de tareas vive aquí
    const [tareas, setTareas] = useState(tareasIniciales)

    function agregarTarea(nuevaTarea) {
        setTareas([
            ...tareas,
            nuevaTarea
        ])
    }

    return (
        <>
            <div className='min-h-screen bg-gray-100'>
                <Header />
                <main className='max-w-4xl mx-auto px-6 py-8'>
                    <ActivityForm onAgregarTarea={agregarTarea} />
                    <h2 className='text-2xl font-bold text-gray-800 mb-6'>Mis tareas</h2>
                    <FiltroTareas tareas={tareas} />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default App