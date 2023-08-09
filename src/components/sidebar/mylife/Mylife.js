import { Outlet } from 'react-router-dom';
import '../../../styles/sidebar/mylife/mylife.scss';
import Header from '../../body/Header';
import Titlecontainer from '../../body/Titlecontainer';
import Navbar from '../../body/Navbar';
const Mylife = () => {
    return (
        <>
            <div className="mylife">
                <Header />
                <div className="mylife_title">
                    <Titlecontainer />
                    <Navbar />
                </div>
                <div className='mylife_content'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}


export default Mylife;