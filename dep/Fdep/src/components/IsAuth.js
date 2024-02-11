import {useState} from 'react';


const useAuth =() =>{

const [isAuthenticated, setAuthenticated] =useState(localStorage.getItem('token'));

//    const [isAuthenticated, setAuthenticated] =useState(!!localStorage.getItem('token'));
// const login= () =>{
//     localStorage.setItem("token",  a5Vc9Rm2eE7bF9TqD5nZ8KcP4jW3yA6m);
//     setAuthenticated(true);
// };
// const logout= () =>{
//     localStorage.removeItem("token");
//     setAuthenticated(false);
// };


console.log(isAuthenticated);
// return {isAuthenticated, login, logout};


return { isAuthenticated };


};
export default useAuth;