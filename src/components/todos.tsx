'use client'

import { useEffect,useContext } from "react";
import { context } from "@/context/appContext";

// const URL = process.env.NEXT_PUBLIC_VERCEL_URL
//   ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
//   : "http://localhost:3000/api";

const BaseUrl = "http://127.0.0.1:8000";


export const Todos=()=>{

    const getContext = useContext(context);
    const allTodos=getContext.allTodos;
    const setAllTodos=getContext.setAllTodos;


    useEffect(()=>{
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

    },[])
    
        return(
                <>
             {allTodos?.map((todo:any)=>(
                    <div key={todo.id} className=" mt-10">
                        {todo.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {todo.description}
                        </div>
                ))}     

                    </>
                )
            }
            
            
