import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { MainLayout } from "./layouts/main";
import Registration from './Pages/Registartion/registration';
import { RememberPassword } from './Components/Login/RememberPassword/RememberPassword';
import { MessagePassword } from './Components/Login/RememberPassword/MessagePassword/MessagePassword';
import { NewPassword } from './Components/Login/RememberPassword/NewPassword/NewPassword';
import { SuccessPassword } from './Components/Login/RememberPassword/SuccessPassword/SuccessPassword';

export const ProjectRoutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/frontend" element={<MainLayout/>}>
                    <Route path="/frontend/login" element={<Login />}/>
                    <Route path="/frontend/registration" element={<Registration />}/>
                    <Route path="/frontend/rememberPassword" element={<RememberPassword />}/>
                    <Route path="/frontend/messagePassword" element={<NewPassword />}/>

                    {/* <Route path="/messagePassword" element={<NewPassword />}/> */}
                </Route>
            </Routes>
        </div>
    )
}
