import styles from "./styles.module.css"
 
import  {AiOutlinePlusCircle} from "react-icons/ai"
import {FormEvent,useState,ChangeEvent} from "react"
export default function Header({addTask} : {addTask: (title: string) => void}) {
   const [title,setTitle] = useState<string>("")
    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        addTask(title)
        setTitle("")
    }
    function  onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)    
    }
    return  <header className={styles.conteiner}>
             
            <form className={styles.newTaskForm}>
                <input value={title} onChange={onChangeTitle} type="text" placeholder="Adicione uma nova tarefa" />
                <button onClick={handleSubmit}>Criar <AiOutlinePlusCircle/></button>
            </form>
          </header>
}