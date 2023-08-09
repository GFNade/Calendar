const initState = {
    MyLifeRedux: [
        { id: 1, workspace: "mylife", task_name: "hang out", description: " go camping, travel with family and friends go camping, travel with family and friends go camping, travel with family and friends go camping, travel with family and friends ", deadline: "05/07/2023", status: "Completed", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 2, workspace: "mylife", task_name: "Morning Exercise", description: "Engage in a morning exercise routine to stay fit and healthy.", deadline: "10/06/2023", status: "Completed", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 3, workspace: "mylife", task_name: "Workout at the Gym", description: "Visit the gym to engage in a workout session and build strength.", deadline: "10/06/2023", status: "Completed", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 4, workspace: "mylife", task_name: "Read a Book", description: "Spend time reading a book to enhance knowledge and relax the mind.", deadline: "15/06/2023", status: "Stopped", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 5, workspace: "mylife", task_name: "Cook a Healthy Meal", description: "Prepare a nutritious and delicious meal for breakfast, lunch, or dinner.", deadline: "22/06/2023", status: "Completed", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 6, workspace: "mylife", task_name: "Complete Household Chores", description: "Take care of household chores such as cleaning, laundry, and organizing.", deadline: "23/06/2023", status: "Stopped", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 7, workspace: "mylife", task_name: "Attend a Yoga Class", description: "Join a yoga class to improve flexibility, mindfulness, and overall well-being.", deadline: "28/06/2023", status: "Completed", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 8, workspace: "mylife", task_name: "Work on a Personal Project", description: "Dedicate time to work on a personal project or hobby, such as painting, writing, or coding.", deadline: "29/06/2023", status: "Completed", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 9, workspace: "mylife", task_name: "Spend Quality Time with Family", description: "Engage in activities with family members, such as playing games, having conversations, or going for a walk together.", deadline: "29/06/2023", status: "Completed", favourite: true, position: "performer", performer: 5, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 10, workspace: "mylife", task_name: "Practice Meditation", description: "Allocate time for meditation to promote relaxation, mindfulness, and mental clarity.", deadline: "02/07/2023", status: "Stopped", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 11, workspace: "mylife", task_name: "Learn a New Skill", description: "Invest time in learning a new skill or taking an online course to broaden knowledge and personal growth.", deadline: "02/07/2023", status: "Completed", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 12, workspace: "mylife", task_name: "Plan and Prepare Weekly Meals", description: "Create a meal plan and grocery list for the week, ensuring a healthy and well-balanced diet.", deadline: "06/07/2023", status: "Stopped", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 13, workspace: "mylife", task_name: "Engage in Creative Writing", description: "Spend time writing creatively, such as journaling, blogging, or storytelling.", deadline: "09/07/2023", status: "Completed", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 14, workspace: "mylife", task_name: "Explore a New Hobby", description: "Discover and engage in a new hobby or recreational activity, such as photography, gardening, or playing a musical instrument.", deadline: "10/07/2023", status: "Completed", favourite: true, position: "performer", performer: 3, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 15, workspace: "mylife", task_name: "Connect with Friends", description: "Reach out to friends through phone calls, video chats, or meetups to maintain social connections and strengthen relationships.", deadline: "11/07/2023", status: "Completed", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 16, workspace: "mylife", task_name: "Practice Mindful Eating", description: "Adopt mindful eating habits by savoring each bite, paying attention to hunger and fullness cues, and appreciating the flavors of food.", deadline: "11/07/2023", status: "UnComplete", favourite: true, position: "performer", performer: 5, evaluate: 0, support: 1, filePerformer: [], fileSupport: [] },
        { id: 17, workspace: "mylife", task_name: "Enjoy Nature Walks", description: "Take leisurely walks in nature, such as in parks or hiking trails, to unwind and connect with the natural environment.", deadline: "12/07/2023", status: "Completed", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 18, workspace: "mylife", task_name: "Volunteer for a Cause", description: "Engage in volunteer work or community service to contribute to a cause and make a positive impact on others.", deadline: "18/07/2023", status: "UnComplete", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 19, workspace: "mylife", task_name: "Listen to Podcasts", description: "Spend time listening to podcasts on various topics of interest, such as personal development, science, or entertainment.", deadline: "22/07/2023", status: "UnComplete", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 20, workspace: "mylife", task_name: "Engage in Physical Activities", description: "Participate in physical activities such as cycling, swimming, or playing sports to maintain an active lifestyle.", deadline: "27/07/2023", status: "UnComplete", favourite: true, position: "performer", performer: 4, evaluate: 0, support: 1, filePerformer: [], fileSupport: [] },
        { id: 21, workspace: "mylife", task_name: "Practice Gratitude", description: "Cultivate a gratitude practice by reflecting on and appreciating the positive aspects of life.", deadline: "27/07/2023", status: "Completed", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 22, workspace: "mylife", task_name: "Spend Time in Nature", description: "Immerse oneself in nature by visiting parks, forests, or beaches to enjoy the beauty and serenity of the surroundings.", deadline: "30/07/2023", status: "Stopped", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 23, workspace: "mylife", task_name: "Engage in Brain Teasers", description: "Solve puzzles, riddles, or brain teasers to stimulate cognitive skills and enhance problem-solving abilities.", deadline: "03/08/2023", status: "UnComplete", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 24, workspace: "mylife", task_name: "Practice Deep Breathing", description: "Take moments throughout the day to practice deep breathing exercises for relaxation and stress reduction.", deadline: "08/08/2023", status: "UnComplete", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 25, workspace: "mylife", task_name: "Maintain a Journal", description: "Write in a journal to express thoughts, emotions, and experiences, fostering self-reflection and personal growth.", deadline: "08/08/2023", status: "UnComplete", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 26, workspace: "mylife", task_name: "Visit a Museum or Art Gallery", description: "Explore cultural and artistic exhibits by visiting museums or art galleries to appreciate various forms of art and history.", deadline: "13/08/2023", status: "Completed", favourite: true, position: "performer", performer: 3, evaluate: 0, support: 1, filePerformer: [], fileSupport: [] },
        { id: 27, workspace: "mylife", task_name: "Engage in Music Practice", description: "Spend time practicing a musical instrument or singing to enhance musical skills and enjoyment.", deadline: "16/08/2023", status: "Stopped", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 28, workspace: "mylife", task_name: "Practice Time Management", description: "Organize and prioritize daily tasks and activities to optimize productivity and efficiency.", deadline: "20/08/2023", status: "UnComplete", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 29, workspace: "mylife", task_name: "Create and Maintain a Budget", description: "Establish a budget, track expenses, and manage finances effectively for financial well-being.", deadline: "25/08/2023", status: "UnComplete", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
        { id: 30, workspace: "mylife", task_name: "Engage in Continuous Learning", description: "Devote time to learn new things every day, whether through reading, online courses, or educational videos.", deadline: "28/08/2023", status: "UnComplete", favourite: true, position: "leader", performer: 0, evaluate: 0, support: 0, filePerformer: [], fileSupport: [] },
    ]
}

const MyLifeRedux = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TASK_MY_LIFE':
            console.log(action.payload);
            return {
                ...state, MyLifeRedux: [...state.MyLifeRedux, action.payload]
            }
        case 'EDIT_TASK_MY_LIFE':
            let newMyLifeRedux1 = state.MyLifeRedux.map((item, index) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            })
            return {
                ...state, MyLifeRedux: newMyLifeRedux1
            }
        case 'DELETE_TASK_MY_LIFE':
            let newMyLifeRedux = state.MyLifeRedux.filter((item, index) => item.id !== action.payload);
            return {
                ...state, MyLifeRedux: newMyLifeRedux
            }
        default:
            return state;
    }
}

export default MyLifeRedux;