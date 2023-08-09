import {
    NavLink, Outlet
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { addWorkspace, deleteWorkspace } from "../../store/actions/Workspace_action";
import { setpageWorkspace, setpage } from "../../store/actions/Page";
import { AiFillClockCircle, AiFillCalendar, AiOutlinePlus, AiFillStar, AiOutlineProject } from "react-icons/ai";
import { MdSubject } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { BsPersonWorkspace } from "react-icons/bs";
import '../../styles/sidebar/Navsidebar.scss';
import Logo from '../../assets/logo.png';
const Navsidebar = () => {
    const Workspaces = useSelector(state => state.WorkspaceRedux.Workspaces);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [workspace, setWorkspace] = useState({ Workspaces_name: '', Workspaces_type: '' });
    const ShowAddWorkspace = () => {
        setShow(true);
    }
    const clickSubject = () => {
        setWorkspace({ ...workspace, Workspaces_type: 'subject' });
        document.getElementById("sub_pro").style.display = "none";
    }
    const clickProject = () => {
        setWorkspace({ ...workspace, Workspaces_type: 'project' });
        document.getElementById("sub_pro").style.display = "none";
    }
    const input_workspace_name = (e) => {
        setWorkspace({ ...workspace, Workspaces_name: e.target.value });
    }
    const add = () => {
        if (!workspace.Workspaces_name || !workspace.Workspaces_type) {
            toast.error('Please fill in all fields');
            return;
        }
        dispatch(addWorkspace(workspace));
        setShow(false);
        setWorkspace({ Workspaces_name: '', Workspaces_type: '' });
        toast.success('Add workspace successfully');
    }
    const click_workspace_name = (item) => {
        dispatch(setpage('workspace'));
        dispatch(setpageWorkspace(item.Workspaces_name))
    }
    const deleteWorkspaceName = (item) => {
        dispatch(deleteWorkspace(item.Workspaces_name))
        toast.warning('Delete workspace successfully');
    }

    return (
        <>
            <Modal className="formaddworkspace" show={show}>
                <Modal.Header className="addworkspace_header"><span id="formaddworkspace_header">Add Workspace</span></Modal.Header>
                <Modal.Body className="addworkspace_body">
                    <input className="input_sub_pro" placeholder="subject or project" value={workspace.Workspaces_type} onClick={() => document.getElementById("sub_pro").style.display = "block"}></input>
                    <div id="sub_pro" style={{ display: "none" }}>
                        <div className="subject" onClick={() => clickSubject()}> Subject</div>
                        <div className="project" onClick={() => clickProject()}>Project</div>
                    </div>
                    <input className="input_workspace_name" type="text" placeholder="Workspace name" value={workspace.Workspaces_name} onChange={(e) => input_workspace_name(e)} />
                </Modal.Body>
                <Modal.Footer className="addworkspace_footer">
                    <Button className="addworkspace_add" onClick={() => add()}>Add</Button>
                    <Button className="addworkspacr_close" variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="Navsidebar">
                <div className="nav_logo">
                    <NavLink className="navlogo" to="/home"><img className="sidebar_logo" src={Logo} /></NavLink>
                </div>
                <div className="nav_favourite">
                    <AiFillStar className="icon_favourite" />
                    <NavLink className="navfavourite" to="/home/favourite">Favourite</NavLink>

                </div>
                <div className="nav_calendar" onClick={() => dispatch(setpage('calendar'))}>
                    <AiFillCalendar className="AiFillCalendar" />
                    <NavLink className="navcalendar" to="/home/calendar">Calendar</NavLink>


                </div>
                <div className="nav_mylife" onClick={() => dispatch(setpage('mylife'))}>
                    <AiFillClockCircle className="AiFillClockCircle" />
                    <NavLink className="navmylife" to="/home/mylife">Mylife</NavLink>
                </div>
                <div className="nav_workspace">
                    <div className="workspaceTitle">
                        <BsPersonWorkspace className="BsPersonWorkspace" />
                        <span className="workspace_title">Workspace</span>
                        <AiOutlinePlus className="AiOutlinePlus" onClick={() => ShowAddWorkspace()} />
                    </div>
                    <div className="workspace_list">
                        {
                            Workspaces && Workspaces.length > 0 && Workspaces.map((item, index) => {
                                if (item.Workspaces_type === "subject") {
                                    return (
                                        <div className="workspace_item" key={index}>
                                            {/* <img className="icon" src={iconSubject} /> */}
                                            <MdSubject className="icon" />
                                            <NavLink className="nav_workspace_item" to="/home/workspace" onClick={() => click_workspace_name(item)}>{item.Workspaces_name}</NavLink>
                                            <TiDeleteOutline className="TiDeleteOutline" onClick={() => deleteWorkspaceName(item)} />
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div className="workspace_item" key={index}>
                                            {/* <img className="icon" src={iconProject} /> */}
                                            <AiOutlineProject className="icon" />
                                            <NavLink className="nav_workspace_item" to="/home/workspace" onClick={() => click_workspace_name(item)}>{item.Workspaces_name}</NavLink>
                                            <TiDeleteOutline className="TiDeleteOutline" onClick={() => deleteWorkspaceName(item)} />
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navsidebar;