import {
    TEST
} from '../constants'

export function fetchDetail(id){
    return {
        type: TEST,
        id
    }
}