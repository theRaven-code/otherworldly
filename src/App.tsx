import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { MoveRightIcon } from "lucide-react";
import image1 from "./assets/Image 1.jpg";

interface Card {
  imageSrc: string;
  title: string;
  description: string;
}

const cardList: Card[] = [
  {
    imageSrc: "https://source.unsplash.com/random/150x150?sig=1",
    title: "SAMPLE 1",
    description: "Some description 1",
  },
  {
    imageSrc: "https://source.unsplash.com/random/150x150?sig=2",
    title: "SAMPLE 2",
    description: "Some description 2",
  },
  {
    imageSrc: "https://source.unsplash.com/random/150x150?sig=3",
    title: "SAMPLE 3",
    description: "Some description 3",
  },
  {
    imageSrc: "https://source.unsplash.com/random/150x150?sig=4",
    title: "SAMPLE 4",
    description: "Some description 4",
  },
  {
    imageSrc: "https://source.unsplash.com/random/150x150?sig=5",
    title: "SAMPLE 5",
    description: "Some description 5",
  },
  {
    imageSrc: "https://source.unsplash.com/random/150x150?sig=6",
    title: "SAMPLE 6",
    description: "Some description 6",
  },
  {
    imageSrc: "https://source.unsplash.com/random/150x150?sig=7",
    title: "SAMPLE 7",
    description: "Some description 7",
  },
  {
    imageSrc: "https://source.unsplash.com/random/150x150?sig=8",
    title: "SAMPLE 8",
    description: "Some description 8",
  },
  {
    imageSrc: "https://source.unsplash.com/random/150x150?sig=9",
    title: "SAMPLE 9",
    description: "Some description 9",
  },
  {
    imageSrc: "https://source.unsplash.com/random/150x150?sig=10",
    title: "SAMPLE 10",
    description: "Some description 10",
  },
];


function App() {
  return (
    <div className="w-[100vw] h-auto flex flex-col items-center">
      <NavBar />
      <section className="min-h-screen w-[100vw] flex cover-section items-center justify-center" id="#">
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
      <section className="w-[100vw] overflow-hidden second-section flex justify-center" id="about">
        <div className="w-[90vw] flex p-12 justify-around glass-bg h-[100vh]">
          <img src={image1} alt="" className="w-auto h-full border-4 border-" />
          <div className=" relative flex flex-col gap-4                                                                               justify-center w-[500px]">
            <h1 className="text-4xl font-bold">HEY THERE</h1>
            <p className="text-2xl font-semibold">
              I'm Saravanan ( Ye Htut Aung ), a seasoned React Developer based
              in Bangkok, with over 4 years of experience in contributing
              effectively in various digital solutions.
            </p>
            <span className="text-lg font-normal">
              I've collaborated with startups, coporations, and in-house teams,
              cultivating a digital solution that seamlessly blends curiosity,
              empathy, and whimsy. My passion lies in transforming complex
              challenges into elegant and user-centric solutions.
            </span>
          </div>
        </div>
        <div className="absolute left-4 top-20 z-50"></div>
      </section>
      <section className="w-[90vw] h-[55vh] p-4 glass-bg" id="projects">
        <h1 className=" font-bold text-3xl">PROJECTS</h1>
        <div className="max-w-full h-[50vh] mt-4">
          <div className="overflow-x-auto flex-nowrap flex flex-row gap-8">
            {cardList.map((card) => {
              return (
                <div>
                  <img
                    className="min-w-[300px] h-[300px]"
                    src={card.imageSrc}
                  ></img>
                  <h1>{card.title}</h1>
                  <p>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="w-[90vw] h-[100vh] p-4">
        <h1 className=" font-bold text-3xl">EXPERIENCE</h1>

      </section>
    </div>
  );
}

export default App;
