import * as axios from 'axios';

const GET_USERS = 'GET-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const ON_PAGE_CHANGED = 'ON-PAGE-CHANGED';
const ON_CHANGE_PAGE_SIZE = 'ON-CHANGE-PAGE-SIZE';
const SORT_ID = 'SORT-ID';
const SORT_FIRSTNAME = 'SORT-FIRSTNAME';
const SORT_LASTNAME = 'SORT-LASTNAME';
const SORT_EMAIL = 'SORT-EMAIL';
const SORT_PHONE = 'SORT-PHONE';
const SET_SEARCH_LIST = 'SET-SEARCH-LIST';
const SET_SEARCH_STRING = 'SET-SEARCH-STRING';


let initialState = {
    users : [],
    isFetching: false,
    totalUsersCount : 0,
    pageSize : 10,
    currentPage : 1,
    sort : '',
    searchString : '', 
}


let citiesListReducer = (state = initialState , action) => {
    switch (action.type) {
        case (GET_USERS) : {
            return {
                ...state,
                users : action.users,
            }
        }
        case (TOGGLE_IS_FETCHING): {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case (SET_TOTAL_USERS_COUNT): {
            return {
                ...state,
                totalUsersCount: state.users.length,
            }
        }
        case (ON_PAGE_CHANGED): {
            return {
                ...state,
                currentPage: action.page,
            }
        }
        case (ON_CHANGE_PAGE_SIZE): {
            return {
                ...state,
                pageSize : action.pageSize,
            }
        }
        case (SET_SEARCH_STRING): {
            let newUsers = [...state.users];
            return {
                ...state,
                searchString : action.searchString,
                totalUsersCount : newUsers.filter(user =>{
                    if ((String(user.id).indexOf(action.searchString)!=-1)||(String(user.firstName).indexOf(action.searchString)!=-1)||(String(user.lastName).indexOf(action.searchString)!=-1)||(String(user.email).indexOf(action.searchString)!=-1)||(String(user.phone).indexOf(action.searchString)!=-1)){
                        return user;
                    }
                }).length, 
            }
        }
        case (SET_SEARCH_LIST): {
            let newUsers = [...state.users];
            if (action.searchString === ''){
                return {
                    ...state,
                    searchList : newUsers, 
                    
                }
            } else{
            return {
                ...state,
                searchList : newUsers.filter(user =>{
                    if ((String(user.id).indexOf(action.searchString)!=-1)||(String(user.firstName).indexOf(action.searchString)!=-1)||(String(user.lastName).indexOf(action.searchString)!=-1)||(String(user.email).indexOf(action.searchString)!=-1)||(String(user.phone).indexOf(action.searchString)!=-1)){
                        return user;
                    }
                }),
            }
        }}
        case (SORT_ID): {
            if (state.sort =='IDup'){
                let newUsers = [...state.users];
                newUsers.sort( (a, b) => { if (a.id>b.id) {return -1} else if (a.id<b.id){return 1} else {return 0}});
                return {
                    ...state,
                    users : newUsers,
                    sort: 'IDdown'
                }
            } else{
                let newUsers = [...state.users];
                newUsers.sort( (a, b) => { if (a.id>b.id) {return 1} else if (a.id<b.id){return-1} else {return 0}});
                return {
                    ...state,
                    users : newUsers,
                    sort : 'IDup',
                }
        }}
        case (SORT_FIRSTNAME): {
            if (state.sort =='FirstNameup') {
                let newUsers = [...state.users];
                newUsers.sort( (a, b) => { if (a.firstName>b.firstName) {return -1} else if (a.firstName<b.firstName){return 1} else {return 0}});
                return {
                    ...state,
                    users : newUsers,
                    sort: 'FirstNamedown'
                }
            } else {let newUsers = [...state.users];
            newUsers.sort( (a, b) => { if (a.firstName>b.firstName) {return 1} else if (a.firstName<b.firstName){return-1} else {return 0}});
            return {
                ...state,
                users : newUsers,
                sort : 'FirstNameup',
                
            }}}
        case (SORT_LASTNAME): {
            if (state.sort =='LastNameup') {
                let newUsers = [...state.users];
                newUsers.sort( (a, b) => { if (a.lastName>b.lastName) {return -1} else if (a.lastName<b.lastName){return 1} else {return 0}});
                return {
                    ...state,
                    users : newUsers,
                    sort: 'LastNamedown'
                }
            } else {let newUsers = [...state.users];
            newUsers.sort( (a, b) => { if (a.lastName>b.lastName) {return 1} else if (a.lastName<b.lastName){return-1} else {return 0}});
            return {
                ...state,
                users : newUsers,
                sort : 'LastNameup',
                
            }}}
        case (SORT_EMAIL): {
            if (state.sort =='Emailup') {
                let newUsers = [...state.users];
                newUsers.sort( (a, b) => { if (a.email>b.email) {return -1} else if (a.email<b.email){return 1} else {return 0}});
                return {
                    ...state,
                    users : newUsers,
                    sort: 'Emaildown'
                }
            } else {let newUsers = [...state.users];
            newUsers.sort( (a, b) => { if (a.email>b.email) {return 1} else if (a.email<b.email){return-1} else {return 0}});
            return {
                ...state,
                users : newUsers,
                sort : 'Emailup',
                
            }}}
        case (SORT_PHONE): {
            if (state.sort =='Phoneup') {
                let newUsers = [...state.users];
                newUsers.sort( (a, b) => { if (a.phone>b.phone) {return -1} else if (a.phone<b.phone){return 1} else {return 0}});
                return {
                    ...state,
                    users : newUsers,
                    sort: 'Phonedown'
                }
            } else {let newUsers = [...state.users];
            newUsers.sort( (a, b) => { if (a.phone>b.phone) {return 1} else if (a.phone<b.phone){return-1} else {return 0}});
            return {
                ...state,
                users : newUsers,
                sort : 'Phoneup',
                
            }}}    
        default : return state;
    }
}

export let getUsers = (users) => {
    return {
        type : GET_USERS, users
    }
}
export const toggleIsFetching = (isFetching) => {
    return ({type: TOGGLE_IS_FETCHING, isFetching})
}
export const setTotalUsersCount = () => {
    return ({type: SET_TOTAL_USERS_COUNT})
}
export const onPageChanged = (page) => {
    return ({type: ON_PAGE_CHANGED, page})
}
export const onChangePageSize = (pageSize) => {
    return ({type: ON_CHANGE_PAGE_SIZE, pageSize})
}  
export const onSortID = () => {
    return ({type: SORT_ID})
}
export const onSortFirstName = () => {
    return ({type: SORT_FIRSTNAME})
}
export const onSortLastName = () => {
    return ({type: SORT_LASTNAME})
}
export const onSortEmail = () => {
    return ({type: SORT_EMAIL})
}
export const onSortPhone = () => {
    return ({type: SORT_PHONE})
}
export const setSearchList = (searchString) => {
    return ({type: SET_SEARCH_LIST, searchString})
}
export const setSearchString = (searchString) => {
    return ({type: SET_SEARCH_STRING, searchString})
}

export const requestUsers = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        await axios.get(`http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`).then( response => {
            dispatch(getUsers(response.data));
        }).catch(err => alert(err));
        dispatch(toggleIsFetching(false));
        dispatch(setTotalUsersCount());
        
    }
}


export default citiesListReducer;