import { useAtom } from "jotai";
import { isLogin } from "../atoms/IsLoginAtom";
import Login from "./Login";

export default function Home(): JSX.Element {
  const [login, setLogin] = useAtom(isLogin);
  const id = localStorage.getItem("id");

  return (
    <div>
      {login ? (
        <div className="mt-50">{id} 님 로그인이 되었습니다☺️</div>
      ) : (
        <Login />
      )}
    </div>
  );
}
