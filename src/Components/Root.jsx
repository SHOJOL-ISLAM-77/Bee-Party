import { Outlet } from "react-router-dom";
import Footer from "./Footer";


const Root = () => {
    return (
        <div className="font-Fredoka ">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;