'use client'

import { useEffect,useContext } from "react";
import { context } from "@/context/appContext";



export const UpdateTodo=()=>{

    const BaseUrl = process.env.NEXT_PUBLIC_API_URL;

    const getContext = useContext(context);
    const todoTitle = getContext.todoTitle; 
    const todoDescription = getContext.todoDescription;
    const setTodoTitle = getContext.setTodoTitle;
    const setTodoDescription = getContext.setTodoDescription;
    const operation = getContext.operation;
    const setOperation = getContext.setOperation;
    const todoID = getContext.todoID;
    const setTodoID = getContext.setTodoID;


    useEffect(()=>{
    if(operation==='update'){
        try{

            const putTodo= async()=>{
                const response =await fetch(`${BaseUrl}/todos/${todoID}`,{
                    method:"PUT",
                    headers: {
                        "Content-Type": "application/json"
                      },
                    body:JSON.stringify({
                        title:todoTitle,
                        description:todoDescription
                    })
                    
                })
                const res= await response.json();   
                console.log(res);
            }
            putTodo();
            console.log(todoTitle);
            console.log(todoDescription);
            setOperation('');
            console.log('put todo call')
        }
        catch(err){
            console.log('Error is '+err);
        }
    }

},[operation])

return(
    <>
      <div className=" flex justify-around mt-5">
        <h1 className=" font-bold">Update Todo Section :</h1>
        <input type="number" step={1} placeholder="Todo ID" onChange={(e)=>{setTodoID(e.target.value)}}/>
        <input type="text" placeholder="Todo Title" onChange={(e)=>{setTodoTitle(e.target.value)}}/>
        <input type="text" placeholder="Todo Description" onChange={(e)=>{setTodoDescription(e.target.value)}}/>
        <button onClick={()=>{setOperation('update')}} className=" bg-black text-white text-sm w-20 h-10 rounded-md">Update Todo</button>
      </div>
    </>
)
}
