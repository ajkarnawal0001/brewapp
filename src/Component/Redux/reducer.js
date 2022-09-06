import { UPDATE_Logged_DATA, UPDATE_Logged_FAILURE, UPDATE_Logged_REQUEST } from "./actionType"

const initState = {
    data:[],
    key:"",
    isLoading: false,
    isError: false,
}

export const updateReducer = (state = initState,{type,payload,key})=>{
    switch(type){
        case UPDATE_Logged_DATA: {
            return{
                ...state,
                data:payload,
                key:key,
                isLoading:false,
            }
        }
        case UPDATE_Logged_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        }
        case UPDATE_Logged_FAILURE: {
            return{
                ...state,
                isLoading:false,
                isError:payload,
            }
        }
        default:
            return state
    }
}