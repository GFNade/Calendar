import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import moment from 'moment';
import '../../styles/body/bystatus.scss'
import Tasksdetails from "./Tasksdetails";
import { showTasksdetails } from "../../store/actions/ShowTasksdetails";
const Bystatus = () => {
    const dispatch = useDispatch();
    const MyLifeRedux = useSelector(state => state.MyLifeRedux.MyLifeRedux);
    const WorkspaceRedux = useSelector(state => state.WorkspaceRedux.WorkspaceRedux);
    const title = useSelector(state => state.Page.Page);
    const titleworkspace = useSelector(state => state.Page.PageWorkspace);
    const [data, setData] = useState([]);
    const [data_month, setdata_month] = useState([]);
    const [UnComplete, setUnComplete] = useState([]);
    const [Completed, setCompleted] = useState([]);
    const [Stopped, setStopped] = useState([]);
    const [month, setMonth] = useState(7);
    const [year, setYear] = useState(2023);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const clickleft = () => {
        if (month > 1)
            setMonth(month - 1);
        else {
            setMonth(12);
            setYear(year - 1);
        }
    }
    const clickright = () => {
        if (month < 12)
            setMonth(month + 1);
        else {
            setMonth(1);
            setYear(year + 1);
        }
    }

    useEffect(() => {
        if (title === 'mylife') {
            setData(MyLifeRedux);
        }
        else {
            if (title === 'workspace') {
                setData(WorkspaceRedux.filter(item => item.workspace === titleworkspace));
            }
            else {
                if (title === 'calendar') {
                    setData([...WorkspaceRedux, ...MyLifeRedux]);
                }
            }
        }
    }, [titleworkspace, WorkspaceRedux, MyLifeRedux]);

    useEffect(() => {
        if (data && data.length > 0) {
            setdata_month(data.filter(item => moment(item.deadline, 'DD/MM/YYYY').format('M') === moment(month, 'M').format('M') && moment(item.deadline, 'DD/MM/YYYY').format('YYYY') === moment(year, 'YYYY').format('YYYY')));
            console.log(data_month);
        } else {
            setdata_month([]);
        }

    }, [month, year, data])

    useEffect(() => {
        if (data_month && data_month.length > 0) {
            setUnComplete(data_month.filter(item => item.status === 'UnComplete'));
            setCompleted(data_month.filter(item => item.status === 'Completed'));
            setStopped(data_month.filter(item => item.status === 'Stopped'));
        } else {
            setUnComplete([]);
            setCompleted([]);
            setStopped([]);
        }
    }, [data_month]);

    return (
        <>
            <Tasksdetails />
            <div className="bystatus">
                <div className='date'>
                    <FaAngleLeft className='icon_left' onClick={() => clickleft()} />
                    <span className="month">{monthNames[month - 1]} </span>
                    <span className="year">{year}</span>
                    <FaAngleRight className='icon_right' onClick={() => clickright()} />
                </div>
                <div className='category_colum'>
                    <div className='UnComplete'>
                        <div className="UnComplete_title">UnComplete</div>
                        <div className='UnComplete_data'>
                            {
                                UnComplete && UnComplete.length > 0 && UnComplete.map((item, index) => {
                                    return (
                                        <div key={index} className='category_colum_item' onClick={() => dispatch(showTasksdetails(item))}>
                                            <span>{item.task_name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='Completed'>
                        <div className='Completed_title'>Completed</div>
                        <div className='Completed_data'>
                            {
                                Completed && Completed.length > 0 && Completed.map((item, index) => {
                                    return (
                                        <div key={index} className='category_colum_item' onClick={() => dispatch(showTasksdetails(item))}>
                                            <span>{item.task_name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='Stopped'>
                        <div className='Stopped_title'>Stopped</div>
                        <div className='Stopped_data'>
                            {
                                Stopped && Stopped.length > 0 && Stopped.map((item, index) => {
                                    return (
                                        <div key={index} className='category_colum_item' onClick={() => dispatch(showTasksdetails(item))}>
                                            <span>{item.task_name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bystatus;