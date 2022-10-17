import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { MainLayout } from "./layouts/main";
import Registration from './Pages/Registartion/Registration';
import { RememberPassword } from './Components/Login/RememberPassword/RememberPassword';
import { MessagePassword } from './Components/Login/RememberPassword/MessagePassword/MessagePassword';
import { NewPassword } from './Components/Login/RememberPassword/NewPassword/NewPassword';
import { SuccessPassword } from './Components/Login/RememberPassword/SuccessPassword/SuccessPassword';

export const ProjectRoutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="/" element={'asd'}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/registration" element={<Registration />}/>
                    <Route path="/rememberPassword" element={<SuccessPassword />}/>
                    {/* <Route path="/messagePassword" element={<MessagePassword />}/> */}

                    <Route path="/messagePassword" element={<NewPassword />}/>
                </Route>
            </Routes>
        </div>
    )
}
