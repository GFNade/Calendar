export const showTasksdetails = (item) => {
    return {
        type: 'SHOW_TASKS_DETAILS',
        payload: item
    }
}

export const closeTasksdetails = () => {
    return {
        type: 'CLOSE_TASKS_DETAILS'
    }
}