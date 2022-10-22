import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { MainLayout } from "./layouts/main";
import Registration from './Pages/Registartion/registration';
import { RememberPassword } from "./Pages/Login/RememberPassword/RememberPassword";
// import { MessagePassword } from './Components/Login/RememberPassword/MessagePassword/MessagePassword';
// import { NewPassword } from './Components/Login/RememberPassword/NewPassword/NewPassword';
import { SuccessPassword } from "./Pages/Login/RememberPassword/SuccessPassword/SuccessPassword";
import { Rules } from './Components/Rules/Rules';
import { NewPassword } from './Pages/Login/RememberPassword/NewPassword/NewPassword';
import { MessagePassword } from './Pages/Login/RememberPassword/MessagePassword/MessagePassword';

export const ProjectRoutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/frontend" element={<MainLayout/>}>
                    <Route path="/frontend/login" element={<Login />}/>
                    <Route path="/frontend/registration" element={<Registration />}/>
                    <Route path="/frontend/rememberPassword" element={<RememberPassword />}/>
                    <Route path="/frontend/rules" element={<Rules />}/>

                    <Route path="/frontend/messagePassword" element={<SuccessPassword />}/>
                </Route>
            </Routes>
        </div>
    )
}
