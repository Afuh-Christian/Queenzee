import loginstyle from './Login.module.css'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { currentLoggedinUser, LoginUserThunk, RefreshLogin } from '../../dataStore/UserSlice/AuthSlice/AuthSlice';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Login() {
    const dispatch = useDispatch()
    const currentUser = useSelector(currentLoggedinUser)
    const router = useRouter()
    const [formobject, setFormobject] = useState({
        username: "",
        password: ""
    })

    useEffect(() => {
        if (currentUser?.accessToken) {
            router.push("/")
        }

    }, [currentUser])


    function InputForm(e) {
        const { name, type, value } = e.target
        setFormobject(prev => ({
            ...prev,
            [name]: value
        }))
    }

    async function LoginUser(e) {
        await e.preventDefault()
        await dispatch(LoginUserThunk(formobject))

    }


    return (
        <section className={loginstyle.section}>
            <div>
                <form action="" onSubmit={LoginUser}>
                    <div>

                        <div className={loginstyle.email}>
                            <label >Email : </label>
                            <input type="text" name="username" id='username' placeholder="Enter username" onChange={InputForm} />
                        </div>

                        <div className={loginstyle.password}>
                            <label >Password : </label>
                            <input type="password" name="password" id="password" placeholder="Enter password" onChange={InputForm} />
                        </div>

                    </div>

                    <div className={loginstyle.submit}>
                        <button type="submit">Login</button>
                    </div>

                    <div className={loginstyle.login}>
                        <p>Don't have an account yet :  <Link href="/Register">Sign Up</Link></p>
                    </div>
                </form>


            </div>
        </section>

    );
}

export default Login;