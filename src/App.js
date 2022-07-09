import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Rooms from './components/Rooms';
import Footer from './components/Footer';
import Home from './components/home';

import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './ConfigureStore/store';


const baseURL="http://localhost:8000/api";
  axios.defaults.baseURL=baseURL;
  //axios.defaults.headers.post["Content-Type"]="multipart/form-data";
  axios.defaults.headers.post["Access-Control-Allow-Origin"]="*";
  axios.defaults.headers.post["Access-Control-Allow-Header"]="Origin, X-Requested-with, Content-Type, Accept";
  axios.defaults.headers.post["Access-Control-Allow-Methods"]="GET,HEAD,POST,PUT,PATCH,DELETE";




function App() {
  return (
    
    <Provider store={store}>
    
  
      <Router>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route  path="/signin" element={<SignIn/>}/>
          <Route  path="/signup" element={<SignUp/>}/>
       </Routes>
    </Router>
     
    
    </Provider>
    
     
    

  
    

    
    
  );
}

export default App;