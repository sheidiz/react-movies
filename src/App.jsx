import { useEffect, useState } from 'react';
import './App.css'
import AppRouter from './AppRouter'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import UserIcon from './components/user/UserIcon';
import { FcGoogle } from "react-icons/fc";

function App() {

  const [user, setUser] = useState();
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => { alert("Login Failed!"), console.log("Error:", error) }
  })

  useEffect(() => {
    if (user) {
      fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.access_token}`,
          Accept: 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setProfile(data);
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };


  return (
    <div className="min-h-screen">
      <div className="p-2 flex justify-end">
        {profile ? (
          <UserIcon profile={profile} logOut={logOut} />
        ) :
          (<button className="p-2 bg-indigo-50 rounded-md"
            onClick={login} >
            <FcGoogle className="inline mb-1" /> Sign in with Google
          </button>)
        }
      </div>
      <AppRouter />
    </div>
  )
}

export default App
