import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useSelector ,  Provider } from 'react-redux';
import store from "./redux/store";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import login from "./pages/login";
import Register from "./pages/Register";
import MyBooksPage from "./pages/MyBooksPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/mybooks" element={<MyBooksPage/>}/>
        </Routes>
      </Router>
    </Provider>
  );
};
export default App;
