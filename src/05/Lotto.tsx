import TailBall from '../ui/TailBall'
import TailButton from "../ui/TailButton"
import {useState, type ReactNode} from "react"
// import { ReactNode } from 'react';

export default function Lotto() {
                                        //20250805-1 ReactNode
    const[lottoTag, setLottoTag] = useState<ReactNode[]>([]);
    const HandleClick = () => {

        // 20250805-2 배열 타입 명시
        let num: number[] = [];

        while(num.length < 7){
            let n = Math.floor(Math.random()*45)+1; //1~45  
            if(!num.includes(n)) num.push(n);
            
        } console.log(num)

        // 20250805-2 배열 타입 명시(선택)
        let bounus : number[] = num.splice(-1);
        
        num.sort((a,b) => a-b);

                    // 20250805-3 배열 타입 명시
                    // number or string이 들어올 수 있는 배열이다!
        let lotto : (number | string)[] = [...num, '+', ...bounus];

        // 20250805-4 다른변수를 써라! => tmTag
                                                //typeof 문자열 이면, 스팬태그 날려라!
        let tmTag : ReactNode[] = lotto.map(item => typeof item == 'string' ? <span className = "font-bold text-3xl" key={`n${item}`}>{item}</span>
                                                                               : <TailBall key={`n${item}`} n={item}/>);
        
        // 20250805-4 다른변수를 써라! => tmTag
        console.log(tmTag)
        setLottoTag(tmTag)
  }

  return (
    <div className="mt-60 -full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center space-x-2">
            {lottoTag} 
        </div>
        <div className = "mt-15"> 
            <TailButton caption="로또번호생성"
                  color="blue"
                  onHandle={HandleClick}/>
        </div>
    </div>
  )
}


// 실습 포인트 : 데이터를 만들고, 랜더링하려면 state 변수를 써야함!
// 해결 해야할 것 
// 1. 테일볼 사이드 간격 띄우기
// 2. 버튼 스타일 고치기
// 구분이 광역이면 부산시
// 푸드카드 만들고, 이미지, 글자 나오게하기 클릭하면 글자가 보이고, 아니면 아놉이고 onoff 전화버놓