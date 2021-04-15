import { useAuth0 } from '@auth0/auth0-react';

const Signup = () => {
    const {loginWithRedirect} = useAuth0()

    return (
        <div>
            <h2>Sign Up</h2>
            <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    )
};

export default Signup;
