
import TailButton from '../ui/TailButton';

interface TodoItemProps {
  item: {
    id: number | string;
    text: string;
    completed: string;  // 'O' or something else
  };
  onDelete: (id: number | string) => void;
  onPatch: (id: number | string, checked: boolean) => void;
}

export default function TodoItem({ item, onDelete, onPatch }: TodoItemProps) {
  return (
    <div className="w-full flex flex-col items-center mt-1">
      <form className="flex justify-between items-center border border-gray-300
                     rounded-xl w-189 p-2 px-7">
        <div className="mt-1 flex justify-center items-center">
          <input
            type="checkbox"
            checked={item.completed === 'O'}
            onChange={(e) => {
              onPatch(item.id, e.target.checked);
            }}
            className="ml-2 mr-2 w-5 h-10 accent-blue-500 text-white"
          />
          <div className={item.completed === 'O' ? 'line-through text-yellow-500' : ''}>
            {item.text}
          </div>
        </div>
        <TailButton caption="삭제" color="blue" onHandle={() => onDelete(item.id)} />
      </form>
    </div>
  );
}
