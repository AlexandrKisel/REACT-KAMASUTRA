const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [
        /*{
            id: 1,
            photoUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: 2,
            photoUrl: 'https://media.istockphoto.com/vectors/user-sign-icon-person-symbol-human-avatar-vector-id639085642',
            followed: false,
            fullName: 'Sasha',
            status: 'I am a boss too',
            location: {country: 'Russia', city: 'Moscow'}
        },
        {
            id: 3,
            photoUrl: 'https://icon-library.com/images/icon-avatar/icon-avatar-19.jpg',
            followed: true,
            fullName: 'Vasya',
            status: 'I am a boss too',
            location: {country: 'Ukraine', city: 'Kiev'}
        },
        {
            id: 4,
            photoUrl: 'https://w7.pngwing.com/pngs/304/305/png-transparent-man-with-formal-suit-illustration-web-development-computer-icons-avatar-business-user-profile-child-face-web-design.png',
            followed: false,
            fullName: 'Oleg',
            status: 'I am a boss too',
            location: {country: 'Poland', city: 'Warsaw'}
        },*/
    ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
            case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;