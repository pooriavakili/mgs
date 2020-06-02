
import {ADDFAVORITETYPES} from './ActionTypes'

export const reducer=(state={data:null},action)=>{
    switch (action.type) {
        case ADDFAVORITETYPES:
            console.log(state)
            return{
                ...state,
                data: action.payload
            }
            break;
        default:
            return  state
    }
}
