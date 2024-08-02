'use client';
import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import './globals.css';
import { signInWithGoogle, logout } from '../firebaseConfig';
import confetti from 'canvas-confetti';

export default function Home() {
  const [isJoined, setIsJoined] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [visibleTeamMembers, setVisibleTeamMembers] = useState([]);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      setIsJoined(true);
      setShowThankYou(true);
      // Trigger confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsJoined(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  const handleCloseThankYou = () => {
    setShowThankYou(false);
  };
  return (
    <div className='h-screen'>
      <nav className='border-b-4 h-fit text-center'>
        <div className='flex justify-between h-full px-10 py-5 sm:px-20'>
          <div className='flex items-center'>
            {/* <Image src={'/applelogo.png'} alt='logo' width='50' height='50' /> */}
            <h1 className='text-2xl font-bold ml-2'><span className='text-red-600'>Co</span><span>Buildr.</span></h1>
          </div>
          <div className='flex items-center flex-col sm:flex-row'>
            <a href='#team' smooth={true} duration={500} className='mr-4'>Team</a>
            <a href='/register' className='mr-4'>Contact</a>
          </div>
        </div>
      </nav>
      <main className='flex-1 overflow-auto'>
        <div>
          <div className='flex justify-center items-center h-96 flex-col my-4'>
            <div className='text-center p-4'>
              <h1 className='text-3xl p-1 lg:text-5xl'>Wanna <span className='font-bold'>Collaborate</span> with devs around the world?</h1>
              <p className='text-4xl font-bold text-wrap p-1 lg:text-6xl'>Don&#39;t let distance be a problem.</p>
            </div>
            <div className='flex justify-center items-center my-5'>
              <button 
                onClick={isJoined ? handleLogout : handleSignIn} 
                className='py-2 px-3 border-2 border-black rounded-lg hover:bg-black hover:text-white'
              >
                {isJoined ? 'Joined' : 'Join us'}
              </button>
            </div>
          </div>
        </div>
        {/* Thank You Box */}
        {showThankYou && (
          <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white p-6 rounded-lg shadow-lg z-50'>
            <h2 className='text-3xl text-center font-bold'>THANK YOU</h2>
            <p className='mt-2 text-center'>We appreciate your interest! Get ready to embark on a journey of collaboration and innovation with us.</p>
            <button 
              onClick={handleCloseThankYou} 
              className='absolute top-2 right-2 text-white text-xl'
            >
              &times;
            </button>
          </div>
        )}
        <div>
          <div className='flex justify-center items-center w-full h-max bg-[#41ab4a] text-white py-0 md:py-10 px-5'>
  <div className='flex w-full max-w-6xl mx-auto m-10'>
    {/* Content Container */}
    <div className='flex w-full justify-center items-center'>
      <div className='flex flex-col-reverse md:flex-row items-center space-x-5'>
        {/* White Box on the Left */}
        <div className='w-full h-fit bg-white p-6 rounded-lg shadow-lg flex flex-col relative sm:w-96'>
          <h2 className='text-gray-900 text-4xl font-bold absolute top-5 left-5'>Project Title</h2>
          <div className='mt-9 pt-2 text-gray-600 text-sm'>
            Created by Person 1
          </div>
          <p className='text-gray-800 text-md mt-4'>Collaborate with a global team to bring groundbreaking ideas to life and make a significant impact in your field.</p>
          <div className='flex flex-col'>
          <div className='mt-4 flex space-x-2'>
            <div className='bg-gray-200 text-gray-700 rounded-full flex px-2 py-2 text-xs'>HTML</div>
            <div className='bg-gray-200 text-gray-700 rounded-full px-2 py-2 text-xs'>CSS</div>
            <div className='bg-gray-200 text-gray-700 rounded-full px-2 py-2 text-xs'>JavaScript</div>
          </div>
          <button className='absolute bottom-5 right-5 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
            Join
          </button>
            {/* FontAwesome Icon Below the Button */}
            <div className='flex justify-end items-center absolute top-[calc(81%)] right-2 z-50 mt-2'>
              <FontAwesomeIcon 
                icon={faArrowPointer} 
                style={{ color: '#656565', fontSize: '50px' }} 
                className='animate-click'
              />
            </div>
            </div>
        </div>
        {/* Content on the Right */}
        <div className='flex-1 flex flex-col justify-center items-center text-center md:text-right p-4'>
          <h1 className='text-3xl px-6 lg:text-5xl text-wrap text-center font-bold w-full'>Explore New Projects and join the desired one</h1>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        <div>
        <div className='flex justify-center items-center w-f h-max bg-[#0D6EFD] text-white flex-col md:flex-row py-0 md:py-10 px-5 '>
            <div className='text-center p-4 flex justify-center items-center md:text-right md:w-1/2'>
              <h1 className='text-3xl px-6 lg:text-5xl text-wrap text-center font-bold xl:w-4/5'>Collaborate and track your team's progress</h1>
            </div>
            <div className='flex justify-evenly items-center my-5 flex-col h-60'>
            <div className='border-2 border-white rounded-full w-72 h-12 bg-white flex flex-row items-center p-1 justify-between progress-bar-container' data-filled='true'>
              <div className='bg-red-600 h-9 w-9 rounded-full'></div>
              <div className='h-2 flex-1 bg-[#f5f3fb] rounded-full mx-2'>
                <div className='h-full progress-bar progress-bar-content red'></div>
              </div>
            </div>
            <div className='border-2 border-white rounded-full w-72 h-12 bg-white flex flex-row items-center p-1 justify-between progress-bar-container' data-filled='true'>
            <div className='bg-blue-600 h-9 w-9 rounded-full'></div>
            <div className='h-2 flex-1 bg-[#f5f3fb] rounded-full mx-2'>
            <div className='h-full progress-bar progress-bar-content blue'></div>
            </div>
              </div>
              <div className='border-2 border-white rounded-full w-72 h-12 bg-white flex flex-row items-center p-1 justify-between progress-bar-container' data-filled='true'>
              <div className='bg-green-600 h-9 w-9 rounded-full'></div>
                <div className='h-2 flex-1 bg-[#f5f3fb] rounded-full mx-2'>
                  <div className='h-full progress-bar progress-bar-content green'></div>
                </div>
              </div>
              <div className='border-2 border-white rounded-full w-72 h-12 bg-white flex flex-row items-center p-1 justify-between progress-bar-container' data-filled='true'>
              <div className='bg-violet-600 h-9 w-9 rounded-full'></div>
                <div className='h-2 flex-1 bg-[#f5f3fb] rounded-full mx-2'>
                  <div className='h-full progress-bar progress-bar-content violet'></div>
                </div>
              </div>
            </div>
          </div>




          <div id='team' className='flex justify-center items-center w-full h-max bg-[#ffffff] text-white flex-col md:flex-row py-0 md:py-10 px-5'>
            <div className='text-center p-4 flex flex-col w-full text-black my-10'>
              <h1 className='text-4xl font-bold p-1 lg:text-6xl'>Meet the team</h1>
              <div className='w-full h-max flex justify-center px-10 gap-6 flex-col xl:flex-row content-center items-center my-5'>
                <div className='flex gap-6 flex-col md:flex-row'>
                  <div className='border-2 border-black h-max w-40 fade-in delay-1'>
                    <Image src={'/sampleimg.png'} width={50} height={50} alt='team1' className='w-max h-max rounded-full'/>
                    <div className='p-2'>
                      <h2 className='text-2xl font-bold text-start'>Akshat</h2>
                      <p>CEO</p>
                    </div>
                  </div>
                  <div className='border-2 border-black h-max w-40 fade-in delay-2'>
                    <Image src={'/sampleimg.png'} width={50} height={50} alt='team1' className='w-max h-max rounded-full'/>
                    <div className='p-2'>
                      <h2 className='text-2xl font-bold text-start'>Yashvi</h2>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
                <div className='flex gap-6 flex-col md:flex-row'>
                  <div className='border-2 border-black h-max w-40 fade-in delay-3'>
                    <Image src={'/sampleimg.png'} width={50} height={50} alt='team1' className='w-max h-max rounded-full'/>
                    <div className='p-2'>
                      <h2 className='text-2xl font-bold text-start'>Vikrant</h2>
                      <p>CEO</p>
                    </div>
                  </div>
                  <div className='border-2 border-black h-max w-40 fade-in delay-4'>
                    <Image src={'/sampleimg.png'} width={50} height={50} alt='team1' className='w-max h-max rounded-full'/>
                    <div className='p-2'>
                      <h2 className='text-2xl font-bold text-start'>Rishi</h2>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex jusfuly-center items-center my-5'>
              {/* Additional content or elements can be added here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
