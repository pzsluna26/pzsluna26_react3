import { useEffect } from 'react'
import TailSelect from '../ui/TailSelect'
import { useRef,useState } from 'react'
import SubwayBox2 from './SubwayBox2'

//알고있으면 키값을, [key: string]: any; 보다는 명시적으로 아래처럼 하는게 좋음
export interface TdataItem {
      "city": string,
      "pm10": string,
      "co2": string,
      "co": string,
      "no2": string,
      "no": string,
      "nox": string,
      "o3": string,
      "pm25": string,
      "fad": string,
      "controlnumber": string,
      "areaIndex": string,
      "office": string,
      "site": string
};


export default function Subway2() {
  const selv = useRef<HTMLSelectElement>(null);
                                     //useState type
  const [tdata, setTdata] = useState<TdataItem[]>([]);
  const [timeData, setTimeData] = useState<TdataItem[]>([]);
  // const sareaCode : string[] = sarea.map()

  const getDataFatch = async() => {

    const baseurl = "https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?"
    const apiKey = `serviceKey=${import.meta.env.VITE_DATA_API}`
                                                                              // ? => null일 수 도 있음
    const etc = `&pageNo=1&resultType=json&controlnumber=20250723&areaIndex=${selv.current?.value}`

    const url = `${baseurl}${apiKey}${etc}`

    
    const resp = await fetch(url);
    const data = await resp.json();
    
    setTdata(data.response.body.items.item);
  }


  const handelSel = () => {
    console.log(selv.current?.value);
    getDataFatch()

  }

  useEffect(()=>{
    console.log("tdata",tdata)
       // 명시안해도 ts가 유추함
    let tm : string[] = [];
    tm = tdata.map(item => item.controlnumber);
    tm.sort();
    console.log("시간 정렬", tm);

    // tmData => timedata, <tdataime>의 배열
    let tmData = [];
    tmData = tm.map(item => tdata.filter(titem => titem.controlnumber == item)[0])

    setTimeData(tmData);
  }, [tdata]);


console.log(tdata)
  return (
  <div className='w-full'>
   <div className="flex justify-between items-center w-full px-4 gap-4 mb-5">
      <div className="font-bold text-3xl ml-20">측정소 선택</div>
      <TailSelect selRef={selv} handleSel={handelSel}/>
    </div>
    <div className='ml-20 mr-20'>
        {                // 타입 명시안해도 되긴 함
            timeData.map((item : TdataItem, idx : number)=>(
                <SubwayBox2 key={item['controlnumber']}
                            data={item}
                            idx={idx}/>
            ))


        }
    </div>
   
  </div>  

  )
}