import {
    TEST,
    FETCH_TEST,
    RECEIVE_TEST
} from '../constants'
import fetch from 'isomorphic-fetch'

export function fetchDetail(id){
    return {
        type: TEST,
        id
    }
}

export function fetchTest(callback){
    return function(dispatch){
        return fetch('http://api.apiopen.top/musicBroadcasting').then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(stories) {
            callback && callback(stories.result)
            dispatch(receiveTest(stories.result))
        });
    }
}

export function receiveTest(testDetail){
    return {
        type:RECEIVE_TEST,
        testDetail
    }
}