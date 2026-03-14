import './App.css'
import LeftRender from './components/LeftSide/LeftRender'
import RightRender from './components/RightSide/RightRender'

function App() {

  return (
    <div className="flex">
      <div className="w-1/2">
        <LeftRender />
      </div>
      <div className="w-1/2">
        <RightRender />
      </div>
    </ div>
  )
}

export default App
