// components/Work.tsx
'use client';  // Mark this as a client-side component

import { useState } from 'react';
const Work = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Work Item 1 */}
          <div className="border-l-4 pl-4 border-blue-600">
            <h3 className="font-semibold text-lg">Frontend Developer</h3>
            <p className="text-sm">Company Name | 2021 - Present</p>
            <p>Developed modern web applications with React, Tailwind CSS, etc.</p>
          </div>
          {/* Work Item 2 */}
          <div className="border-l-4 pl-4 border-green-600">
            <h3 className="font-semibold text-lg">Backend Developer</h3>
            <p className="text-sm">Company Name | 2019 - 2021</p>
            <p>Worked on Node.js, Express.js, and MongoDB to create APIs.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Work;
  