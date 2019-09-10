

import {UP,DOWN} from "./action-type"  //actiontype 常量


export function up(data){
    return {type:UP,data}
}
// 同步action
export function down(data){
    return {type:DOWN,data}
}
// 异步action
export function upAsync(data){
    return dispatch =>{
        setTimeout(()=>{
            dispatch(up(data))
        },2000)
    }
}