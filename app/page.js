'use client';
import { useState } from 'react';
import {Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import './globals.css';
import { signInWithGoogle, logout } from '../firebaseConfig';
import confetti from 'canvas-confetti';
import './fontawesome';

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
            <h1 className='text-2xl font-bold ml-2'><span className='text-red-600'>Co</span><span>Buildr.</span></h1>
          </div>
          <div className='flex items-center flex-col sm:flex-row'>
            <a href='#team' smooth={true} duration={500} className='mr-4'>Team</a>
        {/* <a className='mr-4'>
          Contact
        </a> */}
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
                {isJoined ? 'Joined' : 'Join our waitlist'}
              </button>
            </div>
            <div className='block text-center text-wrap mx-10 text-transparent bg-gradient-to-r from-red-400 to-red-900 bg-clip-text font-bold'>We are currently in development phase so it is recommended that you use chrome or safari for joining the waitlist.</div>
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
        {/* First Section */}
        <div className='flex flex-col md:flex-row justify-between text-center items-center w-full h-auto bg-[#c50707] text-white py-10 lg:py-20 sm:px-20 px-5'>
  <div className='flex justify-center items-center w-max max-w-6xl mx-auto'>
    <h1 className='text-3xl px-6 lg:text-5xl text-wrap text-center font-bold w-max'>
      Create an account
    </h1>
  </div>
  <div className='flex flex-col justify-center items-center w-full max-w-6xl mt-5 lg:mt-0'>
    <div className="w-full h-fit bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 text-black">
      <div className="border border-1 rounded-md p-5 flex flex-col justify-between">
        <h1 className="text-center text-2xl font-bold text-transparent bg-gradient-to-r from-red-300 to-red-400 bg-clip-text">Beginner</h1>
        <p className="text-wrap">Begin by making your first project solo or with someone of your level.</p>
      </div>
      <div className="border border-1 rounded-md p-5 flex flex-col justify-between">
        <h1 className="text-center text-2xl font-bold text-transparent bg-gradient-to-r from-red-400 to-red-700 bg-clip-text">Intermediate</h1>
        <p className="text-wrap">Make projects to climb up levels by expanding your knowledge and building new projects.</p>
      </div>
      <div className="border border-1 rounded-md p-5 flex flex-col justify-between">
        <h1 className="text-center text-2xl font-bold text-transparent bg-gradient-to-r from-red-700 to-red-800 bg-clip-text">Pro</h1>
        <p className="text-wrap">Amazing Captain! Continue to grow in this field by building more projects and helping devs at junior levels.</p>
      </div>
    </div>
  </div>
</div>
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
          <div className='mt-4 flex space-x-1'>
            <div className='bg-gray-200 text-gray-700 rounded-full flex px-1 py-1 text-xs'>HTML</div>
            <div className='bg-gray-200 text-gray-700 rounded-full px-1 py-1 text-xs'>CSS</div>
            <div className='bg-gray-200 text-gray-700 rounded-full px-1 py-1 text-xs'>JavaScript</div>
          </div>
          <button className='absolute bottom-5 right-5 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600'>
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
        <div className='flex flex-col md:flex-row justify-center items-center w-full h-auto bg-[#0D6EFD] text-white py-10 px-5'>
  <div className='flex justify-center items-center  text-center md:text-right'>
    <h1 className='text-3xl text-center lg:text-5xl font-bold xl:w-4/5'>
      Collaborate and track your team's progress
    </h1>
  </div>
  <div className='flex flex-col justify-center items-center md:w-1/2 my-5'>
    <div className='border-2 border-white rounded-full w-72 h-12 bg-white flex flex-row items-center p-1 mb-4 progress-bar-container' data-filled='true'>
      <div className='bg-red-600 h-9 w-9 rounded-full'></div>
      <div className='h-2 flex-1 bg-[#f5f3fb] rounded-full mx-2'>
        <div className='h-full progress-bar progress-bar-content red'></div>
      </div>
    </div>
    <div className='border-2 border-white rounded-full w-72 h-12 bg-white flex flex-row items-center p-1 mb-4 progress-bar-container' data-filled='true'>
      <div className='bg-blue-600 h-9 w-9 rounded-full'></div>
      <div className='h-2 flex-1 bg-[#f5f3fb] rounded-full mx-2'>
        <div className='h-full progress-bar progress-bar-content blue'></div>
      </div>
    </div>
    <div className='border-2 border-white rounded-full w-72 h-12 bg-white flex flex-row items-center p-1 mb-4 progress-bar-container' data-filled='true'>
      <div className='bg-green-600 h-9 w-9 rounded-full'></div>
      <div className='h-2 flex-1 bg-[#f5f3fb] rounded-full mx-2'>
        <div className='h-full progress-bar progress-bar-content green'></div>
      </div>
    </div>
    <div className='border-2 border-white rounded-full w-72 h-12 bg-white flex flex-row items-center p-1 mb-4 progress-bar-container' data-filled='true'>
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
                  <div className='border-2 border-black h-max w-64 fade-in delay-1 rounded-xl' >
                    <Image src='/image22.jpg' width={1000} height={1000} alt='team1' className='w-full rounded-t-xl'/>
                    <div className='p-2'>
                      <h2 className='text-2xl font-bold text-center'>Akshat Singh</h2>
                      <p className='text-center'>Frontend Developer</p>
                      <div className='flex gap-2 justify-center'>
                      <a className='hover:border-black border-2 border-transparent rounded-md px-1 pt-1' href="https://www.linkedin.com/in/akshat-singh-5a2887200/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" color="#000000" />
                      </a>
                      <a className='hover:border-black border-2 border-transparent rounded-md px-1 pt-1' href="https://github.com/Akshatcodesyou" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} size="2x" color="#000000" />
                      </a>
                      </div>
                    </div>
                  </div>
                  <div className='border-2 border-black h-max w-64 fade-in delay-1 rounded-xl'>
                    <Image src={'/image23.jpg'} width={1000} height={1000} alt='team1' className='w-full rounded-t-xl'/>
                    <div className='p-2'>
                      <h2 className='text-2xl font-bold text-center'>Yashvi Sharma</h2>
                      <p className='text-center'>Frontend and Database</p>
                      <div className='flex gap-2 justify-center'>
                      <a className='hover:border-black border-2 border-transparent rounded-md px-1 pt-1' href="https://www.linkedin.com/in/yashvisharma21/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" color="#000000" />
                      </a>
                      <a className='hover:border-black border-2 border-transparent rounded-md px-1 pt-1' href="https://github.com/yashvisharma1204" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} size="2x" color="#000000" />
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex gap-6 flex-col md:flex-row'>
                <div className='border-2 border-black h-max w-64 fade-in delay-1 rounded-xl'>
                    <Image src={'/image25.jpg'} width={1000} height={1000} alt='team1' className='w-full rounded-t-xl'/>
                    <div className='p-2'>
                      <h2 className='text-2xl font-bold text-center'>Vikrant Mohan</h2>
                      <p className='text-center'>UI & UX Designer</p>
                      <div className='flex gap-2 justify-center'>
                      <a className='hover:border-black border-2 border-transparent rounded-md px-1 pt-1' href="https://www.linkedin.com/in/vikrant-mohan-a34a00219/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" color="#000000" />
                      </a>
                      <a className='hover:border-black border-2 border-transparent rounded-md px-1 pt-1' href="https://github.com/Vikrant-Mohan-Dev" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} size="2x" color="#000000" />
                      </a>
                      </div>
                    </div>
                  </div>
                  <div className='border-2 border-black h-max w-64 fade-in delay-1 rounded-xl'>
                    <Image src={'/image24.jpg'} width={1000} height={1000} alt='team1' className='w-full rounded-t-xl'/>
                    <div className='p-2'>
                      <h2 className='text-2xl font-bold text-center'>Rishi Upadhyay</h2>
                      <p className='text-center'>Backend Developer</p>
                      <div className='flex gap-2 justify-center'>
                      <a className='hover:border-black border-2 border-transparent rounded-md px-1 pt-1' href="https://www.linkedin.com/in/rishiupadhyay23/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" color="#000000" />
                      </a>
                      <a className='hover:border-black border-2 border-transparent rounded-md px-1 pt-1' href="https://github.com/rishiupadhyaygithub" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} size="2x" color="#000000" />
                      </a>
                      </div>
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
