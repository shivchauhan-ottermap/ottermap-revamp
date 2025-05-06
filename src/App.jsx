import Landing from "./pages/Landing";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="font">
            <Landing />
          </div>
        }
        />
      </Routes>
    </BrowserRouter>

  )
}

export default App
