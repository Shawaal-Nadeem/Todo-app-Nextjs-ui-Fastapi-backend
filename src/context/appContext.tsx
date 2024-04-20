'use client'
import {createContext, ReactNode, useState, SetStateAction, Dispatch} from 'react'


export const context = createContext<any>(undefined);

const AppContext = ({children}: {children: ReactNode}) => {

    let [allTodos, setAllTodos] = useState([{}]);
    let [todoTitle, setTodoTitle] = useState('');
    let [todoDescription, setTodoDescription] = useState('');
    let [todoID, setTodoID] = useState(0);
    const [operation,setOperation]=useState('');

    return <context.Provider value={{allTodos, setAllTodos, todoTitle, setTodoTitle, operation, setOperation, todoDescription,setTodoDescription, todoID, setTodoID}}>
        {children}
    </context.Provider>
}
export default AppContext;
