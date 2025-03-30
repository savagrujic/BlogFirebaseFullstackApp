import { auth, provider } from "../firebase-config"
import { signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { useNavigate } from "react-router"
export default function Home({ setisAuth }) {

    let navigate = useNavigate()

    function Login() {

        signInWithRedirect(auth, provider).then((result) => {
            setisAuth(true)
            localStorage.setItem('isAuth', true)
            navigate('/')
        })


    }

    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }>
            <p>Sign in With Google</p>
            <button onClick={Login} style={{
                padding: '10px'
                
            }}>Sign in With Google</button>

        </div>

    )
}