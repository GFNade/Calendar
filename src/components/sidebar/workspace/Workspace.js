import { Outlet } from 'react-router-dom';
import '../../../styles/sidebar/workspace/workspace.scss';
import Header from '../../body/Header';
import Titlecontainer from '../../body/Titlecontainer';
import Navbar from '../../body/Navbar';
const Workspace = () => {
    return (
        <>
            <div className="workspace">
                <Header />
                <div className='workspace_title'>
                    <Titlecontainer />
                    <Navbar />
                </div>
                <div className='workspace_content'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Workspace;

