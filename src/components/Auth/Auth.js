import { createContext,useState } from 'react'

const AuthContext =createContext({
    login : user =>{},
    logout:()=>{},
    userId :"",
    token:"",
    isUserLoggedIn:false,
    userRole:"",
})
let resetLogoutTimer;

export const AuthContextProvider = (props) => {

    const localToken = localStorage.getItem("jwtToken");
    const localUserRole = localStorage.getItem("userRole");
    const localUserId = localStorage.getItem("userId");
    
    const [token,setToken]= useState(localToken);
    const [userRole,setUserRole]= useState(localUserRole);
    const [userId,setUserId] = useState(localUserId);
    let userLoggedIn =!!token;

    const calculateRemainderTime = expiryDate=>{
        const currentTime = new Date().getTime();
        const corrPondingExpiryTime = new Date(expiryDate).getTime();
        const remainingTime = corrPondingExpiryTime - currentTime;
        return remainingTime;
    }
    const logOutHandler =()=>{
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("expiryDate");
        localStorage.removeItem("userRole");
        localStorage.removeItem("userId");
        setToken(null);
        if(resetLogoutTimer) clearTimeout(resetLogoutTimer);

    }

    const loginHandler=(user)=>{
        localStorage.setItem("jwtToken",user.token);
        localStorage.setItem("userId",user.userId);
        localStorage.setItem("userRole",user.userRole);

        const remainingMSeconds = 5*24*60*60*1000;
        const expiryDate = new Date(new Date().getTime()+ remainingMSeconds);
        localStorage.setItem("expiryDate",expiryDate.toISOString());
        setToken(user.token);
        setUserId(user.userId);
        setUserRole(user.userRole);
        userLoggedIn = true;
        const remainingTime = calculateRemainderTime(expiryDate);
        resetLogoutTimer = setTimeout(logOutHandler,remainingTime);
    };
   
    const AuthContextValue={
        login:loginHandler,
        logout:logOutHandler,
        token:token,
        isUserLoggedIn:userLoggedIn,
        userRole:userRole,
        userId:userId,

    }

  return <AuthContext.Provider value={AuthContextValue}>
    {props.children}
  </AuthContext.Provider>
}


export default AuthContext;