import Image from 'next/image';
import './globals.css';

export default function Home() {
   return (
    <div className="h-screen scrollbar scrollbar-thumb-stone-900">
      <nav className="border-b-4 h-fit text-center">
        <div className="flex justify-between h-full px-10 py-5 sm:px-20">
          <div className="flex items-center">
            <Image src={'/applelogo.png'} alt="logo" width="50" height="50" />
            <h1 className="text-2xl font-bold ml-2">Apple</h1>
          </div>
          <div className="flex items-center flex-col sm:flex-row">
            <a href="/login" className="mr-4">Login</a>
            <a href="/register" className="mr-4">Register</a>
          </div>
        </div>
      </nav>
      <main className="flex-1 overflow-auto">
        <div>
          <div className="flex justify-center items-center h-96 flex-col my-4">
            <div className="text-center p-4">
              <h1 className="text-3xl p-1 lg:text-5xl">Wanna build something with someone overseas?</h1>
              <p className="text-4xl font-bold text-wrap p-1 lg:text-6xl">Don't let distance be a problem.</p>
            </div>
            <div className="flex justify-center items-center my-5 flex-col md:flex-row">
              <input type="email" placeholder="Enter your email" className="mx-1 py-2 px-3 border-2 border-black rounded-lg"/>
              <button className="mx-1 py-2 px-3 border-2 border-black rounded-lg hover:bg-black hover:text-white mt-2 md:mt-0">Join us</button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center w-full h-max bg-[#0D6EFD] text-white flex-col md:flex-row py-0 md:py-10 px-5">
            <div className="text-center p-4">
              <h1 className="text-3xl p-1 lg:text-5xl text-wrap font-bold w-96">Collaborate and track your teams progress</h1>
            </div>
            <div className="flex justify-evenly items-center my-5 flex-col h-60">
              <div className="border-2 border-white rounded-full w-72 h-12 bg-white flex flex-row items-center p-1 justify-between">
                <div className="bg-red-600 h-9 w-9 rounded-full">
                </div>
              <div className="h-2 flex-1 bg-[#f5f3fb] rounded-full mx-2">
              <div className="h-full w-[80%] bg-red-400 rounded-full">
              </div>
              </div>
              </div>
              <div className="border-2 border-white rounded-full w-72 h-12 bg-white flex flex-row items-center p-1 justify-between">
                <div className="bg-blue-600 h-9 w-9 rounded-full">
                </div>
              <div className="h-2 flex-1 bg-[#f5f3fb] rounded-full mx-2">
              <div className="h-full w-[65%] bg-blue-400 rounded-full">
              </div>
              </div>
              </div>
              <div className="border-2 border-white rounded-full w-72 h-12 bg-white flex flex-row items-center p-1 justify-between">
                <div className="bg-green-600 h-9 w-9 rounded-full">
                </div>
              <div className="h-2 flex-1 bg-[#f5f3fb] rounded-full mx-2">
              <div className="h-full w-[56%] bg-green-400 rounded-full">
              </div>
              </div>
              </div>
              <div className="border-2 border-white rounded-full w-72 h-12 bg-white flex flex-row items-center p-1 justify-between">
                <div className="bg-violet-600 h-9 w-9 rounded-full">
                </div>
              <div className="h-2 flex-1 bg-[#f5f3fb] rounded-full mx-2">
              <div className="h-full w-[80%] bg-violet-400 rounded-full">
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <div className="flex justify-center items-center h-fit bg-[#F8F9FA]"> */}
          <div className="flex justify-center items-center w-full h-max bg-[#ffffff] text-white flex-col md:flex-row py-0 md:py-10 px-5">
            <div className="text-center p-4 flex flex-col w-full text-black my-10">
              <h1 className="text-4xl font-bold p-1 lg:text-6xl ">Meet the team</h1>
              <div className="w-full h-max flex justify-center px-10 gap-6 flex-col xl:flex-row content-center items-center my-5">
                <div className="flex gap-6 flex-col md:flex-row">
              <div className="border-2 border-black h-max w-40">
                    <Image src={'/sampleimg.png'} alt="team1" className="w-max h-max rounded-full"/>
                    <div className="p-2">
                      <h2 className="text-2xl font-bold text-start">John Doe</h2>
                      <p>CEO</p>
                    </div>
                  </div>
                  <div className="border-2 border-black h-max w-40">
                    <Image src={'/sampleimg.png'} alt="team1" className="w-max h-max rounded-full"/>
                    <div className="p-2">
                      <h2 className="text-2xl font-bold text-start">John Doe</h2>
                      <p>CEO</p>
                    </div>
                  </div>
                  </div>
                  <div className="flex gap-6 flex-col md:flex-row">
                  <div className="border-2 border-black h-max w-40">
                    <Image src={'/sampleimg.png'} alt="team1" className="w-max h-max rounded-full"/>
                    <div className="p-2">
                      <h2 className="text-2xl font-bold text-start">John Doe</h2>
                      <p>CEO</p>
                    </div>
                  </div>
                  <div className="border-2 border-black h-max w-40">
                    <Image src={'/sampleimg.png'} alt="team1" className="w-max h-max rounded-full"/>
                    <div className="p-2">
                      <h2 className="text-2xl font-bold text-start">John Doe</h2>
                      <p>CEO</p>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
            <div className="flex justify-center items-center my-5">
              
            </div>
          </div>
        </div>
      </main>
    </div>
   );
}
