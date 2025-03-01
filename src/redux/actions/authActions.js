import {auth} from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const registerUser = (email, password) => async (dispatch) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        dispatch({
            type: "REGISTER_SUCCESS",
            payload: userCredential.user
        });
    }catch (error){
        console.error("registerUser error: ", error);
    }
};
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const userCredential= await signInWithEmailAndPassword(auth, email, password);
    dispatch({
        type: "LOGIN_SUCCESS",
        payload: userCredential.user
    });
    localStorage.setItem("user", JSON.stringify(userCredential.user));

  }catch (error){
    console.error("loginUser error: ", error);
  }
};

export const logoutUser = () => async (dispatch)=> {
    await signOut(auth);
    dispatch({
        type: "LOGOUT_SUCCESS"
    });
    localStorage.removeItem("user");
};