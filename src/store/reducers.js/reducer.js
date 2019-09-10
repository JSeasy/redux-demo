import {DOWN,UP} from "../action-type"

// 储存初始state和state变化在这里实现



export default function acv (state = 0,action){
if(action.type === UP){
    
    return state + action.data
}else if(action.type === DOWN){
return  state - action.data
}else{
    return state
}
}

