import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import Miami from '../Media/Miami.jpeg';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here, such as making an API call to register the user
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
  };

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
       <img className='absolute w-full h-full object-cover mix-blend-overlay' src={Miami} alt="/" /> 

      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={handleSubmit}>
          <h2 className='text-4xl font-bold text-center py-4'>Create an Account</h2>
          <div className='flex justify-between py-8'>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'>
              <AiFillFacebook className='mr-2' /> Facebook
            </p>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'>
              <FcGoogle className='mr-2' /> Google
            </p>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              className='border relative bg-gray-100 p-2'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              className='border relative bg-gray-100 p-2'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='phone'>Phone</label>
            <input
              id='phone'
              className='border relative bg-gray-100 p-2'
              type='text'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              className='border relative bg-gray-100 p-2'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='w-full py-3 mt-8 bg-blue-600 hover:bg-blue-500 relative text-white' type='submit'>
            Sign Up
          </button>
          <p className='flex items-center mt-2'>
            <input className='mr-2' type='checkbox' />Remember Me
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignUp;