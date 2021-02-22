import * as actionTypes from '../actions/actions'
import { updateObject } from '../utility';

const initialState={
    results:[]
}

/// ---- TO MAKE the switch statements concise , we can make functions to handle each switch case and call updateObject from those functions and 
// return those functions in their corresponding switch-case. 
const reducer=(state=initialState,action)=>
{
    switch(action.type)
    {    
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results:state.results.concat({id:new Date(),value:action.result})
            }
        case actionTypes.DELETE_RESULT:
            // const id=2;
            // const newArray=[...state.results];
            // newArray.results.splice(id,1);
            const updatedArray=state.results.filter(result=>result.id!==action.resultElId);
            // return{
            //     ...state,
            //     // results:newArray
            //     results:updatedArray
            // }
            return updateObject(state,{results:updatedArray});
        default:
            return state;
    }
};
export default reducer;