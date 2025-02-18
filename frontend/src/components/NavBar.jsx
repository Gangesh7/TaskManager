import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/ContextProvider';

const NavBar = ({setQuery}) => {
    const { user, logout } = useAuth(); 
  
    return (
        <nav className='bg-gray-800 p-4 text-white flex justify-between items-center'>
           
            <div className='text-xl font-bold'>
                <Link to='/'>TaskManager</Link>
            </div>

          
            <input
                type='text'
                placeholder='Search Tasks...'
                className='bg-gray-700 text-white px-4 py-2 rounded w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
                onChange={(e)=> setQuery(e.target.value)}
           />

            <div className='flex items-center space-x-4'>
                {!user ? (
                    <>
                        <Link
                            to='/login'
                            className='px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md'
                        >
                            Login
                        </Link>
                        <Link
                            to='/register'
                            className='px-5 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md'
                        >
                            Sign Up
                        </Link>
                    </>
                ) : (
                    <>
                        <span className='mr-4 font-semibold'>{user.name}</span>
                        <button
                            
                            className='px-5 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md'
                       onClick={logout}
                       >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
