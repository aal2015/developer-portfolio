import './App.css'
import LeftRender from './components/LeftSide/LeftRender'
import RightRender from './components/RightSide/RightRender'
import "/node_modules/flag-icons/css/flag-icons.min.css";

function App() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.2fr] bg-blue-700 xl:h-screen">
      
      {/* Left */}
      <div className="xl:sticky xl:top-0 xl:h-screen xl:overflow-hidden px-6 xl:px-10 pt-10">
  <LeftRender />
</div>

      {/* Right */}
      <div id="right-panel" className="xl:overflow-y-auto xl:h-screen px-6 xl:px-10">
        <RightRender />
      </div>

    </div>
  )
}

export default App;