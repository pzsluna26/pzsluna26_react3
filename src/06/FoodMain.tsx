import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"
import TailButton from "../ui/TailButton";
import { useState } from "react";
import type { ReactNode } from "react";

//20250805-1 useState 타입변경
import type { FoodItem } from "../types/Food";

export default function FoodMain() {
                                //20250805-1 useState 타입변경
  const [tag, setTag] = useState<ReactNode[]>([]) ;
  
  //20250805-2 group타입변경       
  let group : string[] = fooddata.map(item => item["운영주체 분류"].replaceAll(' ', ''));
  group = [...new Set(group)];
  console.log(group)
  
                 //20250805-3 group의 item하나는 string
  const onClick = (gubun:string) => {
    console.log(gubun)

    //20250805-3 tm의 item하나는 FoodItem
    let tm : FoodItem[] = fooddata.filter(item => item["운영주체 분류"].replaceAll(' ', '') == gubun )

    //20250805-4 tmtag ReactNode[]
    let tmTag : ReactNode[] = tm.map(item => <FoodCard key={item['사업장명']}
                                  item={item} />)
    setTag(tmTag);
  }

            
   return (
    <div className="mt-10 w-full flex flex-col justify-start items-center">
      <div className="w-8/10 bg-amber-100 h-20 mb-10
                      flex justify-center items-center">
         {group.map(item => <TailButton key={item} 
                                        caption={item}
                                        color="blue" 
                                        onHandle = {() => onClick(item)} /> )}
                                        {/* 인수가 들어있을 때는 콜백함수써야함 */}
      </div>
      <div className="w-8/10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {
          tag
        }

      </div>
    </div>
  )
}

