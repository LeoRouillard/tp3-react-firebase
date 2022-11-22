import {Routes, Route} from "react-router-dom";

import Hack from "../Hack";
import Login from "../Login";

const fn = ({auth}) => {(
  <Routes>
    <Route path="hack" element={<Hack/>}/>
    <Route auth={auth} index element={<Login/>}/>
  </Routes>
)}

export default fn;