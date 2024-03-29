import React from 'react'
import { Card } from './Card';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';

export const Testimonials = ({reviews}) => {
    // let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler(){
        if(index - 1 < 0){ //0th index
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index - 1);
        }
    }

    function rightShiftHandler(){
        if(index + 1 >= reviews.length){ //last index
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function surpriseHandler(){ //random data
        let randomIndex = Math.floor(Math.random()* reviews.length);
        setIndex(randomIndex);
    }

    return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-200 hover:shadow-xl'>
        <Card review = {reviews[index]}/>

        <div className='flex text-3xl mt-5 gap-3 text-violet-400 mx-auto font-bold'>
            <button 
            onClick={leftShiftHandler}
            className='cursor-pointer hover:text-violet-600'>
                <IoIosArrowBack />
            </button>
            <button 
            onClick={rightShiftHandler}
            className='cursor-pointer hover:text-violet-600'>
                <IoIosArrowForward />
            </button>
        </div>

        <div>
            <button 
            onClick={surpriseHandler}
            className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 
            cursor-pointer px-10 py-2 mt-3 rounded-md font-bold text-lg text-white'>
                Surprise Me 
            </button>
        </div>
    </div>
    )
}
