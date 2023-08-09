export const addTaskWorkspace = (task) => {
    return {
        type: 'ADD_TASK_WORKSPACE',
        payload: task
    }
}

export const editTaskWorkspace = (task) => {
    return {
        type: 'EDIT_TASK_WORKSPACE',
        payload: task
    }
}

export const deleteTaskWorkspace = (id) => {
    return {
        type: 'DELETE_TASK_WORKSPACE',
        payload: id
    }
}

export const addWorkspace = (workspace) => {
    return {
        type: 'ADD_WORKSPACE',
        payload: workspace
    }
}

export const deleteWorkspace = (id) => {
    return {
        type: 'DELETE_WORKSPACE',
        payload: id
    }
}

export const editWorkspace = (workspace) => {
    return {
        type: 'EDIT_WORKSPACE',
        payload: workspace
    }
}