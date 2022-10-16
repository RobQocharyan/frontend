import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/main";
import Registration from "./Pages/Registartion/registration";

export const ProjectRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={'asd'}/>
                <Route path="/registration" element={<Registration />}/>
            </Route>
        </Routes>
    )
}
