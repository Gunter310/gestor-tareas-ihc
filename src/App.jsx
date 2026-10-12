import Header from './components/Header';
import TaskCard from './components/TaskCard';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <TaskCard
                nombre_materia="IHC"
                docente="Bryana"
                fecha="10/10/2026"
                estado="Finalizada"
            />

            <TaskCard
                nombre_materia="Programacion 2"
                docente="Daniel Quino"
                fecha="10/04/2026"
                estado="Pendiente"
            />
            <Footer />
        </div>
    );
}

export default App;