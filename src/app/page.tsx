import { ButtonOperations } from "@/components/allbuttons"
import { GetTodos } from "./api/getTodos"


export default function Home() {
  return (
   <div>
   <h1 className=" text-center text-4xl font-bold mt-14">Todos Application</h1>
   <div className=" flex justify-around items-center w-full mt-10 ">
   <ButtonOperations/>
        </div>
        
   </div> 
  )
}