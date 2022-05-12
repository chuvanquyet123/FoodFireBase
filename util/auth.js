import axios from 'axios';

const API_KEY = 'AIzaSyD9nTcEwYpFBLfFEzkMTHR2ugqv6jn8cDQ'



export  function createUser(email, password){
    console.log("heres")
    console.log(email,password)
  const response =  axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ API_KEY   ,
    {
        email, 
        password,
        returnSecureToken: true

    }
  );
}

export  function login(email, password){
  const response =  axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ API_KEY   ,
    {
        email, 
        password,
        returnSecureToken: true

    }
    
  ).then((data)=>{
      console.log(data)
  }).catch((err)=>{
    console.log(err)
    
  })  
}


