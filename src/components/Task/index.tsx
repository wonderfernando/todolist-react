import { TaskType } from "../../Types"
import styles from "./styles.module.css"
import {TbTrash  } from "react-icons/tb"
import {AiFillCheckCircle} from "react-icons/ai"
export default function Task({task, removeTask,checkToogleTask} : {task: TaskType, removeTask: (taskId: string)=> void, checkToogleTask: (taskId:string) => void}) {
    function onDeleteOnclick() {
        removeTask(task.id)
    }
    function checkToogleTaskonClick() {
        
        checkToogleTask(task.id)
    }
    return <div className={styles.taskConteiner}>
         <button onClick={checkToogleTaskonClick} className={styles.checkConteiner}>{ !task.isCompleted ? <div/> : <AiFillCheckCircle color="#1E6F9F" size={20} /> }  </button>
         <p className={task.isCompleted ? styles.textCompleted: ""} >
            {task.title}
         </p>
         <button onClick={onDeleteOnclick} className={styles.btnDelete}><TbTrash/></button>
    </div>
}