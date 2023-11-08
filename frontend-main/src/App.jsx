import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { createContext, useState } from 'react';
import useAuthCheck from './hooks/useCheckAuth';
import MainLayout from './Layout/MainLayout';

export const AuthContext = createContext();

const App = () => {

    

    const [auth, setAuth] = useState()
    // const checkAuth = useAuthCheck()
    // console.log(checkAuth);
    // if (!checkAuth) {
    //     return <div>loading...</div>
    // }
    return (
        <div>
            
            <AuthContext.Provider  value={[auth, setAuth]}>
                <MainLayout>
                <RouterProvider router={router} />

                </MainLayout>

            </AuthContext.Provider>

                
        </div>
    );
};

export default App;