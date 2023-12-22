import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyACiTPZLsComXX3_YZ-7448tr38MLrp9Js",
  authDomain: "foods-a99c6.firebaseapp.com",
  projectId: "foods-a99c6",
  storageBucket: "foods-a99c6.appspot.com",
  messagingSenderId: "473397961254",
  appId: "1:473397961254:web:8421a27d27c32319f03ce7"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
