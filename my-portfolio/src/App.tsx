import './App.css'
import LeftRender from './components/LeftSide/LeftRender'
import RightRender from './components/RightSide/RightRender'

function App() {

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="sticky top-0 h-screen px-16">
        <LeftRender />
      </div>
      <div id="right-panel" className="overflow-y-auto h-screen">
        <RightRender />
      </div>
    </div>
  )
}

export default App
