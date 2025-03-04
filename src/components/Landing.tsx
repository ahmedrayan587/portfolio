import { useState, useEffect } from "react";
import image from "/1669490451644.jpg";

export default function Landing() {
  const [move, setMove] = useState(false);
  const [second, setSecond] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setMove(true);
      } else {
        setMove(false);
      }
      if (window.scrollY > 900) {
        setSecond(true);
      } else {
        setSecond(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <>
        <div className={`block lg:hidden absolute -z-10 left-1/2 -translate-x-1/2 top-[170px] transition-all duration-3000 ease-in-out`}>
          <img src={image} className={`z-1 h-[200px] w-[200px] rounded-full`} alt="" />
          <span className={`absolute -z-10 bg-[#87d435] h-[250px] w-[230px] right-[100px] -top-[50px] translate-x-1/2 translate-y-[25px] animate-[BorderMove_5s_ease_2.5s_infinite_backwards]`}></span>
          <span className={`absolute -z-10 bg-linear-to-bl from-violet-500 to-emerald-500 h-[225px] w-[225px] right-[100px] -top-[50px] translate-x-1/2 translate-y-[37.5px] animate-[BorderMove_5s_ease_infinite_forwards]`}></span>
          <span className={`absolute -z-10 bg-linear-65 from-purple-500 to-teal-500 h-[205px] w-[205px] right-[100px] -top-[50px] translate-x-1/2 translate-y-[40px] animate-[BorderMove_5s_ease_infinite_backwards]`}></span>
        </div>
      </>
      <span className={`hidden lg:block absolute bg-[#87d43565] -z-20 animate-[FirstBackgroundMove_5s_ease_forwards]`}></span>
      {move&&<span className={`hidden lg:block absolute bg-[#87d43565] -z-20 animate-[SecondBackgroundMove_2s_ease_0.2s_forwards]`}></span>}
      <div className={`hidden lg:block ${second?'opacity-0':'opacity-100'} fixed -z-10 right-[200px] top-[200px] transition-all duration-3000 ease-in-out ${move ? 'xl:-translate-x-[300%] lg:-translate-x-[500px]' : 'xl:translate-x-0 lg:translate-x-1/2'}`}>
        <img src={image} className={`z-1 h-[300px] w-[300px] rounded-full`} alt="" />
        <span className={`absolute -z-10 bg-[#87d435] h-[350px] w-[330px] right-[150px] -top-[50px] translate-x-1/2 translate-y-[25px] animate-[BorderMove_5s_ease_2.5s_infinite_backwards]`}></span>
        <span className={`absolute -z-10 bg-linear-to-bl from-violet-500 to-emerald-500 h-[325px] w-[325px] right-[150px] -top-[50px] translate-x-1/2 translate-y-[37.5px] animate-[BorderMove_5s_ease_infinite_forwards]`}></span>
        <span className={`absolute -z-10 bg-linear-65 from-purple-500 to-teal-500 h-[305px] w-[305px] right-[150px] -top-[50px] translate-x-1/2 translate-y-[40px] animate-[BorderMove_5s_ease_infinite_backwards]`}></span>
      </div>
    </>
  );
}