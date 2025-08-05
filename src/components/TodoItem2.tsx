import TailButton from "../ui/TailButton"

//20250805-1
import type { Todo, completedT } from "../types/Todo";

//20250805-2
interface TodoItemProps {
  item: Todo,
  onDelete: (id: string) => void,
  onToggle: (id : string , completed : completedT) => void
}
                                                             //20250805-2
export default function TodoItem({item, onDelete, onToggle} : TodoItemProps) {
  return (
    <div className=" mt-2 flex justify-between items-center border border-gray-300
                     rounded-xl w-full p-2 px-7">
      <div onClick={()=> onToggle(item.id, item.completed)}>
        {
          item.completed == "X" ? "🤍" : "💙"
        }
      </div>
      <span className={`text-left w-120 ${item.completed === "X" ? ""
                                                : "text-yellow-400 line-through"}`}>
        {item.text}
      </span>
      <div>
        <TailButton caption = "삭제"
                    color ="blue"
                    onClick = {()=> onDelete(item.id)}/>
      </div>
    </div>
  )
}
}
