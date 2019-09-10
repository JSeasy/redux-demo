 
 
export default function abc(state = 0,action){
if(action.type === "a"){
 return state + action.data
}else if(action.type === "b"){
return  state - action.data
}else{
    return state
}
}

