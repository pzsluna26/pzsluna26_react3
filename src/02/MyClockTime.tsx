import { useState, useEffect } from "react";

export default function MyClockTime() {
                                               // 타입
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // 1초마다 시간 갱신

    return () => clearInterval(timer); // 컴포넌트 제거 시 타이머 해제
  }, []);

  return (
    <div className="text-xl font-bold">
      현재 시각 : {currentTime.toLocaleTimeString()}
    </div>
  );
}
