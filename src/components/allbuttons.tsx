'use client'
import { useEffect, useState, useContext } from "react"
import { Button } from "@/components/ui/button"
import { AddTodo } from "./createTodos"
import { ReadTodos } from "./readTodos"
import { context } from "@/context/appContext";
import { UpdateTodo } from "./updateTodos"
export const ButtonOperations=()=>{
const getContext = useContext(context)
// const operation = getContext.operation
const setOperation = getContext.setOperation

const [state, setState] = useState('');

useEffect(()=>{
    if(state==='create'){
        console.log('create')
    }
    else if(state==='read'){
        console.log('read')
    }
    else if(state==='update'){
        console.log('update')
    }  
    else if(state==='delete'){
        console.log('delete')
    }

},[state])
    return(
        <>
        <div className=" flex justify-around items-center w-full mt-10 ">
          <Button onClick={()=>{setState('create')}}>ADD Todo</Button>
          <Button onClick={()=>{setOperation('read'), setState('read')}} variant={"secondary"}>All Todos</Button>
          <Button onClick={()=>{setState('update')}} variant={"secondary1"}>Edit Todo</Button>
          <Button onClick={()=>{setState('delete')}} variant={"destructive"}>Delete Todo</Button>
        </div>
        <div>
        {state==='read' ? <ReadTodos/>:null}
        {state === 'create' ? <AddTodo/>:null}
        {state === 'update' ? <UpdateTodo/>:null}
        </div>
        </>
    )
}