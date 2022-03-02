import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeFirebase from"../Firebase/firebase.init";

initializeFirebase()
const useFirebase = () =>{
const [user, setUser] = useState({});
const [error, setError] = useState('');

const auth = getAuth();


const googleProvider = new GoogleAuthProvider();

const signInUsingGoogle = () => {
  signInWithPopup(auth, googleProvider)
      .then(result => {
          console.log(result.user);
          setUser(result.user);
      })
      .catch(error => {
          setError(error.massage);
      })
}

const registerUser = (email, password ) =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       
        const user = userCredential.user;
     
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       
      });
}

const loginUser = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


useEffect( ()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user);       
        } else {
         setUser({})
        }
      });
      return () =>unsubscribe;
},[])

const logout = ()=>{
    const auth = getAuth();
signOut(auth).then(() => {
  
}).catch((error) => {
  
});
}

return {
    user,
    registerUser,
    loginUser,
    logout,
    signInUsingGoogle,
}
}

export default useFirebase;