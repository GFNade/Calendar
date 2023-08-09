import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import Signin from './components/login/Signin';
import Signup from './components/login/Signup';
import Home from "./components/sidebar/home/Home"
import Favourite from "./components/sidebar/config/Favourite";
import Setting from "./components/sidebar/config/Setting";
import Notice from "./components/sidebar/config/Notice";
import Help from "./components/sidebar/config/Help";
import Calendar from "./components/sidebar/calendar/Calendar";
import Mylife from "./components/sidebar/mylife/Mylife";
import Workspace from "./components/sidebar/workspace/Workspace";
import Bystatus from "./components/body/Bystatus";
import Mytasks from "./components/body/Mytasks";
import Alltasks from "./components/body/Alltasks";
import Bydate from "./components/body/Bydate";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Sidebar />} >
            <Route index element={<Home />} />
            <Route path="favourite" element={<Favourite />} />
            <Route path="calendar" element={<Calendar />} >
              <Route index element={<Bystatus />} />
              <Route path="bystatus" element={<Bystatus />} />
              <Route path="mytasks" element={<Mytasks />} />
              <Route path="alltasks" element={<Alltasks />} />
              <Route path="bydate" element={<Bydate />} />
            </Route>
            <Route path="workspace" element={<Workspace />} >
              <Route index element={<Bystatus />} />
              <Route path="bystatus" element={<Bystatus />} />
              <Route path="mytasks" element={<Mytasks />} />
              <Route path="alltasks" element={<Alltasks />} />
              <Route path="bydate" element={<Bydate />} />
            </Route>
            <Route path="mylife" element={<Mylife />} >
              <Route index element={<Bystatus />} />
              <Route path="bystatus" element={<Bystatus />} />
              <Route path="mytasks" element={<Mytasks />} />
              <Route path="alltasks" element={<Alltasks />} />
              <Route path="bydate" element={<Bydate />} />
            </Route>
            <Route path="notice" element={<Notice />} />
            <Route path="help" element={<Help />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
