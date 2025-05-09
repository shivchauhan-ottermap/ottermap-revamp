import Snow from "./pages/industries/Snow";
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
        <Route path="/industries/snow" element={
          <div className="font">
            <Snow />
          </div>
        }
        />
      </Routes>
    </BrowserRouter>

  )
}

export default App
