import TailButton from '../ui/TailButton'
import TailSelect2 from '../components/TailSelect2'
import { useRef, useEffect } from 'react'


//20250805-1 
import type { completedT } from '../types/Todo'
import type { MouseEvent } from 'react'

//20250805-2 함수 인터페이스
interface TodoFormProps {
  addTodo : (text : string, completed : completedT) => void
}
                                 //20250805-2 함수 인터페이스
export default function TodoForm({addTodo}:TodoFormProps) {

  //20250805-3 
  const selR = useRef<HTMLInputElement>(null);
  const txtR = useRef<HTMLSelectElement>(null);


                    //20250805-4
  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();

    //20250805-5 이렇게하면 밑에 current뒤에 ? 안해도됨
    if (!txtR.current || !selR.current) return;
    console.log("❤ handleOk 실행됨");

    if(txtR.current.value==""){
      alert("할일 내용을 입력하세요.")
      txtR.current.focus();
      return ;
    }
    console.log("❤ 추가할 값:", txtR.current.value, selR.current.value);
    
                                              //20250805-6 타입 명시해주기 
    addTodo(txtR.current.value, selR.current.value as completedT);
    handleCancel();
  }

  const handleCancel = () => {
    console.log("❤ handleCancel 실행됨 - 입력값 초기화");
    //20250805-7 null 잡기 
    if(txtR.current) {
      txtR.current.value="";
      txtR.current.focus();
    }
    //20250805-8 값이 있을 때 넣어
    if(selR.current) selR.current.value="X";
    
  }

 
  useEffect(() => {
    console.log("❤ TodoForm 첫시작, 마우스커서 입력창으로 이동");
    //20250805-9 null잡기
    txtR.current?.focus();
  },[]);

  

  return (
    <div className='flex mt-5'>
       <form className="flex items-center border-1 border-gray-300 p-7 rounded-2xl"> 
          <p className='font-bold ml-5 mr-10'>TODO</p>
          <TailSelect2 selRef = {selR}
                       dText = "-----"
                       id="sel1"
                      >

            <option value="X">X</option>
            <option value="O">O</option>
          </TailSelect2>
          <input type ="text" id="txt1"
                 ref = {txtR}
                 className="underline w-[300px] h-[35px] mr-10"/>
          <TailButton caption = "확인"
                      color ="blue"
                      onClick = {handleOk}
                      type="button"/>
          <TailButton caption = "취소"
                      color ="blue"
                      onClick = {handleCancel}
                      type="button"/>
       </form>
    </div>
  )
}


// 인풋창에서 밑줄 생기는거 해결하기
// 새로고침 문제 : 크롬 → F12 → Network 탭 → 상단 체크박스 "Preserve log" 를 켜두면솔/네트워크 로그가 새로고침돼도 유지됨