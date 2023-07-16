import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useCollection from "../useCollection";

export const Login = () => {
  const { addUser } = useCollection();

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        console.log("token is", token);
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log("user is", user.displayName);
        addUser({ name: user.displayName, email: user.email, uid: user.uid });
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log("credential is", credential);
      });
  };

  return (
    <button
      className="w-full text-center py-3 rounded bg-cyan-600 text-white hover:bg-green-dark focus:outline-none my-1"
      onClick={signIn}
    >
      <span className="font-bold">Lets find you a buddy!</span>
    </button>
  );
};
