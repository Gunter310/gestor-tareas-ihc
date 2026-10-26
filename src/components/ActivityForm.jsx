import { useState } from "react"

function ActivityForm({ onAgregarTarea }) {
    const [form, setForm] = useState({
        nombre_materia: '',
        docente: '',
        tarea: '',
        fecha: '',
        estado: 'Pendiente'
    })

    function changeForm(event) {
        const { id, value } = event.target

        setForm({
            ...form,
            [id]: value
        })
    }

    function preventSubmit(event) {
        event.preventDefault()

        //VALIDACIONES

        // 1. El estado tiene que ser uno de los que ya usan las tareas guardadas
        const estadosValidos = ['Pendiente', 'En progreso', 'En pausa', 'Completado']
        if (!estadosValidos.includes(form.estado)) {
            alert('El estado no es válido')
            return
        }

        // 2. La descripción tiene que tener más de 10 caracteres (sin espacios)
        const sinEspacios = form.tarea.replaceAll(' ', '')
        if (sinEspacios.length <= 10) {
            alert('La descripción debe tener aunque sea 10 caracteres')
            return
        }

        // 3. Formatear la fecha: 2026-10-26 → 26/10/2026
        const partes = form.fecha.split('-')
        const fechaFormateada = partes[2] + '/' + partes[1] + '/' + partes[0]

        // Si todo está bien, se agrega la tarea
        onAgregarTarea({
            ...form,
            id: Date.now(),
            fecha: fechaFormateada
        })

        // Limpiar el formulario
        setForm({
            nombre_materia: '',
            docente: '',
            tarea: '',
            fecha: '',
            estado: 'Pendiente'
        })
    }

    return (
        <section className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Nueva tarea</h2>
            <form className="grid gap-4 md:grid-cols-2" onSubmit={preventSubmit}>
                <div>
                    <label htmlFor="nombre_materia" className="block text-sm font-medium text-gray-700 mb-2">Nombre materia</label>
                    <input id="nombre_materia" type="text" value={form.nombre_materia} required
                           onChange={changeForm}
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                    <label htmlFor="docente" className="block text-sm font-medium text-gray-700 mb-2">Nombre docente</label>
                    <input id="docente" type="text" value={form.docente} required
                           onChange={changeForm}
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                    <label htmlFor="tarea" className="block text-sm font-medium text-gray-700 mb-2">Descripcion de la tarea</label>
                    <input id="tarea" type="text" value={form.tarea}
                           onChange={changeForm}
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                    <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-2">Fecha</label>
                    <input id="fecha" type="date" value={form.fecha} required
                           onChange={changeForm}
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                    <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                    <select id="estado" value={form.estado}
                            onChange={changeForm}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                        <option value="Pendiente">Pendiente</option>
                        <option value="En progreso">En progreso</option>
                        <option value="En pausa">En pausa</option>
                        <option value="Completado">Completado</option>
                    </select>
                </div>
                <div className="md:col-span-2">
                    <button type="submit"
                            className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                        Agregar tarea
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ActivityForm