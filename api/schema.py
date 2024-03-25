from sqlmodel import SQLModel, Field, create_engine
from typing import Optional
from dotenv import load_dotenv
import os


class Todo_Table(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    description: str

if __name__ == "__main__":
    load_dotenv()
    engine = create_engine(os.getenv("conn_str"))
    SQLModel.metadata.create_all(engine)
