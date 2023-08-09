const initialState = {
    show: false,
}
const ShowForm_AddTasks = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_ADD_TASKS':
            return {
                show: true
            }
        case 'CLOSE_ADD_TASKS':
            return {
                show: false
            }
        default:
            return state
    }
}
export default ShowForm_AddTasks;