import {Routes, Route} from "react-router-dom";

import Hack from "../Hack";
import Login from "../Login";

export default ({auth}) => (
  <Routes>
    <Route path="hack" element={<Hack/>}/>
    <Route auth={auth} index element={<Login/>}/>
  </Routes>
)