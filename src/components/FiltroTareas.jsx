import { useState } from "react"
import TaskCard from "./TaskCard"

function FiltroTareas({ tareas }) {
    // 1. Un estado para cada filtro
    const [busqueda, setBusqueda] = useState("")
    const [estado, setEstado] = useState("")

    // 2. Opciones del select de estado (sin repetir) sacadas de la lista
    const estados = [...new Set(tareas.map((t) => t.estado))]

    // 3. Filtrar
    const texto = busqueda.toLowerCase()
    const tareasFiltradas = tareas.filter((t) =>
        // la búsqueda coincide con la materia O con el docente
        (t.nombre_materia.toLowerCase().includes(texto) ||
            t.docente.toLowerCase().includes(texto)) &&
        // y además coincide el estado (vacío = todos)
        (estado === "" || t.estado === estado)
    )

    function limpiarFiltros() {
        setBusqueda("")
        setEstado("")
    }

    // Un solo estilo para los campos, así se ven iguales
    const estiloCampo = "w-full h-10 px-3 bg-white text-sm text-gray-700 border border-gray-300 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"

    return (
        <div>
            {/* Barra de filtros */}
            <div className="bg-white p-4 rounded-lg shadow mb-6 grid gap-4 md:grid-cols-[2fr_1fr_auto]">
                <input
                    type="text"
                    placeholder="Buscar por materia o docente..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className={estiloCampo}
                />

                <select
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    className={estiloCampo}
                >
                    <option value="">Todos los estados</option>
                    {estados.map((e) => (
                        <option key={e} value={e}>{e}</option>
                    ))}
                </select>

                <button
                    onClick={limpiarFiltros}
                    className="h-10 px-4 bg-blue-500 hover:bg-blue-600 text-sm text-white rounded-lg"
                >
                    Limpiar filtros
                </button>
            </div>

            {/* Contador */}
            <p className="mb-3 text-sm text-gray-500">
                Mostrando {tareasFiltradas.length} de {tareas.length} tareas
            </p>

            {/* Resultado */}
            {tareasFiltradas.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">
                    {tareasFiltradas.map((t) => (
                        <TaskCard
                            key={t.id}
                            nombre_materia={t.nombre_materia}
                            docente={t.docente}
                            fecha={t.fecha}
                            estado={t.estado}
                        />
                    ))}
                </div>
            ) : (
                <p className="bg-white rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-500">No se encontraron tareas.</p>
            )}
        </div>
    )
}

export default FiltroTareas