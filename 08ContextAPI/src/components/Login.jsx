import React , {useState , useContext} from 'react';
import userContext from '../context/userContext';
function Login() {
    const [username , setusername] = useState('');
    const [email , setemail] = useState('');
    const {setUser} = useContext(userContext);
    const handleLogin = () => {
        setUser({username , email});
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='Enter your name' value={username} onChange={(e) => setusername(e.target.value)} />
            <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setemail(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;