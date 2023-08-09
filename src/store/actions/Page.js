export const setpage = (Page) => {
    return {
        type: 'SET_PAGE',
        payload: Page
    }
}

export const setpageWorkspace = (PageWorkspace) => {
    return {
        type: 'SET_PAGE_WORKSPACE',
        payload: PageWorkspace
    }
}