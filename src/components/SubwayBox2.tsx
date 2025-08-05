import scode from '../db/scode.json';

// 20250805-1 subway 에서 인터페이스 가져와서 사용하기
import type {TdataItem} from "./Subway2"

// 20250805-2
interface SubwayBox2Props {
  data : TdataItem,
  idx : number
}

// 20250805-6  유니언타입 => "pm10" | "co2"
type ScodeKey = keyof typeof scode;
                                   // 20250805-3
export default function SubwayBox2({ data, idx }: SubwayBox2Props) {
  // 20250805-6 tdata에서 as ScodeKey[] 써서 밑에서 간편하게 사용하기
  const tdata = Object.keys(scode) as ScodeKey[];
  const str = String(data.controlnumber ?? '');

  const year = str.slice(0, 4);
  const month = str.slice(4, 6);
  const day = str.slice(6, 8);
  const time = str.slice(8, 10);

  return (
    <div>
      <div>
        {data['site']}{data['city']} (시각 : {year}. {month}. {day} {time}시 )
      </div>

      <div className='grid grid-cols-9 border-gray-300 rounded-xl mb-2'>
        {
          // 20250805-6 tdata
          tdata.map(key => (
            <div key={key} className='border border-gray-200'>
              <div className={`text-center text-white ${idx % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'}`}>
                {/* 20250805-4
                    scode의 키값을 유니언타입으로 잡아줌*/}
                {scode[key as keyof typeof scode].name}<br />
                ({key})
              </div>
              <div className='text-center '>
                {/* 20250805-5 스트링배열이라서 */}
                {/* 20250805-6 에서 tdata로 잡아놓은 덕분에 위에처럼 안써도됨 */}
                {/* {data[key as keyof TdataItem] !== undefined ? `${data[key]}${scode[key].unit}` : '데이터 없음'} */}
                {/* {data[key] !== undefined ? `${data[key]}${scode[key].unit}` : '데이터 없음'} */}
                 {data[key]}{scode[key]["unit"]}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
