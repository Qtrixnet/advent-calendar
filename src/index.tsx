import ReactDOM from 'react-dom/client';
import App from "./components/app/app";
import {Provider} from "react-redux";
import store from "./sevices/store";

const root = ReactDOM.createRoot(
  document.getElementById('advent') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);

