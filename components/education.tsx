// components/Education.tsx
'use client';  // Mark this as a client-side component

import { useState } from 'react';
const Education = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 pl-4 border-blue-600">
            <h3 className="font-semibold text-lg">Bachelor's in Computer Science</h3>
            <p className="text-sm">University Name | 2016 - 2020</p>
          </div>
          <div className="border-l-4 pl-4 border-green-600">
            <h3 className="font-semibold text-lg">Diploma in Web Development</h3>
            <p className="text-sm">Institute Name | 2014 - 2016</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Education;
  