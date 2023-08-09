export const addTaskMylife = (task) => {
    return {
        type: 'ADD_TASK_MY_LIFE',
        payload: task
    }
}

export const editTaskMylife = (task) => {
    return {
        type: 'EDIT_TASK_MY_LIFE',
        payload: task
    }
}

export const deleteTaskMylife = (id) => {
    return {
        type: 'DELETE_TASK_MY_LIFE',
        payload: id
    }
}