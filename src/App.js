import './App.css';
import Home from "./pages/home/home";
import Section1 from './sections/section1/section1';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
      <>
          <Routes>
              <Route path={'/'} element={<Home/>}>Home</Route>
              <Route path={'/contests'} element={<Section1/>}>Contests</Route>
              <Route path={'/singleContests'} element={<Section1/>}>Single Contests</Route>
              <Route path={'/categories'} element={<Section1/>}>Categories</Route>
              <Route path={'/users'} element={<Section1/>}></Route>
          </Routes>
          {/* <Home/>*/}
      </>
  );
}

export default App;
