import { Routes, Route, Outlet } from "react-router-dom";
import Navsidebar from "./Navsidebar";

const Sidebar = () => {
    return (
        <>
            <Navsidebar />
            <Outlet />
            {/* <Routes> */}
            {/* <Route path="/" element={<Navsidebar />} /> */}
            {/* <Route path="/favourite" element={<Favourite />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/help" element={<Help />} />
                <Route path="/calendar" element={<Calendar />} >
                    <Route index element={<Bystatus />} />
                    <Route path="bystatus" element={<Bystatus />} />
                    <Route path="mytasks" element={<Mytasks />} />
                    <Route path="alltasks" element={<Alltasks />} />
                    <Route path="bydate" element={<Bydate />} />
                </Route>
                <Route path="/workspace" element={<Workspace />} >
                    <Route index element={<Bystatus />} />
                    <Route path="bystatus" element={<Bystatus />} />
                    <Route path="mytasks" element={<Mytasks />} />
                    <Route path="alltasks" element={<Alltasks />} />
                    <Route path="bydate" element={<Bydate />} />
                </Route>
                <Route path="/mylife" element={<Mylife />} >
                    <Route index element={<Bystatus />} />
                    <Route path="bystatus" element={<Bystatus />} />
                    <Route path="mytasks" element={<Mytasks />} />
                    <Route path="alltasks" element={<Alltasks />} />
                    <Route path="bydate" element={<Bydate />} />
                </Route> */}

            {/* </Routes> */}


        </>
    )
}

export default Sidebar;