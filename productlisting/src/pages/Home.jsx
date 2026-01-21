import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>This is home page</div>
            <button onClick={() => {
                navigate('/products')
            }}>Explore products</button>

        </>
    );
}

export default Home;
