import React, { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const Navbar = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

    return (
        <div className='flex items-center justify-between'>
            <h1>Navbar</h1>
            <p>{theme}</p>
            <button onClick={() => {
                if (theme === "light") {
                    setTheme("dark")
                } else {
                    setTheme("light")
                }
            }}>Change theme</button>
        </div>
    );
}

export default Navbar;