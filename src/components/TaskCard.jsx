import { useState } from "react"

// Color de la etiqueta según el estado
const coloresEstado = {
    "Pendiente": "bg-yellow-100 text-yellow-800",
    "En progreso": "bg-blue-100 text-blue-800",
    "En pausa": "bg-gray-200 text-gray-700",
    "Completado": "bg-green-100 text-green-800",
}

function TaskCard({
                      nombre_materia,
                      docente,
                      fecha,
                      estado
                  }) {
    //uso de useState
    const [estadoActual, setEstadoActual] = useState(estado)
    function completarActividad() {
        setEstadoActual("Completado")
        //ESTADO: la informacion que puede cambiar mientras el usuario usa la app
        //este afecta a lo que se muestra en pantalla
    }

    function pasarPendiente() {
        setEstadoActual("Pendiente")
    }

    //ESTABLECER UNA UNICA FUNCION PARA VALIDAR Y CAMBIAR LOS ESTADOS UTILIZANDO:
    //SWITCH/CASE
    //Estados a trabajar: Pendiente, En progreso, En pausa y Completado
    //ESTABLECER LOS USESTATES PARA TODOS LOS PROPS QUE SE RECIBEN
    //AGREGAR LA INFORMACION DE LA TAREA CON SU DESCRIPCION
    return(
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-4 hover:shadow-md transition">
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-800">{nombre_materia}</h3>
                <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${coloresEstado[estadoActual]}`}>
                    {estadoActual}
                </span>
            </div>
            <p className="mt-1 text-gray-600">Docente: {docente}</p>
            <p className="text-sm text-gray-500">Fecha: {fecha}</p>

            <div className="mt-4">
                {
                    estadoActual != "Completado" && (
                        <button
                            className="rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2"
                            onClick={completarActividad}>Completar actividad</button>
                    )
                }
                {
                    estadoActual == "Completado" && (
                        <button
                            className="rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2"
                            onClick={pasarPendiente}>Pasar a Pendiente</button>
                    )
                }
            </div>
        </div>
    )
}

export default TaskCard