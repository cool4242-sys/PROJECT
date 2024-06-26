import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler({email, password}){
    setIsAuthenticating(true);
    try {

      await createUser(email, password);
    }catch(error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, Please enter valid data and try again!',
      )
    }
    setIsAuthenticating(false);
  }
  
  if(isAuthenticating){
    return <LoadingOverlay message='Creating User !!..'/>
  }

  return <AuthContent onAuthenticate={signUpHandler}/>;
}

export default SignupScreen;
// import { useState } from 'react';

// import AuthContent from '../components/Auth/AuthContent';
// import LoadingOverlay from '../components/ui/LoadingOverlay';
// import { createUser } from '../util/auth';

// function SignupScreen() {
//   const [isAuthenticating, setIsAuthenticating] = useState(false);

//   async function signupHandler({ email, password }) {
//     setIsAuthenticating(true);
//     await createUser(email, password);
//     setIsAuthenticating(false);
//   }

//   if (isAuthenticating) {
//     return <LoadingOverlay message="Creating user..." />;
//   }

//   return <AuthContent onAuthenticate={signupHandler} />;
// }

// export default SignupScreen;