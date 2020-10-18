import  * as actionTypes from '../actions/types'
import { updateObject, BOARD_KEY, AGENT_KEY, SOURCE_KEY } from '../../utils/utils';

const queryObject = localStorage.getItem('queryObject') || {
    board_keys: [BOARD_KEY],
    agent_key: AGENT_KEY,
    tags_included: [[], []],
    name: "",
    limit: 10,
    page: 1,
    sort_by: 'searching',
    order_by: 'asc',
    location_distance: 30,
          location_geopoint: {},
    use_agent: 0,
    profile_key: '',
    source_key: SOURCE_KEY,
    text_keywords: [],
    totalPage : 0,
    status: true,
}

const boardFilters = localStorage.getItem('boardFilters') || {
    skills: [],
    languages: [],
    jobs: [],
    locations: [],
    categories: [],
    companies: [],
    orderBy: '',
    sortBy: '',
}

const initialState = {
    jobs: {},
    skills: [],
    languages: [],
    locations: {},
    queryObject,
    boardFilters: JSON.parse(boardFilters)
}


const updateBoardFilters = (state, action) => {
    return updateObject(state, { 
        boardFilters: action.boardFilters,
    })
}
const addSkill = (state, action) => {
    const skills = state.push(action.skill);
    return {...state, skills }
}

const removeSkill = (state, action) => {
    const skills = state.push(action.skill);
    return {...state, skills }
}

const fetchJobsRequest = (state, action) => {
    return updateObject( state, {
        jobs: { r: true, payload: state.jobs }
    });
}

const fetchJobsSuccess = (state, action) => {
    return updateObject( state, {
        jobs: { s: true, payload: action.jobs }
    });
}

const fetchJobsFail = (state, action) => {
    return updateObject( state, {
        jobs: { f: true }
    });

}

const jobsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_SKILL: return addSkill( state, action );
        case actionTypes.FETCH_JOBS_REQUEST: return fetchJobsRequest( state, action );
        case actionTypes.FETCH_JOBS_SUCCESS: return fetchJobsSuccess( state, action );
        case actionTypes.FETCH_JOBS_FAIL: return fetchJobsFail( state, action );
        case actionTypes.UPDATE_BOARD_FILTERS: return updateBoardFilters( state, action );
        default: return state;
    }
};

export default jobsReducer;