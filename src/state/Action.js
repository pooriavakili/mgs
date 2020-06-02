import {ADDFAVORITETYPES} from "./ActionTypes";

export const saveData=(props)=>{
    return{
        type:ADDFAVORITETYPES,
        payload:props
    }


}