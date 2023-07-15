import useAuth from "../services/auth";

function Form() {
  const { getUser } = useAuth();

  const currentUser = getUser();

  console.log("frontend check getuser is", currentUser);

  return <div>Form is here</div>;
}

export default Form;
