
// const URL = process.env.NEXT_PUBLIC_VERCEL_URL
//   ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
//   : "http://localhost:3000/api";

const BaseUrl = "http://127.0.0.1:8000";

export const GetTodos=async()=>{
    
    const res = await fetch(`${BaseUrl}/todos`)
    const todosArr = await res.json()
    console.log(todosArr)
           

       

    return(
        <>
     {todosArr.map((todo:any)=>(
        <div key={todo.id}>
            {todo.title}
            {todo.description}
            </div>
    ))}     
        </>
    )
}

