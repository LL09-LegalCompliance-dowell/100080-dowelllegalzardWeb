import React,{ useState,useEffect } from 'react';

const ProgressBar = ({ licenses }) => {
    const [progressCount, setProgressCount]  = useState(0);
    const maxCount = licenses?.percentage_of_compatibility || 90;

    useEffect(()=>{
        const progressTimer = setInterval(()=>{
            setProgressCount(prev =>{
                if(prev >= maxCount){
                    clearInterval(progressTimer);
                    return prev
                }
                return prev + 1
            })
        }, 100);
       
        return()=>{
            clearInterval(progressTimer)
        }
    },[maxCount]);


  return (
        <div>
            <div className='flex items-center gap-3'>
                <div className='w-[100%] h-6 bg-[#C4C4C4] rounded-full my-5'>
                    <div className={`w-[${progressCount}%] h-6 bg-gradient-to-r from-[#078F04] via-[#FFC000] to-[#FF0000] rounded-full`}></div>
                </div>
                <span className='text-[#FF0000] font-bold'>{progressCount}%</span>
            </div>
            <h4 className={`${progressCount < 50 ? 'text-[#FF0000]' : 'text-[#078F04]'} font-bold text-sm`}>
                {progressCount < 50 ? 'Not compatible and cannot be used together in a project.' : 'Highly Recommended to be use together in a project'}
            </h4>
        </div>
  )
}

export default ProgressBar