import React from 'react';
import Aruba3 from '../Media/Aruba3.jpeg';
import FrenchPoly1 from '../Media/FrenchPoly1.jpeg';
import FrenchPoly2 from '../Media/FrenchPoly2.jpeg';
import Maldives2 from '../Media/Maldives2.jpeg';
import Tahiti from '../Media/Tahiti.jpeg';
import Tahiti2 from '../Media/Tahiti2.jpeg';



 const Destinations = () => {
  return (
  

  <div className="max-w-1240 mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">All inclusive Resorts</h1>
        <p className="py-4 text-lg text-gray-500 mb-8">On the Caribbean's Most Beautiful White Sand Beaches</p>
        <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
          <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={Maldives2} alt="" />
          <img className="w-full h-full object-cover" src={Tahiti} alt="/" />
          <img className="w-full h-full object-cover" src={FrenchPoly1} alt="/" />
          <img className="w-full h-full object-cover" src={FrenchPoly2} alt="/" />
          <img className="w-full h-full object-cover" src={Aruba3} alt="/" />
      </div>
   </div>
  );
};

export default Destinations;
