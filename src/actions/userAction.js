// import axios from "axios";
// import qs from "qs";
// axios.defaults.baseURL = "http://localhost:3000/api/user";
export const setUsername = (username) => ({
    type:"SET_USERNAME",
    payload:{username},
});
export const setPassword = (password) => ({
    type:"SET_PASSWORD",
    payload:{password},
})
export const setEmail = (email) => ({
    type:"SET_EMAIL",
    payload:{email},
});
// export const setPasswordAgain = (password)=>({
//     type:""
// });
// export const loginSuccess = (user_token) => ({
//     type:"LOGIN_SUCCESS",
//     payload:{user_token}
// });
// export const loginFailed = () => ({
//     type:"LOGIN_FAILED",
//     payload:undefined
// });
// export const fetchLogin = (username,password) => {
//     return async(dispatch,getState) => {
//         try{
//             const response = await axios.post("/login",{username:username,password:password});
//             const data = response.data;
//             if (data.is_login == true){
//                 dispatch(loginSuccess(data.user_token));
//             }else{
//                 dispatch(loginFailed());
//             }
//         }catch(err){
//             dispatch(loginFailed());
//         }
//     }
// };
// export const fetchRegist = (username,email,password) => {
//     return async(dispatch,getState) => {
//         try{
//             const response = await axios.post("/regist",{username,email,password});
//             const data = response.data;
//             if(data.is_regist == true){
//                 dispatch(loginSuccess(data.user_token));
//             }else{
//                 dispatch(loginFailed());
//             }
//         }catch(err){
//             dispatch(loginFailed());
//         }
//     }
// }
// export const fetchUserInfo = ()=>{
//     return async(dispatch,getState)=>{
//         try{
//             const user_token = getState().user_token;
//             const params = qs.stringify({user_token});
//             const response = await axios.get(`/get?${params}`);
//             dispatch(setEmail(response.data.email));
//             dispatch(setUsername(response.data.username));
//         }catch(err){
//             // dispatch();
//         }
//     }
// }
// export const fetchUpdatePassword = (password,new_password)=>{
//     return async(dispatch,getState)=>{
//         try{
//             const user_token = getState().user_token;
//             const response = await axios.put("/update/password",{password,new_password,user_token});
//             if (response.data.is_updated){
//                 dispatch(setPassword(new_password));
//             }
//         }catch(err){
//             console.log(err);
//         }
//     }
// }
// export const fetchUpdateUser = (username,email) => {
//     return async (dispatch,getState)=>{
//         try{
//             const user_token = getState().user_token;
//             const response = await axios.put("/update/",{username,email,user_token});
//             if(response.data.is_updated){
//                 dispatch(setUsername(username));
//                 dispatch(setEmail(email));
//             }
//         }catch(err){
//             console.log(err);
//         }
//     }
// }