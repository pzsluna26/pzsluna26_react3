import scodeRaw from '../db/scode.json';
const scode = scodeRaw as SensorCode;


type SubwayData = {
  controlnumber: string | number;
  site: string;
  city: string;
  [key: string]: any; // 나머지 필드 (ex. pm10, pm25 등)
};

type SubwayBoxProps = {
  data: SubwayData;
  idx: number;
};

type SensorCode = {
  [key: string]: {
    name: string;
    unit: string;
  };
};


export default function SubwayBox({ data, idx }: SubwayBoxProps) {
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

      <div className='w-full grid grid-cols-9 gap-1'>
        {
          Object.keys(scode).map(key => (
            <div key={key} className='border border-gray-200'>
              <div className={`text-center text-white ${idx % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'}`}>
                {scode[key].name}<br />
                ({key})
              </div>
              <div className='text-center '>
                {data[key] !== undefined ? `${data[key]}${scode[key].unit}` : '데이터 없음'}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
