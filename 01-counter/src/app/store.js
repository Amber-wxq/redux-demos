import { configureStore } from "@reduxjs/toolkit";
// import{createStore} from "redux";
//导出一个reducer函数
import counterReducer from '../features/counter/counterSlice'
// ccconfigureStore要求传入一个reducer参数，对象的键名将定义最终状态树的键名key
export const store= configureStore({
    //表示希望在Redux状态对象中有一个state.counter部分，并且希望counterReducer函数负责决定是否以及如何在dispatch action时更新state.counter部分
    reducer:{
        //counterSlice文件，为计数器逻辑导出了一个reducer函数
        //希望在Redux状态对象中有一个state.counter部分，并且希望counterReducer函数复负责决定是否以及如何在dispatch action时更新state.counter部分
        counter:counterReducer
    }
})

