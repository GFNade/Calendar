import '../../styles/body/header.scss';
import Avatar from '../../assets/avatar.png';
import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showTasksdetails } from "../../store/actions/ShowTasksdetails";
import moment from 'moment';
import { AiOutlineSearch, AiFillSetting, AiFillBell } from "react-icons/ai";
import { MdLogout, MdHelp } from "react-icons/md";
const Header = () => {
    const [search, setSearch] = useState('');
    const typingTimeoutref = useRef(null);
    const MyLifeRedux = useSelector(state => state.MyLifeRedux.MyLifeRedux);
    const WorkspaceRedux = useSelector(state => state.WorkspaceRedux.WorkspaceRedux);
    const data_login = useSelector(state => state.Login.Login);
    const [data, setData] = useState(MyLifeRedux.concat(WorkspaceRedux));
    const [data_search, setData_search] = useState([]);
    const dispatch = useDispatch();
    const clickSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (typingTimeoutref.current) {
            clearTimeout(typingTimeoutref.current);
        }
        typingTimeoutref.current = setTimeout(() => {
            if (value === '') {
                setData_search([]);
            } else {
                let newdata = [];
                if (data && data.length > 0) {
                    data.map(item => {
                        if (item.task_name.toLowerCase().includes(value.toLowerCase())) {
                            newdata.push(item);
                        }
                    })
                }
                setData_search(newdata);
            }
        }, 300);
    }


    useEffect(() => {
        setData(MyLifeRedux.concat(WorkspaceRedux));
    }, [MyLifeRedux, WorkspaceRedux])

    const clickavatar = () => {
        if (document.getElementById('logout').style.display === 'none') {
            document.getElementById('logout').style.display = 'block'
        }
        else {
            document.getElementById('logout').style.display = 'none'
        }
    }
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="header">
                {/* <div className='AppName'> Smart Time</div> */}
                <div className='search'>
                    <button type="submit" className='submit'><i className="fa fa-search"></i></button>
                    <input className='input_search' placeholder="Search" value={search} onChange={(e) => clickSearch(e)} ></input>
                </div>
                <div className='data_search'>
                    {
                        data_search && data_search.length > 0 && data_search.map((item, index) => {
                            return (
                                <div key={index} className='search_item' onClick={() => dispatch(showTasksdetails(item))}>
                                    <AiOutlineSearch id='AiOutlineSearch' />
                                    <span id="search_item_deadline">{moment(item.deadline, 'DD/MM/YYYY').format('DD/MM/YYYY')}</span>
                                    <span id="search_item_task_name">{item.task_name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <AiFillBell className='AiFillBell' />
                <img className='avatar' src={Avatar} alt='avatar' onClick={() => clickavatar()} ></img>
                <div className='logout' id='logout' style={{ display: 'none' }}>
                    <div className='logout_name' >
                        <img className='logout_avatar' src={Avatar} alt='avatar' ></img>
                        <span className='logout_firstname'>{data_login[0].firstName}</span>
                        <span className='logout_lastname'>{data_login[0].lastName}</span>
                    </div>
                    <div className='header_help'>
                        <MdHelp className='header_MdHelp' />
                        <span className='header_help_text'>Help</span>
                    </div>
                    <div className='header_setting'>
                        <AiFillSetting className='header_AiFillSetting' />
                        <span className='header_setting_text'>Setting</span>
                    </div>
                    <div className='logout_content'>
                        <MdLogout className='MdLogout' />
                        <span className='logout_text'>Logout</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header; 