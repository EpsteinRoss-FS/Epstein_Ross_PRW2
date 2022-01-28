import logo from './logo.svg';
import './App.css';
import NavComponent from "./components/NavComponent";
import BodyComponent from "./components/BodyComponent";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Savings from "./components/Savings";
import Reports from "./components/Reports";
import Income from "./components/Income";
import Spending from "./components/Spending";

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
                  <Route path="reports" element={<Reports />} />
                  <Route path="income" element={<Income />} />
                  <Route path="spending" element={<Spending />} />
              </Routes>
          </section>
      </div>
      // <h1 className="text-3xl font-bold underline">
      //   Hello world!
      // </h1>
  );
}

export default App;
