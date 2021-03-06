import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';

const initialState={
    counter:0
}
const reducer=(state=initialState,action)=>
{
    switch(action.type)
    {    
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter:state.counter+1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter:state.counter-1
            }
        case actionTypes.ADD:
            return updateObject(state,{counter:state.counter+action.val}); // this utility can be applied to all others as well.
            // return {
            //     ...state,
            //     counter:state.counter+action.val
            // }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter:state.counter-action.val
            }
     
        default:
            return state;
    }
};
export default reducer;