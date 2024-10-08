// // //API to register a new user into the database
import axios from 'axios';
import { beUrl } from "./constants";

// const userSignup = async (userData) => {
//   try {
//     const response = await axios(`${beUrl}/`)
//     console.log(response)
//   }
//   catch(err){
//     console.log(err)
//   }
// }
     
  



// export { userSignup };




const userSignup = async (userData) => {
  try {
    const response = await axios.post(`${beUrl }/register`, userData, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during user signup:', error);
    throw error;
  }
};

const userSignIn = async (userData) => {
  try {
    const response = await axios.post(`${beUrl }/login`, userData, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during user signin:', error);
    throw error;
  }
};

const verifyAccount=async(token)=>{
  const response=await fetch(`${beUrl}/verify-user`,{
    method:'POST',
    body:JSON.stringify({
      token
    }),
  headers:{
    "Content-Type":"application/json;charset=utf-8"
  },
});
return await response.json();
}

export { userSignup , userSignIn ,verifyAccount};
