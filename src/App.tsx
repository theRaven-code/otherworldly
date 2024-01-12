import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { MoveRightIcon } from "lucide-react";
import image1 from "./assets/Image 1.png";

function App() {
  return (
    <div className="w-[100vw] h-auto flex flex-col items-center">
      <NavBar />
      <section className="min-h-screen w-[100vw] flex cover-section items-center justify-center">
        <div className="w-[90vw] flex">
          <div className="max-w-[600px] flex flex-col gap-6 min-w-[335px]">
            <h1 className="lg:text-7xl text-3xl font-semibold">
              DESIGNING OTHERWORLDLY EXPERIENCES
            </h1>
            <p className="text-base">
              Join the journey to craft captivating UI/UX designs where every
              pixel narrates a story of innovation and inspiration.
            </p>
            <button className="pt-3 pb-3 pl-6 pr-6 h-fit gap-1 font-semibold rounded-xl inline-flex bg-slate-900 text-white items-center justify-center">
              Let's Create Together <MoveRightIcon />
            </button>
          </div>
        </div>
      </section>
      <section className="top-[10vh] w-[100vw] glass-bg flex p-12 justify-around overflow-hidden">
        <img src={image1} alt="" />
        <div className="flex flex-col gap-4 justify-center w-[500px] itemss">
          <h1 className="text-4xl font-bold">HEY THERE</h1>
          <p className="text-2xl font-semibold">
            I'm Alex Turner, a seasoned UI/UX designer based in San Francisco,
            with over 7 years of experience shaping digital experiences.
          </p>
          <span className="text-lg font-normal">
            I've collaborated with startups, agencies, and in-house teams,
            cultivating a design philosophy that seamlessly blends curiosity,
            empathy, and whimsy. My passion lies in transforming complex
            challenges into elegant and user-centric solutions.
          </span>
        </div>
      </section>
      {/* Additional sections or content as needed */}
    </div>
  );
}

export default App;
