'use client'
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export const ButtonOperations=()=>{

const [operation,setOperation]=useState('');
useEffect(()=>{
    if(operation==='create'){
        console.log('create')
    }
    else if(operation==='read'){
        console.log('read')
    }
    else if(operation==='update'){
        console.log('update')
    }  
    else if(operation==='delete'){
        console.log('delete')
    }

},[operation])
    return(
        <>
          <Button onClick={()=>{setOperation('create')}}>ADD Todo</Button>
          {/* <Button onClick={()=>{setOperation('read')}} variant={"secondary"}>All Todos</Button> */}
          <Button onClick={()=>{setOperation('update')}} variant={"secondary1"}>Edit Todo</Button>
          <Button onClick={()=>{setOperation('delete')}} variant={"destructive"}>Delete Todo</Button>
        {/* {operation==='read' ? <GetTodos/>:null}  Rendering again n again */}
        {/* {operation==='create' ? <CreateTodo/>:null} */}
        </>
    )
}