import heroImage from "./assets/heroImage.png";
import "./App.css";
import NavBar from "./components/NavBar";
import { MoveRightIcon } from "lucide-react";
import image1 from "./assets/Image 1.png";
function App() {
  return (
    <div className="w-[100vw] h-auto justify-center flex flex-col items-center">
      <NavBar />
      <div className="h-[100vh] w-[100vw] flex cover-section relative">
        <div className="w-full h-full absolute flex items-center justify-center">
          <div className="w-[90vw]">
            <div className="max-w-[600px] flex flex-col gap-6 min-w-[335px]">
              <h1 className="lg:text-7xl text-3xl font-semibold">
                DESIGINING OTHERWORLDLY EXPERIENCE
              </h1>
              <p className=" text-base">
                Join the journey to craft captivating UI/UX designs where every
                pixel narrates a story of innovation and inspiration.
              </p>
              <button className=" pt-3 pb-3 pl-6 pr-6 h-fit gap-1 font-semibold rounded-xl inline-flex bg-slate-900 text-white items-center justify-center">
                Let's Create Together <MoveRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-auto w-[90vw] glass-bg flex p-12 gap-6">
        <img src={image1} alt="" />
        <div className="flex flex-col gap-4 justify-center min-w-[300px]">
          <h1 className="text-4xl font-bold">HEY THERE</h1>
          <p className="text-2xl font-semibold">
            I'm Alex Turner, a seasoned UI/UX designer based in San Francisco,
            with over 7 years of experience shaping digital experiences.{" "}
          </p>
          <span className=" text-lg font-normal">
            I've collaborated with startups, agencies, and in-house teams,
            cultivating a design philosophy that seamlessly blends curiosity,
            empathy, and whimsy. My passion lies in transforming complex
            challenges into elegant and user-centric solutions.
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
