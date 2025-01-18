import SendEmail from './Components/SendEmail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './firebase';
import { setAuthUser } from './redux/appSlice';
import Body from './Components/Body';
import Inbox from './Components/inbox';
import Mail from './Components/Mail';
import Login from './Components/Login';
import Navbar from './Components/Navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      },

    ]
  }
])

function App() {
  const { authUser } = useSelector(store => store.app);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setAuthUser({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }));
      }
    })
  }, [])

  return (
    <div className='bg-[#F6F8FC] w-screen h-screen overflow-hidden'>
      {
        !authUser ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <RouterProvider router={router} />
            <div className='absolute w-[30%] bottom-0 right-20 z-10'>
              <SendEmail />
            </div>
          </>
        )
      }
    </div>
  )
}

export default App
