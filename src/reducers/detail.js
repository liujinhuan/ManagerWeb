import { 
    RECEIVE_TEST,
    TEST
} from "../constants"

let initialState = {
    detail:{},
    id:null,
    testDetail:[]
}

export default function detailResucer(state = initialState,action){
    switch (action.type){
        case RECEIVE_TEST:
            return Object.assign({},state,{...action})
        case TEST:
            // console.log({...action})
            return Object.assign({},state,{...action})
        default:
            return state
    }
}

