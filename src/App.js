import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen/HomeScreen';
import LogInScreen from './components/screens/LogInScreen/LogInScreen';
import { auth } from './utils/firebase/firebase.utils';
import { login, logout, selectUser } from './features/userSlice';
import './App.css';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(
    () => {
      const unsubscribe = auth.onAuthStateChanged(
        userAuth => {
          if (userAuth) {
            // Logged In
            dispatch(login({
              uid: userAuth.uid,
              email: userAuth.email  
            }));
          } else {
            // Logged Out 
            dispatch(logout)
          }
        }
      )
        return unsubscribe;
    }, [])

  return (
    <div className="app">
      <BrowserRouter>
      {
        !user
        ? <LogInScreen />
        : <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/hi' element={<h1>Hiii</h1>} />
        </Routes> 
      }
      </BrowserRouter>
    </div>
  );
}

export default App;
