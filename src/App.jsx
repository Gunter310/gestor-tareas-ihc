import { useState } from 'react'
import Header from './components/Header';
import './App.css'
import TaskCard from "./components/TaskCard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
       <Header/> 
         <main>
             <h2> Mis tareas </h2>
             <TaskCard/>
         </main>
         <Footer/>
     </div>
    </>
  )
}

export default App
