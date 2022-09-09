import React, { useState } from 'react';
import people from './data';

const log = console.log

function getRandomNumber(){
  return Math.floor(Math.random() * 4)
}

const Review = () => {
  const [order, setOrder] = useState(getRandomNumber())

  function handleClick(e) {
    const isLeft = e.target.classList.contains('fa-angle-left')
    if (isLeft) {
      setOrder(prevOrder => prevOrder == 0 ? 3 : prevOrder - 1)
    }else{
      setOrder(prevOrder => prevOrder == 3 ? 0 : prevOrder + 1)
    }
  }

  function handleClickForRandom() {
    setOrder(getRandomNumber())
  }

  return <div className='mt-16 bg-white p-8 rounded-lg shadow-xl text-center'>
    <div className='relative'>
      <div className="iconn">
       <i class="icon fa-solid fa-quote-left"></i>
      </div>
      <div className="circle"></div>
      <img className="z-10 relative w-44 h-44 mx-auto rounded-full object-cover object-center" src={people[order].image} alt="image" aria-hidden="true"/>
    </div>
    <h4 className="font-bold mt-4 mb-1">{people[order].name}</h4>
    <div className="uppercase text-primary text-sm mb-2">{people[order].job}</div>
    <p>{people[order].text}</p>
    <div className='flex gap-6 items-center justify-center text-2xl mb-2'>
      <button onClick={handleClick}><i class="fa-solid fa-angle-left text-primary"></i></button>
      <button onClick={handleClick}><i class="fa-solid fa-angle-right text-primary"></i></button>
    </div>
    <button className='text-primary bg-light px-4 py-1 rounded-lg' onClick={handleClickForRandom}>Suprise me</button>
  </div>;
};

export default Review;
