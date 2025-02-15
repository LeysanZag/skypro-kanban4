import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../App";

const PopUser = (setIsAuth) => {
    const navigate = useNavigate();
   const handleLogOut = () => {
    setIsAuth(false);
    navigate(AppRoutes.LOGIN)
  }
  const handleToMain = ()=>{
    navigate(AppRoutes.MAIN)
    document.getElementById("user-set-target").style.display = "none"
  }
    return ( <div className="pop-exit" id="popExit">
    <div className="pop-exit__container">
        <div className="pop-exit__block">
            <div className="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
            </div>
            <form className="pop-exit__form" id="formExit" action="#">
                <div className="pop-exit__form-group">
                    <button onClick={handleLogOut} className="pop-exit__exit-yes _hover03" id="exitYes">Да, выйти</button>
                    <button type="button" onClick={handleToMain} className="pop-exit__exit-no _hover03" id="exitNo">Нет, остаться</button>
                </div>
            </form>
        </div>
    </div>
</div> );
}
 
export default PopUser;