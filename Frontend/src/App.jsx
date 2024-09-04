import { useState } from "react";
import "./App.css";
import HackathonCard from "./components/HackathonCard";
import NavBar from "./components/NavBar";
import { HackathonProvider } from "./context/HackathonContext";
import DetailPage from "./pages/DetailPage/DetailPage";
import ListPage from "./pages/ListPage/ListPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useNavigate,
} from "react-router-dom";

function App() {
  // const [details, setDetails] = useState(null);
  // // const navigate = useNavigate();
  // const handleHackathonDetails = (hackathon) => {
  //   setDetails(hackathon);
  //   // navigate("/detail");
  // };
  return (
    <>
      <HackathonProvider>
        <div className="app-container poppins-regular">
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<ListPage />}></Route>
              <Route exact path="/create" element={<HackathonCard />}></Route>
              <Route exact path="/edit/:id" element={<HackathonCard />}></Route>
              <Route exact path="/detail" element={<DetailPage />}></Route>
            </Routes>
          </Router>
        </div>
      </HackathonProvider>
    </>
  );
}

export default App;
