from sqlmodel import SQLModel, Field, Session, create_engine
from typing import Optional
from dotenv import load_dotenv
import os
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware


class Todo_Table(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    description: str


class Todo_Create(SQLModel):
    title: str
    description: str


def get_Session():
    load_dotenv()
    engine = create_engine(os.getenv("conn_str"))
    with Session(engine) as session:
        yield session


app:FastAPI = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/todos")
def get_todos(session = Depends(get_Session)):
    all_todos = session.query(Todo_Table).all()
    return all_todos

@app.post("/todos")
def post_todo(todo:Todo_Create, session = Depends(get_Session)):
    add_todo = Todo_Table.model_validate(todo)
    session.add(add_todo)
    session.commit()
    session.refresh(add_todo)
    return add_todo

@app.put("/todos/{id}")
def put_todo(id:int, todo:Todo_Create, session = Depends(get_Session)):
    specific_todo = session.get(Todo_Table, id)
    specific_todo.title = todo.title
    specific_todo.description = todo.description
    session.commit()
    session.refresh(specific_todo)
    return specific_todo

@app.delete("/todos/{id}")
def delete_todo(id:int, session = Depends(get_Session)):
    specific_todo = session.get(Todo_Table, id)
    session.delete(specific_todo)
    session.commit()
    return specific_todo