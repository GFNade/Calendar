import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';
import { closeAddTasks } from "../../store/actions/ShowForm_AddTasks";
import { addTaskMylife } from '../../store/actions/MyLife_action';
import { addTaskWorkspace } from '../../store/actions/Workspace_action';
import '../../styles/body/form_addtasks.scss'

const Example = () => {
    const myday = new Date();
    const [Id, setId] = useState(0);
    const [Task_name, setTask_name] = useState("");
    const [Description, setDescription] = useState("");
    const [Deadline, setDeadline] = useState(moment(myday).format('MM / DD / YYYY'));
    const [Status, setStatus] = useState("UnComplete");
    const [Member, setMember] = useState(1);
    const [Favourite, setFavourite] = useState(false);

    const Workspaces = useSelector(state => state.WorkspaceRedux.Workspaces);
    const show = useSelector(state => state.ShowForm_AddTasks.show);
    const Page = useSelector(state => state.Page.Page);
    const mylife_size = useSelector(state => state.MyLifeRedux.MyLifeRedux).length;
    const workspace_size = useSelector(state => state.WorkspaceRedux.WorkspaceRedux).length;
    const [Page_calendar, setPage_calendar] = useState('');
    const [workspace_name, setWorkspace_name] = useState(Workspaces[0].workspace_name);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeAddTasks());
    };

    const tasksname = (e) => {
        setTask_name(e.target.value);
    }
    const tasksdescription = (e) => {
        setDescription(e.target.value);
    }
    const inputdate = (e) => {
        setDeadline(e.target.value);
    }
    const clickWorkspace = () => {
        setPage_calendar('workspace');
        document.getElementById("work_mylife").style.display = "none";
    }
    const clickMylife = () => {
        setPage_calendar('mylife');
        document.getElementById("work_mylife").style.display = "none";
    }

    const clickWorkspacename = (e) => {
        setWorkspace_name(e);
        document.getElementById("workspace_name").style.display = "none";
    }
    const add = () => {
        if (!Task_name || !Description || !Deadline) {
            toast.error('Please fill in all fields');
            return;
        }
        if (Page === 'mylife' || (Page === 'calendar' && Page_calendar === 'mylife')) {
            setId(mylife_size + 1);
            let Task = { id: Id, workspace: "mylife", task_name: Task_name, description: Description, deadline: moment(Deadline).format('DD/MM/YYYY'), status: Status, favoutite: Favourite, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] };
            dispatch(addTaskMylife(Task));
            dispatch(closeAddTasks());
        }
        else {
            if (Page === 'workspace' || (Page === 'calendar' && Page_calendar === 'workspace')) {
                setId(workspace_size + 1);
                let Task = { id: Id, workspace: workspace_name, task_name: Task_name, description: Description, deadline: moment(Deadline).format('DD/MM/YYYY'), status: Status, favoutite: Favourite, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] };
                dispatch(addTaskWorkspace(Task));
                dispatch(closeAddTasks());
            }
        }
        toast.success('Add task success');
        setWorkspace_name(Workspaces[0].workspace_name);
        setPage_calendar('');
        setTask_name('');
        setDescription('');
        setDeadline(moment(myday).format('MM / DD / YYYY'));
    }

    return (
        <>
            <Modal show={show} className="form_addtasks">
                <Modal.Header className='addtask_header'>
                    <Modal.Title>Add Tasks</Modal.Title>
                </Modal.Header>
                <Modal.Body className='addtask_body'>
                    {
                        (Page === 'calendar') ?
                            <>
                                <input className='input_calendar_work_mylife' placeholder="workspace or mylife" onClick={() => document.getElementById("work_mylife").style.display = "block"} value={Page_calendar} />
                                <div id="work_mylife" style={{ display: "none" }}>
                                    <div className='workspacename' onClick={() => clickWorkspace()}>Workspace</div>
                                    <div className='mylifename' onClick={() => clickMylife()}>MyLife</div>
                                </div>

                            </>
                            : null

                    }

                    {
                        (Page === 'workspace' || (Page === 'calendar' && Page_calendar === 'workspace')) ?
                            <>
                                <input className='input_workspace' placeholder="Workspace Name" value={workspace_name} onClick={() => document.getElementById("workspace_name").style.display = "block"} />
                                <div id="workspace_name" style={{ display: "none" }}>
                                    {
                                        (Workspaces && Workspaces.length > 0) ?
                                            Workspaces.map((item, index) => {
                                                return (
                                                    <div className='workspacenameitem' key={index} onClick={() => clickWorkspacename(item.Workspaces_name)}>{item.Workspaces_name}</div>
                                                )
                                            })
                                            : null
                                    }
                                </div>
                            </>
                            : null
                    }
                    <input className='tasksname' placeholder='tasks name' onChange={(e) => tasksname(e)}></input>
                    <input className='tasksdescription ' placeholder='tasks description ' onChange={(e) => tasksdescription(e)}></input>
                    <input type="date" id="myDate" value={Deadline} onChange={(e) => inputdate(e)} />
                </Modal.Body>
                <Modal.Footer className='addtask_footer'>
                    <Button className='bt_add' onClick={() => add()}>ADD</Button>
                    <Button className='bt_close' variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;