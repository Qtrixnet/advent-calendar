import "./popup.scss";
import {FC} from "react";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setIsPopupOpenAction} from "../../sevices/reducers/popup";
import withFade from "../../hoc/withFade";
import {IStyle} from "../../types/types";

interface IPopupProps {
  // children: ReactElement | ReactNode,
  style: IStyle,
  isNotify?: boolean,
}

const Popup: FC<IPopupProps> = ({style, isNotify = false}) => {
  const dispatch = useAppDispatch();

  const handleClosePopup = () => {
    dispatch(setIsPopupOpenAction(false));
  }

  return (
    <div className={`popup ${isNotify ? 'popup_notify' : ''}`} style={style}>
      <div className="popup__overlay" onClick={handleClosePopup}/>
      <div className={`popup__content ${isNotify ? 'popup__content_notify' : ''}`}>
        <button className={`popup__close ${isNotify ? 'popup__close_hidden' : ''}`} onClick={handleClosePopup}/>

      </div>
    </div>
  );
};

const PopupWithFade = withFade(Popup);

export default PopupWithFade;
