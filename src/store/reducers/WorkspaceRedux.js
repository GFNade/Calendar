const initState = {
    WorkspaceRedux: [
        { id: 1, workspace: "OOP", task_name: "week 1 assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "04/06/2023", status: "Stopped", favourite: false, position: "performer", performer: 2, evaluate: 1, support: 3, filePerformer: ['baitaptuan2.doc', 'baocao.pdf'], fileSupport: [] },
        { id: 2, workspace: "OOP", task_name: "Design Class Diagram", description: "Create a detailed class diagram for the given problem statement in the Object-Oriented Programming course.", deadline: "04/06/2023", status: "Stopped", favourite: true, position: "performer", performer: 3, evaluate: 1, support: 0, filePerformer: [], fileSupport: [] },
        { id: 3, workspace: "UIUX", task_name: "Implement Inheritance", description: "Write code to demonstrate inheritance concepts in the Object-Oriented Programming course.", deadline: "07/06/2023", status: "Completed", favourite: false, position: "performer", performer: 4, evaluate: 1, support: 2, filePerformer: [], fileSupport: [] },
        { id: 4, workspace: "AI", task_name: "Implement Polymorphism", description: "Develop code examples to showcase polymorphism in the Object-Oriented Programming course.", deadline: "10/06/2023", status: "Completed", favourite: false, position: "leader", performer: 2, evaluate: 1, support: 3, filePerformer: ['baitaptuan2.doc', 'baocao.pdf'], fileSupport: [] },
        { id: 5, workspace: "UIUX", task_name: "Write Encapsulation Code", description: "Create a program that demonstrates encapsulation principles in the Object-Oriented Programming course.", deadline: "11/06/2023", status: "Stopped", favourite: false, position: "performer", performer: 1, evaluate: 0, support: 2, filePerformer: [], fileSupport: [] },
        { id: 6, workspace: "OOP", task_name: "Implement Abstraction", description: "Build code snippets to illustrate abstraction concepts in the Object-Oriented Programming course.", deadline: "11/06/2023", status: "Completed", favourite: false, position: "support", performer: 2, evaluate: 1, support: 3, filePerformer: [], fileSupport: ['baitaptuan1.doc', 'tailieu.pdf'] },
        { id: 7, workspace: "GR1", task_name: "Create Interface Implementation", description: "Write code to implement interfaces and showcase their usage in the Object-Oriented Programming course.", deadline: "20/06/2023", status: "Completed", favourite: false, position: "support", performer: 3, evaluate: 2, support: 4, filePerformer: [], fileSupport: [] },
        { id: 8, workspace: "AI", task_name: "Implement Abstract Classes", description: "Develop code examples to demonstrate abstract classes in the Object-Oriented Programming course.", deadline: "25/06/2023", status: "Completed", favourite: true, position: "performer", performer: 3, evaluate: 1, support: 1, filePerformer: ['baitaptuan2.doc', 'baocao.pdf'], fileSupport: [] },
        { id: 9, workspace: "AI", task_name: "Implement Composition Relationship", description: "Create a program that showcases the composition relationship between objects in the Object-Oriented Programming course.", deadline: "28/06/2023", status: "Completed", favourite: false, position: "performer", performer: 2, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 10, workspace: "ITSS", task_name: "Implement Aggregation Relationship", description: "Write code to demonstrate the aggregation relationship between objects in the Object-Oriented Programming course.", deadline: "30/06/2023", status: "leader", favourite: false, position: "leader", performer: 2, evaluate: 0, support: 2, filePerformer: [], fileSupport: [] },
        { id: 11, workspace: "ITSS", task_name: "Implement Design Patterns", description: "Develop code examples to illustrate various design patterns in the Object-Oriented Programming course.", deadline: "30/06/2023", status: "Stopped", favourite: true, position: "performer", performer: 2, evaluate: 1, support: 3, filePerformer: ['baitaptuan2.doc', 'baocao.pdf'], fileSupport: [] },
        { id: 12, workspace: "OOP", task_name: "Create UML Sequence Diagram", description: "Draw a UML sequence diagram based on a given scenario in the Object-Oriented Programming course.", deadline: "01/07/2023", status: "Completed", favourite: false, position: "evaluate", performer: 3, evaluate: 1, support: 3, filePerformer: [], fileSupport: [] },
        { id: 13, workspace: "OOP", task_name: "Implement File Handling", description: "Write code to read from and write to files in the Object-Oriented Programming course.", deadline: "01/07/2023", status: "Stopped", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 14, workspace: "AI", task_name: "Handle Exceptions", description: "Develop code examples to demonstrate exception handling in the Object-Oriented Programming course.", deadline: "04/08/2023", status: "Completed", favourite: false, position: "performer", performer: 3, evaluate: 1, support: 1, filePerformer: [], fileSupport: [] },
        { id: 15, workspace: "UIUX", task_name: "Create GUI Application", description: "Build a graphical user interface application using a suitable programming language in the Object-Oriented Programming course.", deadline: "04/08/2023", status: "Stopped", favourite: false, position: "performer", performer: 1, evaluate: 0, support: 0, filePerformer: ['baitaptuan2.doc', 'baocao.pdf'], fileSupport: [] },
        { id: 16, workspace: "OOP", task_name: "Implement Multithreading", description: "Write code to showcase multithreading concepts in the Object-Oriented Programming course.", deadline: "09/07/2023", status: "Stopped", favourite: true, position: "support", performer: 2, evaluate: 0, support: 3, filePerformer: [], fileSupport: ['baitaptuan1.doc', 'tailieu.pdf'] },
        { id: 17, workspace: "ITSS", task_name: "Implement Synchronization", description: "Develop code examples to demonstrate synchronization techniques in the Object-Oriented Programming course.", deadline: "11/07/2023", status: "UnComplete", favourite: false, position: "leader", performer: 3, evaluate: 1, support: 3, filePerformer: [], fileSupport: [] },
        { id: 18, workspace: "GR1", task_name: "Perform Unit Testing", description: "Write test cases and perform unit testing for a specific module in the Object-Oriented Programming course.", deadline: "11/07/2023", status: "Completed", favourite: false, position: "support", performer: 2, evaluate: 1, support: 3, filePerformer: [], fileSupport: ['baitaptuan1.doc', 'tailieu.pdf'] },
        { id: 19, workspace: "AI", task_name: "Create Network Application", description: "Build a network application using sockets and network protocols in the Object-Oriented Programming course.", deadline: "11/07/2023", status: "Stopped", favourite: false, position: "evaluate", performer: 1, evaluate: 1, support: 2, filePerformer: [], fileSupport: [] },
        { id: 20, workspace: "OOP", task_name: "Implement Database Connectivity", description: "Write code to connect and interact with a database in the Object-Oriented Programming course.", deadline: "12/07/2023", status: "Completed", favourite: true, position: "performer", performer: 2, evaluate: 0, support: 0, filePerformer: ['baitaptuan2.doc', 'baocao.pdf'], fileSupport: [] },
        { id: 21, workspace: "UIUX", task_name: "Perform Code Refactoring", description: "Refactor existing code to improve its quality, readability, and maintainability in the Object-Oriented Programming course.", deadline: "13/07/2023", status: "UnComplete", favourite: false, position: "performer", performer: 2, evaluate: 1, support: 0, filePerformer: ['baitaptuan2.doc', 'baocao.pdf'], fileSupport: [] },
        { id: 22, workspace: "ITSS", task_name: "Implement GUI Testing", description: "Write test cases and perform GUI testing for a graphical user interface application in the Object-Oriented Programming course.", deadline: "13/07/2023", status: "UnComplete", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 23, workspace: "OOP", task_name: "Create Web Application", description: "Build a web application using a suitable web framework in the Object-Oriented Programming course.", deadline: "18/07/2023", status: "UnComplete", favourite: false, position: "leader", performer: 2, evaluate: 2, support: 3, filePerformer: [], fileSupport: [] },
        { id: 24, workspace: "OOP", task_name: "Implement RESTful API", description: "Develop code to create a RESTful API for a specific functionality in the Object-Oriented Programming course.", deadline: "22/07/2023", status: "Completed", favourite: false, position: "support", performer: 3, evaluate: 0, support: 3, filePerformer: [], fileSupport: ['baitaptuan1.doc', 'tailieu.pdf'] },
        { id: 25, workspace: "AI", task_name: "Perform System Testing", description: "Write test cases and perform system testing for the entire application in the Object-Oriented Programming course.", deadline: "22/07/2023", status: "Completed", favourite: true, position: "performer", performer: 2, evaluate: 1, support: 3, filePerformer: ['baitaptuan2.doc', 'baocao.pdf'], fileSupport: [] },
        { id: 26, workspace: "GR1", task_name: "Design Database Schema", description: "Create a database schema that represents the data model for a given application in the Object-Oriented Programming course.", deadline: "26/07/2023", status: "UnComplete", favourite: false, position: "evaluate", performer: 2, evaluate: 1, support: 3, filePerformer: [], fileSupport: [] },
        { id: 27, workspace: "UIUX", task_name: "Implement Security Measures", description: "Write code to implement security features such as encryption, authentication, and authorization in the Object-Oriented Programming course.", deadline: "29/07/2023", status: "Stopped", favourite: false, position: "performer", performer: 4, evaluate: 0, support: 0, filePerformer: ['baitaptuan2.doc', 'baocao.pdf'], fileSupport: [] },
        { id: 28, workspace: "OOP", task_name: "Perform Performance Testing", description: "Write test cases and perform performance testing to analyze the scalability and efficiency of the application in the Object-Oriented Programming course.", deadline: "29/07/2023", status: "Stopped", favourite: false, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 29, workspace: "UIUX", task_name: "Create Documentation", description: "Prepare comprehensive documentation that includes user manuals, technical guides, and API documentation for the application in the Object-Oriented Programming course.", deadline: "30/07/2023", status: "Completed", favourite: false, position: "performer", performer: 2, evaluate: 1, support: 3, filePerformer: ['baitaptuan2.doc', 'baocao.pdf'], fileSupport: [] },
        { id: 30, workspace: "AI", task_name: "Implement Version Control", description: "Use a version control system (e.g., Git) to manage the source code and collaborate with team members in the Object-Oriented Programming course.", deadline: "02/08/2023", status: "UnComplete", favourite: false, position: "support", performer: 2, evaluate: 0, support: 3, filePerformer: [], fileSupport: ['baitaptuan1.doc', 'tailieu.pdf'] },
        { id: 31, workspace: "OOP", task_name: "Perform Code Reviews", description: "Review and provide feedback on the code written by team members in the Object-Oriented Programming course.", deadline: "02/08/2023", status: "UnComplete", favourite: true, position: "support", performer: 2, evaluate: 1, support: 3, filePerformer: [], fileSupport: [] },
        { id: 32, workspace: "AI", task_name: "Prepare Technical Presentations", description: "Create and deliver technical presentations on various topics related to Object-Oriented Programming to the class.", deadline: "07/08/2023", status: "UnComplete", favourite: false, position: "performer", performer: 2, evaluate: 1, support: 3, filePerformer: [], fileSupport: [] },
        { id: 33, workspace: "GR1", task_name: "Conduct Peer Evaluation", description: "Evaluate the performance and contribution of team members based on predetermined criteria in the Object-Oriented Programming course.", deadline: "10/08/2023", status: "Completed", favourite: false, position: "performer", performer: 2, evaluate: 1, support: 3, filePerformer: [], fileSupport: [] },
        { id: 34, workspace: "OOP", task_name: "week 2 assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "10/05/2023", status: "UnComplete", favourite: false, position: "leader", performer: 3, evaluate: 1, support: 1, filePerformer: [], fileSupport: [] },
        { id: 35, workspace: "UIUX", task_name: "Optimize Algorithm Performance", description: "Analyze and optimize the performance of algorithms used in the Object-Oriented Programming course.", deadline: "13/08/2023", status: "Stopped", favourite: false, position: "evaluate", performer: 2, evaluate: 2, support: 3, filePerformer: [], fileSupport: [] },
        { id: 36, workspace: "OOP", task_name: "Design User Interface", description: "Create a visually appealing and user-friendly interface for the application in the Object-Oriented Programming course.", deadline: "15/08/2023", status: "UnComplete", favourite: true, position: "performer", performer: 3, evaluate: 1, support: 3, filePerformer: [], fileSupport: [] },
        { id: 37, workspace: "AI", task_name: "Implement Data Structures", description: "Write code to implement various data structures such as linked lists, stacks, queues, and trees in the Object-Oriented Programming course.", deadline: "15/08/2023", status: "Completed", favourite: false, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 38, workspace: "GR1", task_name: "Develop Mobile Application", description: "Build a mobile application using a suitable mobile development framework in the Object-Oriented Programming course.", deadline: "22/08/2023", status: "UnComplete", favourite: false, position: "leader", performer: 2, evaluate: 2, support: 2, filePerformer: [], fileSupport: [] },
        { id: 39, workspace: "ITSS", task_name: "Perform Code Profiling", description: "Profile the application code to identify performance bottlenecks and optimize the code in the Object-Oriented Programming course.", deadline: "28/08/2023", status: "UnComplete", favourite: false, position: "performer", performer: 2, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 40, workspace: "ITSS", task_name: "Implement Event Handling", description: "Write code to handle user interactions and events in the Object-Oriented Programming course.", deadline: "29/08/2023", status: "UnComplete", favourite: true, position: "support", performer: 2, evaluate: 1, support: 3, filePerformer: [], fileSupport: [] }
    ],
    Workspaces: [
        { Workspaces_name: "OOP", Workspaces_type: "subject" },
        { Workspaces_name: "UIUX", Workspaces_type: "subject" },
        { Workspaces_name: "AI", Workspaces_type: "project" },
        { Workspaces_name: "ITSS", Workspaces_type: "project" },
        { Workspaces_name: "GR1", Workspaces_type: "project" },
    ]
}

const WorkspaceRedux = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TASK_WORKSPACE':
            return {
                ...state, WorkspaceRedux: [...state.WorkspaceRedux, action.payload]
            }
        case 'EDIT_TASK_WORKSPACE':
            let newWorkspaceRedux1 = state.WorkspaceRedux.map((item, index) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            })
            return {
                ...state, WorkspaceRedux: newWorkspaceRedux1
            }
        case 'DELETE_TASK_WORKSPACE':
            let newWorkspaceRedux = state.WorkspaceRedux.filter((item, index) => item.id !== action.payload);
            return {
                ...state, WorkspaceRedux: newWorkspaceRedux
            }
        case 'ADD_WORKSPACE':
            return {
                ...state, Workspaces: [...state.Workspaces, action.payload]
            }
        case 'DELETE_WORKSPACE':
            let newWorkspaces = state.Workspaces.filter((item, index) => item.Workspaces_name !== action.payload);
            let newWorkspaceRedux2 = state.WorkspaceRedux.filter((item, index) => item.workspace !== action.payload);
            return {
                ...state, Workspaces: newWorkspaces, WorkspaceRedux: newWorkspaceRedux2
            }
        case 'EDIT_WORKSPACE':
            return {
                state
            }
        default:
            return state;
    }
}

export default WorkspaceRedux;