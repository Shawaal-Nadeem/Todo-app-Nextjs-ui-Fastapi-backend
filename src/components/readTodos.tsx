'use client'

import { useEffect,useContext } from "react";
import { context } from "@/context/appContext";

// const URL = process.env.NEXT_PUBLIC_VERCEL_URL
//   ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
//   : "http://localhost:3000/api";



export const ReadTodos=()=>{
    
    const BaseUrl = process.env.NEXT_PUBLIC_API_URL;

    const getContext = useContext(context);
    const allTodos=getContext.allTodos;
    const setAllTodos=getContext.setAllTodos;
    const operation = getContext.operation;
    const setOperation = getContext.setOperation;

    useEffect(()=>{
        if (operation === 'read'){
            const getTodos=async()=>{
                // GET
                try{
                    const res = await fetch(`${BaseUrl}/todos`)
                    const todosArr = await res.json()
                    console.log(todosArr)
                    setAllTodos(todosArr)
    
                }
                catch(err){
                    console.log('Error is '+err);
                }
            }
            getTodos();
            setOperation('');
        }
console.log(BaseUrl)
    },[])
    
        return(
                <>
                <div className=" mt-10">
             {allTodos?.map((todo:any, index:number)=>(
                    <div key={index} className=" mt-5 flex w-full">
                        <div className=" w-[10%] ml-5">
                        {todo.id}
                        </div>
                        <div className=" w-[40%]">
                        {todo.title}
                        </div>
                        <div className=" w-[50%]">
                        {todo.description}
                        </div>
                        </div>
                ))}     
</div>
                    </>
                )
            }
            
            
