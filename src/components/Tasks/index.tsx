import styles from "./styles.module.css"
 

import Task from "../Task"
import {TaskType} from "../../Types"
import {TbClipboardText} from "react-icons/tb"
export default function Tasks({tasks,removeTask, checkToogleTask} : { tasks : TaskType[], removeTask: (taskId:string) => void, checkToogleTask: (taskId:string) => void}) {
    const taskQuantity = tasks.length;
    const complatedTask = tasks.filter(task => task.isCompleted).length
    return <div className={styles.conteiner}>
        <header className={styles.TasksHeader}>
            <div>
                <p>Tarefas Criadas</p>
                <span>{taskQuantity}</span>
            </div>
            <div>
                <p>Tarefas Conluidas</p>
                <span>{complatedTask}</span>
            </div>
        </header>

        <div className={styles.tasksArea}>
            {tasks ? tasks.map(task => <Task checkToogleTask={checkToogleTask}  removeTask={removeTask} key={task.id} task={task}/>) : "Nenhuma tarefa"}
        </div>
        {tasks.length==0 && 
        <div className={styles.empty}>
            <h1><TbClipboardText size={50}/></h1>
            <div>
              <p>Nenhuma tarefa encontrada</p>
              <span>Crie tarefas e organize as suas atividades</span>
            </div>
        </div>
      }
        
    </div>
}