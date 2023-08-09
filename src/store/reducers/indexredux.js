import { combineReducers } from "redux";
import WorkspaceRedux from "./WorkspaceRedux";
import MyLifeRedux from "./MyLifeRedux";
import ShowForm_AddTasks from "./ShowForm_AddTasks";
import Page from "./Page";
import ShowTasksdetails from "./ShowTasksdetails";
import Login from "./Login";

const rootReducer = combineReducers({
    WorkspaceRedux,
    MyLifeRedux,
    ShowForm_AddTasks,
    Page,
    ShowTasksdetails,
    Login
})

export default rootReducer;