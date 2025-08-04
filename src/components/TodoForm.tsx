import { useRef, useEffect } from 'react';
import TailButton from '../components/TailButton';
import TailSelect2 from '../components/TailSelect2';

type TodoFormProps = {
  addTodo: (text: string, status: string) => void;
};

export default function TodoForm({ addTodo }: TodoFormProps) {
  const selR = useRef<HTMLSelectElement>(null) as React.RefObject<HTMLSelectElement>;
  const txtR = useRef<HTMLInputElement>(null);

  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("❤ handleOk 실행됨");

    if (!txtR.current?.value) {
      alert("할일 내용을 입력하세요.");
      txtR.current?.focus();
      return;
    }

    console.log("❤ 추가할 값:", txtR.current.value, selR.current?.value);
    addTodo(txtR.current.value, selR.current?.value ?? '');
    handleCancel();
  };

  const handleCancel = () => {
    console.log("❤ handleCancel 실행됨 - 입력값 초기화");
    if (txtR.current) {
      txtR.current.value = '';
      txtR.current.focus();
    }
    if (selR.current) {
      selR.current.value = 'X';
    }
  };

  useEffect(() => {
    console.log("❤ TodoForm 첫시작, 마우스커서 입력창으로 이동");
    txtR.current?.focus();
  }, []);

  return (
    <div className="flex">
      <form className="flex items-center border-1 border-gray-300 p-7 rounded-2xl">
        <p className="font-bold ml-5 mr-10">TODO</p>
        <TailSelect2 selRef={selR} dText="-----">
          <option value="X">X</option>
          <option value="O">O</option>
        </TailSelect2>
        <input
          type="text"
          id="txt1"
          ref={txtR}
          className="underline w-[300px] h-[35px] mr-10"
        />
        <TailButton caption="확인" color="blue" onHandle={handleOk}  />
        <TailButton caption="취소" color="blue" onHandle={handleCancel} />
      </form>
    </div>
  );
}
