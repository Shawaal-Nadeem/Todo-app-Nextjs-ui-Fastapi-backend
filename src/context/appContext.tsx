'use client'
import {createContext, ReactNode, useState, SetStateAction, Dispatch} from 'react'


export const context = createContext<any>(undefined);

const AppContext = ({children}: {children: ReactNode}) => {
    let [allTodos, setAllTodos] = useState([{}]);
    return <context.Provider value={{allTodos, setAllTodos}}>
        {children}
    </context.Provider>
}
export default AppContext;
