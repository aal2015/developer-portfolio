import './App.css'
import LeftRender from './components/LeftSide/LeftRender'
import RightRender from './components/RightSide/RightRender'
import "/node_modules/flag-icons/css/flag-icons.min.css";

function App() {

  return (
    <div className="grid grid-cols-2 h-screen  bg-blue-700">
      <div className="sticky top-0 h-screen px-10 pt-10">
        <LeftRender />
      </div>
      <div id="right-panel" className="overflow-y-auto h-screen px-10">
        <RightRender />
      </div>
    </div>
  )
}

export default App
