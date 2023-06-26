import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
 import {useEffect, useState} from "react"

 import { TaskType } from './Types'
export default function App() {
  const[tasks, setTasks] = useState<TaskType[]>([])
  
  function addTask(taskTitle: string) {
    setTasks([  ...tasks,{ id: crypto.randomUUID(), title : taskTitle, isCompleted:false}])  
    saveTasks([  ...tasks,{ id: crypto.randomUUID(), title : taskTitle, isCompleted:false}])
  }
  function saveTasks(tasks: TaskType[]) {
    window.localStorage.setItem("task",JSON.stringify(tasks))
  }
  function getTasks() {
     const tasksSaved = window.localStorage.getItem("task")
     if (tasksSaved) {
        setTasks(JSON.parse(tasksSaved))
     }
  }


  function removeTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id!=taskId)
    setTasks(newTasks)
    saveTasks(newTasks)
  }

  function checkToogleTask(taskId: string) {
    const newTasks = tasks.map(task => {
       if(task.id===taskId){
          task.isCompleted = !task.isCompleted
       } 
       return task
    }) 
    
    setTasks(newTasks)
    saveTasks(newTasks)
  }

  useEffect(()=>{
    getTasks()
  },[])

  return <div>
      <Header addTask={addTask}/>
      <Tasks checkToogleTask={checkToogleTask} removeTask={removeTask} tasks={tasks}/>
      
  </div>
  }