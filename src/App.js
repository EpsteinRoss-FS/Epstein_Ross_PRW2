import logo from './logo.svg';
import './App.css';
import NavComponent from "./components/NavComponent";
import BodyComponent from "./components/BodyComponent";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Savings from "./components/Savings";

function App() {
  return (
      <div>
      <NavComponent />
      {/*<BodyComponent />*/}
          <section>
              <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="savings" element={<Savings />} />
              </Routes>
          </section>
      </div>
      // <h1 className="text-3xl font-bold underline">
      //   Hello world!
      // </h1>
  );
}

export default App;
