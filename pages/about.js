import Navbar from "./components/LandingPage/Navbar";
import Head from "next/head";

const About = () => {
  return (
    <div className='px-20 mx-20'>
      <Head>
        <title>About</title>
        <meta />
      </Head>

      <Navbar />
      <div className='mt-20'>
        <div className='font-bold text-7xl pr-30 .leading-relaxed'>
          Creating your Node-Based Contents in just Seconds with Mapify.
        </div>
        <div className='grid mt-40 grid-cols-2'>
          <div>1</div>
          <div className=' flex justify-end pr-20 text-3xl'>
            <p>
              <span className='font-bold'>Create</span>,{" "}
              <span className='font-bold'>Embed</span> or{" "}
              <span className='font-bold'>Share</span> with the comunity with
              just simple clicks.
            </p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-20 w-20'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
        <div className='grid mt-40 grid-cols-2'>
          <div className=' flex justify-end pr-20 text-3xl'>
            <p>
              <span className='font-bold'>Desing</span> your nodes with
              <span className='font-bold'>Tailwind</span>css Classes.
            </p>
          </div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
};
export default About;
