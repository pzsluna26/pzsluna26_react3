import TodoForm2 from "./TodoForm2"
import TodoItem from "./TodoItem"
import axios from "axios";
import { useState, useEffect } from "react";

//20250805-1 Todo.ts 에서 가져오기
import type { Todo, completedT } from '../types/Todo'


export default function TodoList() {
  const url =  "http://localhost:3005/todos" ;

  //20250805-2 useState 타입
  const [ tdata , setTdata ] = useState<Todo[]>([]) ;
 
  const getData = async () => {
    const { data } = await axios.get<Todo[]>(url) ;
    // console.log(data) 
    setTdata(data) ;
  }

                        //20250805-3 인수 타입 명시
  const addTodo = async (text : string, completed : completedT) => {
    console.log("Add 추가", text, completed)

    //20250805-4 addTodo 오류수정
    await axios.post(url, {
      text : text,
      completed : completed
    }) ;

    getData();
  }
                          //20250805-3 인수 타입 명시
  const onToggle = async (id : string , completed : completedT) => {
    console.log("modify", id, completed)
    const done = completed == "X" ? "O" : "X" ;  
    await axios.patch(`${url}/${id}`, { 
      completed : done
    }) ;
    getData();
  }

                          //20250805-3 인수 타입 명시
  const onDelete = async (id : string) : Promise<void> => {
    console.log("delete", id)

    //20250805-5 onDelete 오류수정
    await axios.delete(`${url}/${id}`) ;
    getData();
  }


  useEffect(()=>{
    getData();
  }, []);

  return (
    <div>
              {/* 20250805-4 addTodo 오류수정 */}
      <TodoForm2 addTodo ={addTodo} />
      
      {tdata && tdata.map(item => <TodoItem key={item.id}
                                            item={item}
                                            //20250805-5 onDelete 오류수정
                                            onDelete={onDelete}
                                            onToggle={onToggle}
                                            />) }
    </div>
  )
}