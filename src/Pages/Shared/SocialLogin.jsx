import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SocialLogin = () => {
const {googleLogin} = useContext(AuthContext);

const handleGoogle = () =>{
    googleLogin()
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);
    })
    .catch(error=>{
        console.log(error);
    })
}

  return (
    <div className="text-center">
      <div className="divider">OR</div>
      <button onClick={handleGoogle} className="btn btn-circle btn-outline">G</button>
    </div>
  );
};

export default SocialLogin;
