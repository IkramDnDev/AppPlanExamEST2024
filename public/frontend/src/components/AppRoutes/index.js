


import { Route, Routes } from "react-router-dom";
import Planifier from "../../pages/Planifier";
import Planifications from "../../pages/Planifications";
import ModuleExam from "../../pages/ModuleExam";
import SurveillantExam from  '../../pages/SurveillantExam';
import FiliereCreneau from  "../../pages/FiliereCreneau";
import LocalCreneau from  "../../pages/LocalCreneau" ;

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="planifier" element={<Planifier/>}/>
            <Route path="planifications" element={<Planifications/>}/>
            <Route path="module" element={<ModuleExam/>}/>
            <Route path="surveillant" element={<SurveillantExam/>}/>
            <Route path="fliliere" element={<FiliereCreneau/>}/>
            <Route path="local" element={<LocalCreneau/>}/>
        </Routes>
    );
}



