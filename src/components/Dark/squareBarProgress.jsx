"use client"
import '../../styles/dark.scss'
import { useEffect, useRef, useState } from "react";

const SquareBarProgress = ({barWidth=10, slideChangeHandler, activeSlideIndex}) => {
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)

  useEffect(()=>{
    intervalRef.current = setInterval(()=> {
      setProgress(prevProgress => {
        if(prevProgress>=400) {
          return 0;
        }
        return prevProgress + 1
      })
    }, 50)

    return () => clearInterval(intervalRef.current);
  }, [])

  useEffect(() => {
    if(progress>399){
      slideChangeHandler();
    }
  }, [progress, slideChangeHandler])

  useEffect(() => {
    setProgress(0)
  }, [activeSlideIndex])

  function getProgress(min, max){
    if(progress > min && progress <= max){
      return progress - min;
    } 
    else if(progress>max) return 100;
    else if(progress < min) return 0;
    else 0;
  }

  return (
    <div className="outer-square">
      <div className="progress-bar top">
        <span style={{width: `${getProgress(0, 100)}%`}}></span>
      </div>

      <div className="progress-bar right">
        <span style={{width: `${getProgress(100, 200)}%`}}></span>
      </div>

      <div className="progress-bar bottom">
        <span style={{width: `${getProgress(200, 300)}%`}}></span>
      </div>

      <div className="progress-bar left">
        <span style={{width: `${getProgress(300, 400)}%`}}></span>
      </div>
    </div>
  );
}
 
export default SquareBarProgress;