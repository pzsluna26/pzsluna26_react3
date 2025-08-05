import bank from "../assets/bank.png";
import busan from "../assets/busan.png";
import market from "../assets/market.png";
import { useState } from "react";

// 20250805-1 types에서 가져오기
import type { FoodItem } from "../types/Food";

// 20250805-2 인터페이스1
interface FoodCardProbs { 
    item: FoodItem 
}

                                   // 20250805-2 인터페이스2
export default function FoodCard({ item }: FoodCardProbs) {

                            // 20250805-3 useState 제네릭타입 명시
    const [flag , setFalg] = useState<boolean>(false) ;

    const handleToggle = () => {
    setFalg(!flag) ;
    }

    const type = item["구분"];
    const imageSrc =
        type === "광역지원센터"
            ? busan
            : type === "기초푸드뱅크"
            ? bank
            : type === "기초푸드마켓"
            ? market
            : null;

    return (
        <div className="w-full flex justify-start items-start
                    border rounded-lg border-gray-300">
            <div className="w-1/4 p-4">

             {/* 20250805-4 src속성오류
              */}
                <img src={imageSrc} alt="category icon" />
            </div>
            <div className="w-3/4 flex flex-col justify-between items-start">
                <div className="w-full flex flex-col justify-start items-start">
                    <h1 className="text-xl font-bold">
                        {item["사업장명"]}
                    </h1>
                    <h2 className="text-small font-bold text-gray-600">
                        {item["운영주체명"]}
                    </h2>
                    <p className="h-12 w-full text-left text-small text-gray-400">
                        {item["사업자 소재지"]}
                    </p>
                </div>
                <div className="bg-yellow-100 h-8 mt-4 px-4 text-black text-left hover:cursor-pointer w-full"
                     onClick={handleToggle}>
                    {flag && item["연락처(대표번호)"]}
                </div>
            </div>
                
            
        </div>
    );
}

                