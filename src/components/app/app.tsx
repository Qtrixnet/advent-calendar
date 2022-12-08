import './app.scss';
import {FC} from "react";
import Header from "../header/header";
import Popup from "../popup/popup";
import {useAppSelector} from "../../hooks/useAppSelector";
import Days from "../days/days";

const App: FC = () => {
  const isPopupOpen = useAppSelector(state => state.popup.isPopupOpen);

  return (
    <div className="app">
      <Header/>
      <Days />
      {isPopupOpen && <Popup isNotify/>}
    </div>
  );
}

export default App;
