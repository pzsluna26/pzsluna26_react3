import { useState, useEffect, useRef} from "react"
import axios from "axios";
import TailButton from "../ui/TailButton"

const baseUrl = "http://localhost:3005/todos"; 

//tsx문법
type TodoItem = {
  id: number;
  title: string;
  author: string;
};



export default function Rest() {
    //tsx문법
  const [tdata, setTdata] = useState<TodoItem[]>([]);
  const titleR = useRef<HTMLInputElement>(null);
  const authorR = useRef<HTMLInputElement>(null);

  
  const getDataFatch = async () => {
    console.log(baseUrl)

                                  //tsx문법
    const {data} = await axios.get<TodoItem[]>(baseUrl); 
   
    setTdata(data)
    console.log("패치된 데이터 : ", data)
  }

  useEffect(()=>{
    getDataFatch();
  },[])
                            //tsx문법
  const handleInput = async (e : React.FormEvent) => { 
    e.preventDefault();
    
    if (!titleR.current || !authorR.current) return;

    const postData = {
       
        title: titleR.current.value,
        author: authorR.current.value,

    }

    await axios.post(baseUrl, postData); 
    titleR.current.value = '';
    authorR.current.value = '';
    await getDataFatch();  
  }


                          //tsx문법
  const handleDelete = async (id: number) => {
    console.log(id)
    await axios.delete(`${baseUrl}/${id}`); 
    await getDataFatch();  
  }

 
  return (
    <div className="mt-10 w-full flex flex-colw-full h-full flex flex-col items-center">
      <form className="flex gap-4 items-center">
        <div className="flex gap-2 mr-4">
          <label htmlFor="txt1">제목: </label>
          <input type="text"
                 id="txt1" 
                 ref={titleR} 
                 className="underline" />
        </div>
        <div className="flex items-center gap-2 ">
          <label htmlFor="txt2">이름: </label>
          <input type="text" 
                 id="txt2" 
                 ref={authorR} 
                 className="underline" />
        </div>
        <TailButton caption="입력"
                    color="blue"
                    onHandle={handleInput}/>
      </form>
     <ul className="flex flex-col w-150 mt-5 gap-2">
  {tdata.map(item => (
    <li key={item.id} className="flex justify-between items-center p-2 rounded">
      <div className="flex space-x-4">
            <span>id: {item.id}</span>
            <span>title: {item.title}</span>
            <span>author: {item.author}</span>
      </div>
      <TailButton
        caption="삭제"
        color="blue"
        onHandle={() => handleDelete(item.id)}/>
    </li>
  ))}
</ul>
    
    </div>
  )
}


// 콘솔 안뜨는 이유 찾기 (handleInput,handleDelete)
// 최신정보가 젤 위에 올라오지 않는 이유 찾기