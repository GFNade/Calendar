import '../../../styles/sidebar/home/home.scss';
import Header from '../../body/Header';
import Tasksdetails from "../../body/Tasksdetails";
import moment from 'moment';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { showTasksdetails } from "../../../store/actions/ShowTasksdetails";
import { deleteTaskWorkspace } from '../../../store/actions/Workspace_action';
import { deleteTaskMylife } from '../../../store/actions/MyLife_action';
const Home = () => {
    const myday = new Date();
    const current_day = myday.getDay();
    const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dispatch = useDispatch();
    const MyLife = useSelector(state => state.MyLifeRedux.MyLifeRedux);
    const Workspaces = useSelector(state => state.WorkspaceRedux.WorkspaceRedux);
    const [data, setData] = useState(MyLife.concat(Workspaces));
    const [data_myday, setData_myday] = useState(data.filter(item => moment(item.deadline, 'DD/MM/YYYY').format('DD/MM/YYYY') === moment(myday).format('DD/MM/YYYY')));

    const deleteTask = (task) => {
        if (task.workspace === 'mylife') {
            dispatch(deleteTaskMylife(task.id));
        }
        else {
            dispatch(deleteTaskWorkspace(task.id));
        }
        toast.warning('Delete task successfully');
    }
    useEffect(() => {
        setData(MyLife.concat(Workspaces));
    }, [MyLife, Workspaces]);

    useEffect(() => {
        setData_myday(data.filter(item => moment(item.deadline, 'DD/MM/YYYY').format('DD/MM/YYYY') === moment(myday).format('DD/MM/YYYY')));
    }, [data]);

    return (
        <>
            <Tasksdetails />
            <div className='home'>
                <Header />
                <div className='home_body'>
                    <div className='home_header'>
                        <div className='weeks_day'> {weeks[current_day]} </div>
                        <div className='my_day'>Today: {moment(myday).format('DD - MM - YYYY')}</div>
                    </div>
                    <div className='myday_container'>
                        <div className='myday_data'>
                            {
                                data_myday && data_myday.length > 0 && data_myday.map((item, index) => {
                                    if (item.status === 'Completed') {
                                        return (
                                            <div key={index} className='mytasks_container_item' id='Completed_mytasks'  >
                                                <span className="deadline_mytasks" id='Completed_deadline' onClick={() => dispatch(showTasksdetails(item))}>{item.deadline}</span>
                                                <span className="tasksname_mytasks" onClick={() => dispatch(showTasksdetails(item))}>{item.task_name}</span>
                                                <button className="btn_mytasks" onClick={() => deleteTask(item)}>Delete</button>
                                                <span id='position_mytasks_compalted' className="position_mytasks">{item.position}</span>
                                            </div>
                                        )
                                    } else {
                                        if (item.status === 'UnComplete') {
                                            return (
                                                <div key={index} className='mytasks_container_item' id='UnComplete_mytasks'  >
                                                    <span className="deadline_mytasks" id='UnComplete_deadline' onClick={() => dispatch(showTasksdetails(item))}>{item.deadline}</span>
                                                    <span className="tasksname_mytasks" onClick={() => dispatch(showTasksdetails(item))}>{item.task_name}</span>
                                                    <button className="btn_mytasks" onClick={() => deleteTask(item)}>Delete</button>
                                                    <span id='position_mytasks_uncomplate' className="position_mytasks">{item.position}</span>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div key={index} className='mytasks_container_item' id='Stopped_mytasks'  >
                                                    <span className="deadline_mytasks" id='Stopped_deadline' onClick={() => dispatch(showTasksdetails(item))}>{item.deadline}</span>
                                                    <span className="tasksname_mytasks" onClick={() => dispatch(showTasksdetails(item))}>{item.task_name}</span>
                                                    <button className="btn_mytasks" onClick={() => deleteTask(item)}>Delete</button>
                                                    <span id='position_mytasks_stopped' className="position_mytasks">{item.position}</span>
                                                </div>
                                            )
                                        }
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;