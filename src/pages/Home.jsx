import { Link } from "react-router-dom";
import BackgroundHome from '../components/BackgroundHome';

function Home() {
  return (
    <>
      <div className="relative w-full h-[100vh] flex justify-center items-center">
      <BackgroundHome />
        <div className="home-main bg-[#FFF1E6] w-[80%] md:w-[50%] md:w-max-[683px] h-60 flex justify-center items-center flex-col gap-14">
          <h1 className="w-[80%] font-semibold text-sm md:text-lg uppercase">Please answer quick questions to enhence our services.</h1>
          <Link to="/ques/1" className="animated-button1 text-sm py-2 px-4 md:py-[10px] md:px-[20px] md:text-lg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Start survey
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home