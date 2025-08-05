import './App.css'
import Nav from './components/Nav' // 헤더 컴포넌트
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Subway from './components/Subway2'
import Rest from './components/Rest'
import TodoList from './components/TodoList'
import MyClock from './02/MyClock'
import Lotto from './05/Lotto'
import FoodMain from './06/FoodMain'

function App() {
  return (
    <BrowserRouter>
      <div className="w-full xl:w-4/5 h-screen bg-white mx-auto flex flex-col justify-start items-start">
        <Nav />
        <main className="mt-10 w-full flex flex-col justify-start items-center overflow-y-auto flex-grow mb-8">
          {/* <Rest /> */}
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Subway" element={<Subway />} />
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/Rest" element={<Rest/>}/>
            <Route path="/MyClock" element={<MyClock/>}/>
            <Route path="/Lotto" element={<Lotto/>}/>
            <Route path="/FoodMain" element={<FoodMain/>}/>
          </Routes>
        </main>
        <footer className="w-full min-h-20 flex justify-center items-center bg-blue-400 text-white">
          k-digital 2025 2기 FrontEnd
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App