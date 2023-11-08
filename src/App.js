import './App.css';
import Home from "./pages/home/home";
import Feature from "./pages/feature/feature";
import {Routes, Route} from "react-router-dom";
import About from "./pages/about/about";

function App() {
  return (
      <div>
          <Routes>
              <Route path={'/'} element={<Home/>}>Home</Route>
              <Route path={'/feature'} element={<Feature/>}>feature</Route>
               <Route path={'/about'} element={<About/>}>About</Route>
            {/*    <Route path={'/categories'} element={<Section1/>}>Categories</Route>
              <Route path={'/users'} element={<Section1/>}></Route>*/}
          </Routes>
      </div>
  );
}

export default App;
