const initState = {
    Page: "calendar",
    PageWorkspace: ""
}
const Page = (state = initState, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            let Page = action.payload;
            return {
                ...state, Page
            }
        case 'SET_PAGE_WORKSPACE':
            let PageWorkspace = action.payload;
            return {
                ...state, PageWorkspace
            }
        default:
            return state;
    }
}

export default Page;