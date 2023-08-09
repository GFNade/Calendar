import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { toast } from 'react-toastify';
import moment from 'moment';
import { deleteTaskMylife, editTaskMylife } from '../../store/actions/MyLife_action';
import { deleteTaskWorkspace, editTaskWorkspace } from '../../store/actions/Workspace_action';
import { closeTasksdetails, showTasksdetails } from "../../store/actions/ShowTasksdetails";
import '../../styles/body/tasksdetails.scss'
import { AiFillStar, AiOutlineStar, AiFillPlusCircle, AiFillFileExclamation } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { ImCheckmark } from "react-icons/im";
import Anh1 from '../../assets/anh1.png';
import Anh2 from '../../assets/anh2.png';
import Anh3 from '../../assets/anh3.png';
import Anh4 from '../../assets/anh4.png';
import Anh5 from '../../assets/anh5.png';
import Anh6 from '../../assets/anh6.png';
import Anh7 from '../../assets/anh7.png';
const Tasksdetails = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.ShowTasksdetails.show);
    const data = useSelector(state => state.ShowTasksdetails.data);
    const [Status, setStatus] = useState(data.status);
    const [TaskName, setTaskName] = useState(data.task_name);
    const [Description, setDescription] = useState(data.description);
    const [Deadline, setDeadline] = useState(data.deadline);
    const [Favourite, setFavourite] = useState(data.favourite);
    const [file, setFile] = useState([]);
    const [show_detail, setShow_detail] = useState(false);
    const [detal, setDetal] = useState({ i: 0, position1: '', position2: '' });
    const arrmember_name = ['Nam', 'Nhan', 'Duc', 'Hoang', 'Huy', 'Hieu', 'Hoa'];
    const arrfile = ['baocao.doc', 'tailieuhust.pdf', 'baitaplon.js', 'baitap_uxui.rar', 'baitaptuan4.zip'];
    const anh = [Anh1, Anh2, Anh3, Anh4, Anh5, Anh6, Anh7];
    const clickUncomoplete = () => {
        setStatus('UnComplete');
        document.getElementById('detail_text1').style.color = '#FFFFFF';
        document.getElementById('detail_text1').style.backgroundColor = '#F96651';
        document.getElementById('detail_text2').style.color = '#ced4da';
        document.getElementById('detail_text2').style.backgroundColor = '#ffffff';
        document.getElementById('detail_text3').style.color = '#ced4da';
        document.getElementById('detail_text3').style.backgroundColor = '#ffffff';
        document.getElementById('taskdetail_footer_oke').style.display = 'inline-block';
    }
    const clickCompleted = () => {
        setStatus('Completed');
        document.getElementById('detail_text2').style.color = '#FFFFFF';
        document.getElementById('detail_text2').style.backgroundColor = '#4D72D1';
        document.getElementById('detail_text1').style.color = '#ced4da';
        document.getElementById('detail_text1').style.backgroundColor = '#ffffff';
        document.getElementById('detail_text3').style.color = '#ced4da';
        document.getElementById('detail_text3').style.backgroundColor = '#ffffff';
        document.getElementById('taskdetail_footer_oke').style.display = 'inline-block';
    }
    const clickStopped = () => {
        setStatus('Stopped');
        document.getElementById('detail_text3').style.color = '#FFFFFF';
        document.getElementById('detail_text3').style.backgroundColor = '#F2C94C';
        document.getElementById('detail_text1').style.color = '#ced4da';
        document.getElementById('detail_text1').style.backgroundColor = '#ffffff';
        document.getElementById('detail_text2').style.color = '#ced4da';
        document.getElementById('detail_text2').style.backgroundColor = '#ffffff';
        document.getElementById('taskdetail_footer_oke').style.display = 'inline-block';
    }
    const clickedit = (data) => {
        document.getElementById('taskdetail_footer_oke').style.display = 'inline-block';
        document.getElementById('taskdetail_footer_edit').style.display = 'none';
        document.getElementById('taskdetail_input_deadline').style.display = 'inline-block';
        document.getElementById('deadline_date').style.display = 'none';
        document.getElementById('taskdetail_input_task_name').disabled = false;
        document.getElementById('taskdetail_input_description').disabled = false;
        document.getElementById('taskdetail_input_task_name').style.border = '1px solid #ced4da';
        document.getElementById('taskdetail_input_description').style.border = '1px solid #ced4da';
        document.getElementById('taskdetail_footer_cancel').style.display = 'inline-block';
    }
    const clickdelete = (data) => {
        if (data.workspace === 'mylife') {
            dispatch(deleteTaskMylife(data.id))
        } else {
            dispatch(deleteTaskWorkspace(data.id))
        }
        dispatch(closeTasksdetails())
        toast.warning('Delete task successfully');
    }
    const editdeadline = (e) => {
        setDeadline(moment(e.target.value, 'YYYY/MM/DD').format('DD/MM/YYYY'));
    }
    const edittaskname = (e) => {
        setTaskName(e.target.value);
    }
    const editdescription = (e) => {
        setDescription(e.target.value);
    }
    const addfavourite = () => {
        if (!data.favourite) {
            document.getElementById('AiFillStar').style.display = 'inline';
        }
        else {
            document.getElementById('AiFillStar').style.display = 'none';
        }
        setFavourite(!data.favourite);
        document.getElementById('taskdetail_footer_oke').style.display = 'inline-block';
    }

    const clickoke = () => {
        document.getElementById('taskdetail_footer_oke').style.display = 'none';
        document.getElementById('taskdetail_footer_edit').style.display = 'inline-block';
        document.getElementById('taskdetail_input_deadline').style.display = 'none';
        document.getElementById('deadline_date').style.display = 'inline-block';
        document.getElementById('taskdetail_input_task_name').disabled = true;
        document.getElementById('taskdetail_input_description').disabled = true;
        document.getElementById('taskdetail_input_task_name').style.border = 'none';
        document.getElementById('taskdetail_input_description').style.border = 'none';
        document.getElementById('taskdetail_footer_cancel').style.display = 'none';
        let dataedit = {
            id: data.id,
            workspace: data.workspace,
            task_name: TaskName,
            description: Description,
            deadline: Deadline,
            status: Status,
            favourite: Favourite,
            position: data.position,
            performer: data.performer,
            evaluate: data.evaluate,
            support: data.support,
            filePerformer: data.filePerformer,
            fileSupport: data.fileSupport,
        }
        console.log('1: ', dataedit.deadline);
        console.log('2: ', Deadline);
        if (data.workspace === 'mylife') {
            dispatch(editTaskMylife(dataedit))
        }
        else {
            dispatch(editTaskWorkspace(dataedit))
        }
        toast.success('Edit task successfully');
    }
    const team = () => {
        let arraymember = [];
        let newmember = [];
        if (data.position === 'leader') {
            if (data.performer > 0) {
                newmember.push(<span className='performer'>Performer: </span>);
                for (let i = 0; i < data.performer; i++) {
                    newmember.push(<img src={anh[i]} style={{ width: '20px', height: '20px' }} className='avatar_performer' />);
                }
                for (let i = 0; i < data.performer; i++) {
                    newmember.push(<span className='avatar_name_performer' onClick={() => { setDetal({ i: i, position1: 'leader', position2: 'performer' }); setShow_detail(true) }}>{arrmember_name[i]},</span>);
                }
            }
            else {
                newmember.push(
                    <span className='Add_Performer'>Add Performer</span>
                );
            }
            arraymember.push(
                <div className='performer_data'>
                    {newmember}
                    <AiFillPlusCircle className='AiFillPlusCircle_performer' onClick={() => { document.getElementById('addperformer').style.display = 'inline'; document.getElementById('ImCheckmark_performer').style.display = 'inline' }} />
                    <br />
                    <input style={{ display: 'none' }} placeholder='Email' id='addperformer' type='text' />
                    <ImCheckmark style={{ display: 'none' }} id='ImCheckmark_performer' onClick={() => addmember('addperformer', 'ImCheckmark_performer')} />
                </div>
            );
            newmember = [];
            if (data.support > 0) {
                newmember.push(<span className='support'>Support: </span>);
                for (let i = 2; i < data.support + 2; i++) {
                    newmember.push(<img src={anh[i]} style={{ width: '20px', height: '20px' }} className='avatar_support' />);
                }
                for (let i = 2; i < data.support + 2; i++) {
                    newmember.push(<span className='avatar_name_support' onClick={() => { setDetal({ i: i, position1: 'leader', position2: 'support' }); setShow_detail(true) }}>{arrmember_name[i]},</span>);
                }
            }
            else {
                newmember.push(
                    <span className='Add_Support'>Add Support</span>
                );
            }
            arraymember.push(
                <div className='support_data'>
                    {newmember}
                    <AiFillPlusCircle className='AiFillPlusCircle_support' onClick={() => { document.getElementById('addsupport').style.display = 'inline'; document.getElementById('ImCheckmark_support').style.display = 'inline' }} />
                    <br />
                    <input style={{ display: 'none' }} placeholder='Email' id='addsupport' type='text' />
                    <ImCheckmark style={{ display: 'none' }} id='ImCheckmark_support' onClick={() => addmember('addsupport', 'ImCheckmark_support')} />
                </div>
            );
            newmember = [];
            if (data.evaluate > 0) {
                newmember.push(<span className='evaluate'>Evaluate: </span>);
                for (let i = 3; i < data.evaluate + 3; i++) {
                    newmember.push(<img src={anh[i]} style={{ width: '20px', height: '20px' }} className='avatar_evaluate' />);
                }
                for (let i = 1; i < data.evaluate + 1; i++) {
                    newmember.push(<span className='avatar_name_evaluate' onClick={() => { setDetal({ i: i, position1: 'leader', position2: 'evaluate' }); setShow_detail(true) }}>{arrmember_name[i]},</span>);
                }
            }
            else {
                newmember.push(
                    <span className='Add_Evaluate'>Add Evaluate</span>
                );
            }
            arraymember.push(
                <div className='evaluate_data'>
                    {newmember}
                    <AiFillPlusCircle className='AiFillPlusCircle_evaluate' onClick={() => { document.getElementById('addevaluate').style.display = 'inline'; document.getElementById('ImCheckmark_evaluate').style.display = 'inline' }} />
                    <br />
                    <input style={{ display: 'none' }} placeholder='Email' id='addevaluate' type='text' />
                    <ImCheckmark style={{ display: 'none' }} id='ImCheckmark_evaluate' onClick={() => addmember('addevaluate', 'ImCheckmark_evaluate')} />
                </div>
            );
            newmember = [];
            arraymember.push(
                <textarea className='comment' name='leader_comment' placeholder='comment'></textarea>
            );

            return arraymember;
        }
        //performer
        if (data.position === 'performer') {
            arraymember.push(
                <>
                    <div>
                        {
                            data && data.filePerformer && data.filePerformer.map((item, index) => {
                                return (
                                    <div className='file' key={index}>
                                        <AiFillFileExclamation className='AiFillFileExclamation' />
                                        <span className='text_item'>{item}</span>
                                        <TiDeleteOutline className='TiDeleteOutline' onClick={() => deleteFile(item, 'performer')} />
                                    </div>
                                )
                            })
                        }
                        <input className='inputfile' type='file' name='performer_file' onChange={(e) => chooseFile(e, 'performer')} multiple />
                        <ImCheckmark className='ImCheckmark_file' onClick={() => uploadFile()} />
                    </div>
                    <div className='leader_data'>
                        <span className='leader'>Leader: </span>
                        <img src={Anh7} style={{ width: '20px', height: '20px' }} className='avatar_leader' />
                        <span className='avatar_name_leader' onClick={() => { setDetal({ i: 6, position1: 'performer', position2: 'leader' }); setShow_detail(true) }}>Đặng Hữu Hiếu </span>
                    </div>
                </>
            );
            if (data.performer > 0) {
                newmember.push(<span className='performer'>Performer: </span>);
                for (let i = 1; i < data.performer + 1; i++) {
                    newmember.push(<img src={anh[i]} style={{ width: '20px', height: '20px' }} className='avatar_performer' />);
                }
                for (let i = 0; i < data.performer; i++) {
                    newmember.push(<span className='avatar_name_performer' onClick={() => { setDetal({ i: i, position1: 'performer', position2: 'performer' }); setShow_detail(true) }}>{arrmember_name[i]},</span>);
                }
            }
            arraymember.push(
                <div className='performer_data'>
                    {newmember}
                </div>
            );
            newmember = [];
            if (data.support > 0) {
                newmember.push(<span className='support'>Support: </span>);
                for (let i = 3; i < data.support + 3; i++) {
                    newmember.push(<img src={anh[i]} style={{ width: '20px', height: '20px' }} className='avatar_support' />);
                }
                for (let i = 2; i < data.support + 2; i++) {
                    newmember.push(<span className='avatar_name_support' onClick={() => { setDetal({ i: i, position1: 'performer', position2: 'support' }); setShow_detail(true) }}>{arrmember_name[i]},</span>);
                }
            }
            else {
                newmember.push(
                    <span className='Add_Support'>Add Support</span>
                );
            }
            arraymember.push(
                <div className='support_data'>
                    {newmember}
                    <AiFillPlusCircle className='AiFillPlusCircle_support' onClick={() => { document.getElementById('addsupport').style.display = 'inline'; document.getElementById('ImCheckmark_support').style.display = 'inline' }} />
                    <br />
                    <input style={{ display: 'none' }} placeholder='Email' id='addsupport' type='text' />
                    <ImCheckmark style={{ display: 'none' }} id='ImCheckmark_support' onClick={() => addmember('addsupport', 'ImCheckmark_support')} />
                </div>
            );
            newmember = [];
            if (data.evaluate > 0) {
                newmember.push(<span className='evaluate'>Evaluate: </span>);
                for (let i = 0; i < data.evaluate; i++) {
                    newmember.push(<img src={anh[i]} style={{ width: '20px', height: '20px' }} className='avatar_evaluate' />);
                }
                for (let i = 1; i < data.evaluate + 1; i++) {
                    newmember.push(<span className='avatar_name_evaluate' onClick={() => { setDetal({ i: i, position1: 'performer', position2: 'evaluate' }); setShow_detail(true) }}>{arrmember_name[i]},</span>);
                }
            }
            arraymember.push(
                <div className='evaluate_data'>
                    {newmember}
                </div>
            );
            arraymember.push(
                <textarea className='comment' name='performer_comment' placeholder='comment'></textarea>
            );
            return arraymember;
        }
        //support
        if (data.position === 'support') {
            arraymember.push(
                <>
                    <div>
                        {
                            data && data.fileSupport && data.fileSupport.map((item, index) => {
                                return (
                                    <div className='file' key={index}>
                                        <AiFillFileExclamation className='AiFillFileExclamation' />
                                        <span className='text_item'>{item}</span>
                                        <TiDeleteOutline className='TiDeleteOutline' onClick={() => deleteFile(item, 'support')} />
                                    </div>
                                )
                            })
                        }
                        <input className='inputfile' type='file' name='performer_file' onChange={(e) => chooseFile(e, 'support')} multiple />
                        <ImCheckmark className='ImCheckmark_file' onClick={() => uploadFile()} />
                    </div>
                    <div className='leader_data'>
                        <span className='leader'>Leader: </span>
                        <img src={Anh7} style={{ width: '20px', height: '20px' }} className='avatar_leader' />
                        <span className='avatar_name_leader' onClick={() => { setDetal({ i: 6, position1: 'support', position2: 'leader' }); setShow_detail(true) }}>Đặng Hữu Hiếu </span>
                    </div>
                </>
            );
            if (data.performer > 0) {
                newmember.push(<span className='performer'>Performer: </span>);
                for (let i = 3; i < data.performer + 3; i++) {
                    newmember.push(<img src={anh[i]} style={{ width: '20px', height: '20px' }} className='avatar_performer' />);
                }
                for (let i = 0; i < data.performer - 1; i++) {
                    newmember.push(<span className='avatar_name_performer' onClick={() => { setDetal({ i: i, position1: 'support', position2: 'performer' }); setShow_detail(true) }}>{arrmember_name[i]},</span>);
                }
            }
            arraymember.push(
                <div className='performer_data'>
                    {newmember}
                </div>
            );
            newmember = [];
            if (data.support > 0) {
                newmember.push(<span className='support'>Support: </span>);
                for (let i = 1; i < data.support + 1; i++) {
                    newmember.push(<img src={anh[i]} style={{ width: '20px', height: '20px' }} className='avatar_support' />);
                }
                for (let i = 3; i < data.support + 3; i++) {
                    newmember.push(<span className='avatar_name_support' onClick={() => { setDetal({ i: i, position1: 'support', position2: 'support' }); setShow_detail(true) }}>{arrmember_name[i]},</span>);
                }
            }
            else {
                newmember.push(
                    <span className='Add_Support'>Add Support</span>
                );
            }
            arraymember.push(
                <div className='support_data'>
                    {newmember}
                </div>
            );
            newmember = [];
            if (data.evaluate > 0) {
                newmember.push(<span className='evaluate'>Evaluate: </span>);
                for (let i = 2; i < data.evaluate + 2; i++) {
                    newmember.push(<img src={anh[i]} style={{ width: '20px', height: '20px' }} className='avatar_evaluate' />);
                }
                for (let i = 0; i < data.evaluate; i++) {
                    newmember.push(<span className='avatar_name_evaluate' onClick={() => { setDetal({ i: i, position1: 'support', position2: 'evaluate' }); setShow_detail(true) }}>{arrmember_name[i]},</span>);
                }
            }
            arraymember.push(
                <div className='evaluate_data'>
                    {newmember}
                </div>
            );
            newmember = [];
            arraymember.push(
                <textarea className='comment' name='support_comment' placeholder='comment'></textarea>
            );
            return arraymember;
        }
        // evaluate
        if (data.position === 'evaluate') {
            arraymember.push(
                <div className='leader_data'>
                    <span className='leader'>Leader: </span>
                    <img src={Anh7} style={{ width: '20px', height: '20px' }} className='avatar_leader' />
                    <span className='avatar_name_leader' onClick={() => { setDetal({ i: 6, position1: 'evaluate', position2: 'leader' }); setShow_detail(true) }}>Đặng Hữu Hiếu </span>
                </div>
            );
            if (data.performer > 0) {
                newmember.push(<span className='performer'>Performer: </span>);
                for (let i = 1; i < data.performer + 1; i++) {
                    newmember.push(<img src={anh[i]} style={{ width: '20px', height: '20px' }} className='avatar_performer' />);
                }
                for (let i = 3; i < data.performer + 3; i++) {
                    newmember.push(<span className='avatar_name_performer' onClick={() => { setDetal({ i: i, position1: 'evaluate', position2: 'performer' }); setShow_detail(true) }}>{arrmember_name[i]},</span>);
                }
            }
            arraymember.push(
                <div className='performer_data'>
                    {newmember}
                </div>
            );
            newmember = [];
            if (data.support > 0) {
                newmember.push(<span className='support'>Support: </span>);
                for (let i = 2; i < data.support + 2; i++) {
                    newmember.push(<img src={anh[i]} style={{ width: '20px', height: '20px' }} className='avatar_support' />);
                }
                for (let i = 1; i < data.support + 1; i++) {
                    newmember.push(<span className='avatar_name_support' onClick={() => { setDetal({ i: i, position1: 'evaluate', position2: 'support' }); setShow_detail(true) }}>{arrmember_name[i]},</span>);
                }
            }
            else {
                newmember.push(
                    <span className='Add_Support'>Add Support</span>
                );
            }
            arraymember.push(
                <div className='support_data'>
                    {newmember}
                </div>
            );
            newmember = [];
            if (data.evaluate > 0) {
                newmember.push(<span className='evaluate'>Evaluate: </span>);
                for (let i = 1; i < data.evaluate + 1; i++) {
                    newmember.push(<img src={anh[i]} style={{ width: '20px', height: '20px' }} className='avatar_evaluate' />);
                }
                for (let i = 0; i < data.evaluate; i++) {
                    newmember.push(<span className='avatar_name_evaluate' onClick={() => { setDetal({ i: i, position1: 'evaluate', position2: 'evaluate' }); setShow_detail(true) }}>{arrmember_name[i]},</span>);
                }
            }
            arraymember.push(
                <div className='evaluate_data'>
                    {newmember}
                </div>
            );
            arraymember.push(
                <textarea className='comment' name='evaluate_comment' placeholder='comment'></textarea>
            );
            newmember = [];
            return arraymember;
        }
    }

    const chooseFile = (e, text) => {
        setFile(e.target.files);
        let filename = [];
        for (let i = 0; i < e.target.files.length; i++) {
            filename.push(e.target.files[i].name);
        }
        let dataedit = {};
        if (text === 'performer') {
            filename = [...data.filePerformer, ...filename];
            dataedit = { ...data, filePerformer: filename };
        }
        if (text === 'support') {
            filename = [...data.fileSupport, ...filename];
            dataedit = { ...data, fileSupport: filename };
        }
        if (data.workspace === 'mylife') {
            dispatch(editTaskMylife(dataedit))
        }
        else {
            dispatch(editTaskWorkspace(dataedit))
        }
    }

    const uploadFile = () => {
        const formData = new FormData();
        for (let i = 0; i < file.length; i++) {
            formData.append(`file${i + 1}`, file[i]);
        }
        fetch(
            'http://httpbin.org/post',
            {
                method: 'POST',
                body: formData
            }
        ).then((response) => response.json()).then(
            (result) => {
                toast.success('upload file successfully');
            }
        )
            .catch((error) => {
                toast.error('upload file failed');
            }
            )

    }
    const deleteFile = (item, text) => {
        let filename = [];
        let dataedit = {};
        if (text === 'performer') {
            filename = data.filePerformer.filter((value) => value !== item);
            dataedit = { ...data, filePerformer: filename };
        }
        if (text === 'support') {
            filename = data.fileSupport.filter((value) => value !== item);
            dataedit = { ...data, fileSupport: filename };
        }
        if (data.workspace === 'mylife') {
            dispatch(editTaskMylife(dataedit))
        }
        else {
            dispatch(editTaskWorkspace(dataedit))
        }
    }

    const addmember = (text1, text2) => {
        document.getElementById(text1).style.display = 'none';
        document.getElementById(text2).style.display = 'none';
        toast.success('add member successfully');
    }

    const clickcancel = () => {
        document.getElementById('taskdetail_footer_oke').style.display = 'none';
        document.getElementById('taskdetail_footer_edit').style.display = 'inline-block';
        document.getElementById('taskdetail_input_deadline').style.display = 'none';
        document.getElementById('deadline_date').style.display = 'inline-block';
        document.getElementById('taskdetail_input_task_name').disabled = true;
        document.getElementById('taskdetail_input_description').disabled = true;
        document.getElementById('taskdetail_input_task_name').style.border = 'none';
        document.getElementById('taskdetail_input_description').style.border = 'none';
        document.getElementById('taskdetail_footer_cancel').style.display = 'none';
        setDeadline(data.deadline);
        setDescription(data.description);
        setTaskName(data.task_name);
        setStatus(data.status);
    }
    useEffect(() => {
        setDeadline(data.deadline);
        setTaskName(data.task_name);
        setDescription(data.description);
        setStatus(data.status);
        setFavourite(data.favourite);
    }, [data]);
    // useEffect(() => {

    // }, [file]);
    const newarrfile = () => {
        let newarr = [];
        for (let i = 0; i < (Math.floor(Math.random() * 10) % 5); i++) {
            newarr.push(
                <div className='file_modal_detail'>
                    <AiFillFileExclamation className='modal_detail_AiFillFileExclamation' />
                    <span className='modal_detail_file_name'>{arrfile[i]}</span>
                </div>
            );
        }
        return newarr;
    }
    const leader = () => {
        let newarr = [];
        if (detal.position2 === 'performer' || detal.position2 === 'support') {
            newarr.push(
                <div>
                    {newarrfile()}
                    <textarea className='comment' name='evaluate_comment'>dang hoan thien</textarea>
                </div>
            )
        }
        if (detal.position2 === 'evaluate') {
            for (let i = 0; i <= (Math.floor(Math.random() * 10) % 5) + 1; i++) {
                let j = Math.floor(Math.random() * 10) % 5 + 1;
                let arrstar = [];
                for (let k = 0; k < j; k++) arrstar.push(<AiFillStar className='modal_detail_AiFillStar' />);
                for (let k = 0; k < 5 - j; k++) arrstar.push(<AiOutlineStar className='modal_detail_AiOutlineStar' />);
                newarr.push(
                    <div>
                        <img src={anh[i]} style={{ width: '20px', height: '20px' }} className='avatar' />
                        <span className='avatar_name'>{arrmember_name[i]}</span>
                        {arrstar}
                    </div>
                )
            }
            newarr.push(
                <textarea className='comment' name='evaluate_comment'>dang hoan thien</textarea>
            )
        }
        return newarr;
    }
    const performer = () => {
        let newarr = [];
        if (detal.position2 === 'leader') {
            newarr.push(
                <div>
                    <textarea className='comment' name='evaluate_comment'>dang hoan thien</textarea>
                </div>
            )
        }
        if (detal.position2 === 'evaluate') {
            let j = Math.floor(Math.random() * 10) % 5 + 1;
            let arrstar = [];
            for (let k = 0; k < j; k++) arrstar.push(<AiFillStar className='modal_detail_AiFillStar' />);
            for (let k = 0; k < 5 - j; k++) arrstar.push(<AiOutlineStar className='modal_detail_AiOutlineStar' />);
            newarr.push(
                <div>
                    {arrstar}
                    <textarea className='comment' name='evaluate_comment'>dang hoan thien</textarea>
                </div>
            )
        }
        if (detal.position2 === 'support' || detal.position2 === 'performer') {
            newarr.push(
                <div>
                    {newarrfile()}
                    <textarea className='comment' name='evaluate_comment'>dang hoan thien</textarea>
                </div>
            )
        }
        return newarr;
    }
    const support = () => {
        let newarr = [];
        if (detal.position2 === 'leader') {
            newarr.push(
                <div>
                    <textarea className='comment' name='evaluate_comment'>dang hoan thien</textarea>
                </div>
            )
        }
        if (detal.position2 === 'evaluate') {
            newarr.push(
                <div>
                    <textarea className='comment' name='evaluate_comment'>dang hoan thien</textarea>
                </div>
            )
        }
        if (detal.position2 === 'support' || detal.position2 === 'performer') {
            newarr.push(
                <div>
                    {newarrfile()}
                    <textarea className='comment' name='evaluate_comment'>dang hoan thien</textarea>
                </div>
            )
        }
        return newarr;
    }
    const evaluate = () => {
        let newarr = [];
        if (detal.position2 === 'leader') {
            newarr.push(
                <div>
                    <textarea className='comment' name='evaluate_comment'>dang hoan thien</textarea>
                </div>
            )
        }
        if (detal.position2 === 'performer') {
            let arrstar = [];
            for (let k = 0; k < 5; k++) arrstar.push(<AiOutlineStar className='modal_detail_AiOutlineStar' />);
            newarr.push(
                <div>
                    {newarrfile()}
                    {arrstar}
                    <textarea className='comment' name='evaluate_comment' placeholder='comment'></textarea>
                </div>
            )
        }
        if (detal.position2 === 'support') {
            newarr.push(
                <div>
                    {newarrfile()}
                    <textarea className='comment' name='evaluate_comment' placeholder='comment'></textarea>
                </div>
            )
        }
        if (detal.position2 === 'evaluate') {
            newarr.push(
                <div>
                    <textarea className='comment' name='evaluate_comment'>dang hoan thien</textarea>
                </div>
            )
        }
        return newarr;
    }
    return (
        <>
            <Modal id='modal_detail' show={show_detail} onHide={() => setShow_detail(false)}>
                <Modal.Header id="modal_detail_header" closeButton>
                    <Modal.Title>
                        <img src={anh[detal.i]} style={{ width: '45px', height: '45px' }} className='avatar' />
                        {
                            detal.position2 === 'leader' ? <span className='avatar_name'>Đặng Hữu Hiếu</span> :
                                <span className='avatar_name'>{arrmember_name[detal.i]}</span>
                        }
                    </Modal.Title>
                    <div className='modal_detail_position'>{detal.position2}</div>
                    <div>{
                        Math.floor(Math.random() * 10) % 3 === 0 ? <span className='modal_detail_status' style={{ backgroundColor: '#09ff00' }}>Completed</span> :
                            Math.floor(Math.random() * 10) % 3 === 1 ? <span className='modal_detail_status' style={{ backgroundColor: 'rgb(233, 53, 53)' }}>UnComplate</span> :
                                <span className='modal_detail_status' style={{ backgroundColor: 'rgb(202, 199, 39)' }}>Stopped</span>
                    }</div>
                </Modal.Header>

                <Modal.Body id="modal_detail_body">
                    {
                        detal.position1 === 'leader' ?
                            <div>
                                {
                                    leader()
                                }
                            </div>
                            : detal.position1 === 'evaluate' ?
                                <div>
                                    {
                                        evaluate()
                                    }
                                </div>
                                : detal.position1 === 'performer' ?
                                    <div>
                                        {
                                            performer()
                                        }
                                    </div>
                                    :
                                    <div>
                                        {
                                            support()
                                        }
                                    </div>
                    }
                </Modal.Body>

                <Modal.Footer id='modal_detail_footer'>
                    <Button className='modal_detail_close' variant="secondary" onClick={() => setShow_detail(false)}> OK </Button>
                </Modal.Footer>
            </Modal>

            <Modal id='taskdetail' show={show} onHide={() => dispatch(closeTasksdetails())}>
                <Modal.Header id='taskdetail_header' closeButton>
                    <span id='taskdetail_title'>{data.workspace}</span>
                    <div className='position'>{data.position}</div>
                    {
                        data.favourite ?
                            <>
                                <AiOutlineStar id='AiOutlineStar' onClick={() => addfavourite()} />
                                <AiFillStar id='AiFillStar' onClick={() => addfavourite()} />
                            </>
                            : <>
                                <AiOutlineStar id='AiOutlineStar' onClick={() => addfavourite()} />
                                <AiFillStar style={{ display: 'none' }} id='AiFillStar' onClick={() => addfavourite()} />
                            </>
                    }
                    <div className='taskdetail_status' >
                        {
                            data.status === 'UnComplete' ?
                                <>
                                    <div className='detail_text' id='detail_text1' style={{ color: "#FFFFFF", backgroundColor: '#F96651' }} onClick={() => clickUncomoplete()}>UnComplete</div>
                                    <div className='detail_text' id='detail_text2' onClick={() => clickCompleted()}>Completed</div>
                                    <div className='detail_text' id='detail_text3' onClick={() => clickStopped()}>Stopped</div>
                                </>
                                : data.status === 'Completed' ?
                                    <>
                                        <div className='detail_text' id='detail_text1' onClick={() => clickUncomoplete()}>UnComplete</div>
                                        <div className='detail_text' id='detail_text2' style={{ color: "#FFFFFF", backgroundColor: '#4D72D1' }} onClick={() => clickCompleted()}>Completed</div>
                                        <div className='detail_text' id='detail_text3' onClick={() => clickStopped()}>Stopped</div>
                                    </> :
                                    <>
                                        <div className='detail_text' id='detail_text1' onClick={() => clickUncomoplete()}>UnComplete</div>
                                        <div className='detail_text' id='detail_text2' onClick={() => clickCompleted()}>Completed</div>
                                        <div className='detail_text' id='detail_text3' style={{ color: "#FFFFFF", backgroundColor: '#F2C94C' }} onClick={() => clickStopped()}>Stopped</div>
                                    </>
                        }
                    </div>
                </Modal.Header>
                <Modal.Body id='taskdetail_body'>
                    <div className='taskdetail_data'>
                        <textarea disabled rows='2' name='taskdetai_task_name' id='taskdetail_input_task_name' onChange={(e) => edittaskname(e)}>{data.task_name}</textarea >
                        <textarea disabled rows='4' name='taskdetail_description' id='taskdetail_input_description' onChange={(e) => editdescription(e)}>{`Description: ${data.description}`}</textarea>
                        <div className='team'>
                            {
                                team()
                            }
                        </div>
                        <span id='deadline_text'>Deadline:</span><span id='deadline_date'>{data.deadline}</span>
                        <input type='date' id='taskdetail_input_deadline' value={moment(Deadline, 'DD/MM/YYYY').format('YYYY-MM-DD')} onChange={(e) => editdeadline(e)} />
                    </div>
                </Modal.Body >
                <Modal.Footer id='taskdetail_footer'>
                    <Button id="taskdetail_footer_oke" onClick={() => clickoke()}>
                        OKE
                    </Button>
                    <Button id="taskdetail_footer_cancel" onClick={() => clickcancel()}>
                        CANCEL
                    </Button>
                    <Button id="taskdetail_footer_edit" onClick={() => clickedit(data)}>
                        EDIT
                    </Button>
                    <Button id="taskdetail_footer_delete" onClick={() => clickdelete(data)}>
                        DELETE
                    </Button>
                </Modal.Footer>
            </Modal >

        </>
    )
}

export default Tasksdetails