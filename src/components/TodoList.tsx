import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

import axios from 'axios';
import { useState, useEffect } from 'react';

interface TodoItemType {
  id: number | string;
  text: string;
  completed: string;  // 'O' or 'X'
}

export default function TodoList() {
  const url = "http://localhost:3005/todos";
  const [tdata, setTdata] = useState<TodoItemType[]>([]);

  const addTodo = async (text: string, completed: string) => {
    console.log("add", text);

    const data = {
      text,
      completed,
    };

    await axios.post(url, data);
    getData();
  };

  const getData = async () => {
    const { data } = await axios.get<TodoItemType[]>(url);
    setTdata(data);
  };

  const toggoleTodo = async (id: number | string, completed: boolean) => {
    const done = completed ? 'O' : 'X';
    await axios.patch(`${url}/${id}`, { completed: done });

    const check = await axios.get<TodoItemType>(`${url}/${id}`);
    console.log(check.data);
    getData();
  };

  const deleteTodo = async (id: number | string) => {
    await axios.delete(`${url}/${id}`);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-9/10 h-40 mb-8 bg-white flex flex-col justify-center items-center">
        <div className="font-bold text-4xl m-5 text-center"></div>
        <TodoForm addTodo={addTodo} />
      </div>
      {tdata &&
        tdata.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onPatch={toggoleTodo}
            onDelete={deleteTodo}
          />
        ))}
    </div>
  );
}
