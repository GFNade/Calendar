import '../../styles/body/navbar.scss';
import { HiPencilSquare } from "react-icons/hi2";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { MdEventNote } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import {
    NavLink
} from "react-router-dom";
import { useSelector } from 'react-redux';


const Navbar = () => {
    let title = useSelector(state => state.Page.Page);
    // if (title === 'calendar') {
    //     return (
    //         <>
    //             <div className="navbar">
    //                 <HiPencilSquare id='HiPencilSquare' className='navbar_icon' />
    //                 <NavLink className="navbar_text" to='/bystatus'>By status</NavLink>
    //                 <BsFileEarmarkCheck className='navbar_icon' />
    //                 <NavLink className="navbar_text" to='/mytasks'>My tasks</NavLink>
    //                 <CgNotes className='navbar_icon' />
    //                 <NavLink className="navbar_text" to='/alltasks'>All tasks</NavLink>
    //                 <MdEventNote className='navbar_icon' />
    //                 <NavLink className="navbar_text" to='/bydate'>By date</NavLink>
    //             </div>

    //         </>
    //     )
    // }
    return (
        <>
            <div className="navbar">
                <HiPencilSquare id='HiPencilSquare' className='navbar_icon' />
                <NavLink className="navbar_text" to={`/home/${title}/bystatus`}>By status</NavLink>
                <BsFileEarmarkCheck className='navbar_icon' />
                <NavLink className="navbar_text" to={`/home/${title}/mytasks`}>My tasks</NavLink>
                <CgNotes className='navbar_icon' />
                <NavLink className="navbar_text" to={`/home/${title}/alltasks`}>All tasks</NavLink>
                <MdEventNote className='navbar_icon' />
                <NavLink className="navbar_text" to={`/home/${title}/bydate`}>By date</NavLink>
            </div>
        </>
    )
}

export default Navbar;