import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Home = () => {
    const user = useContext(AuthContext);
    console.log(user); // i can get here user from AuthProvider
    return (
        <div>
        </div>
    );
};

export default Home;