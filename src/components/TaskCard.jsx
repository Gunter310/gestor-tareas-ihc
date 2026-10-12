function TaskCard({nombre_materia, docente, fecha, estado}) {
    return (

        <div>
            <h3>{nombre_materia}</h3>
            <p>Nombre docente: {docente}</p>
            <p> Fecha: {fecha}</p>
            <p> Estado: {estado} </p>
        </div>
    )
}

export default TaskCard