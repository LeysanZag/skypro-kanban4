import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "./pages/MainPage/MainPage";
import CardPage from "./pages/CardPage/CardPage";
import Login from "./pages/Login/Login";
// import Exit from "./pages/Exit/Exit";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import { useState } from "react";
import PopUser from "./components/Popups/PopUser/PopUser";

export const AppRoutes = {
  MAIN: "/",
  CARD: "/card",
  NOT_FOUND: "*",
  USER_EXIT: "/exit",
  LOGIN: "/login",
  REGISTER: "/register",
};

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={AppRoutes.MAIN} element={<MainPage />}>
        <Route path={AppRoutes.CARD + "/:id"} element={<CardPage />} />
        <Route path={AppRoutes.USER_EXIT} element={<PopUser setIsAuth={setIsAuth}/>} />
        </Route>
      </Route>

    <Route path={AppRoutes.LOGIN} element={<Login setIsAuth={setIsAuth}/>} />
      <Route path={AppRoutes.REGISTER} element={<Register />} />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
