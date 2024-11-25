const redux=require('redux');
console.log(redux);

// Initial State
const initialState={
    num:0
}

//reducer
const rootReducer=(state=initialState,action)=>
{
    if(action.type=="INC_NUM"){
        return {...state,num:state.num+1};
    }
    else if(action.type=="ADD_NUM"){
        return {...state,num:state.num+action.num};
    }
    return state;
}

//store
const store=redux.createStore(rootReducer);

store.subscribe(()=>{
    console.log("[Subscribe] ",store.getState());
})
//console.log(store.getState());

store.dispatch({
    type:"INC_NUM"
});
//console.log(store.getState());
store.dispatch({
    type:"ADD_NUM",
    num:30
})
//console.log(store.getState());
