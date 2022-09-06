
import { UPDATE_Logged_DATA, UPDATE_Logged_FAILURE, UPDATE_Logged_REQUEST } from './actionType'
const updateRequest = () =>{
    return {
        type:UPDATE_Logged_REQUEST
    }
}
const updateSuccess = (payload,key)=>{
    return{
        type:UPDATE_Logged_DATA,
        payload:payload,
        key:"123"
    }
}
const updateFailure = (err,page,query) =>{
    return{
        type:UPDATE_Logged_FAILURE,
        payload:err,
        page,
        query
    }
}

export const updateAction =(payload) =>(dispatch)=>{
    const requestAction = updateRequest()
    dispatch(requestAction)
    const successAction = updateSuccess(payload)
    dispatch(successAction)
    const failureAction = updateFailure(payload)
    dispatch(failureAction)

}

