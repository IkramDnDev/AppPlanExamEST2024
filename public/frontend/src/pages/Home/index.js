

import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import {Outlet} from "react-router-dom"

export default function Home(){
    return(
        <div>
            <TopBar/>
            <Outlet/>
            <SideBar/>
        </div>
       
    );
}