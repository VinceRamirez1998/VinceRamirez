'use client';

import { useState } from 'react';
import Work from '../components/work';
import Education from '../components/education';
import Skills from '../components/skills';

const Tablist = () => {
  const [activeTab, setActiveTab] = useState('work'); // Default active tab is 'work'

  return (
    <section className="py-6 px-6 bg-white dark:bg-darkbg text-gray-900 dark:text-white">
      {/* Wrapper for center alignment */}
      <div className="max-w-[var(--customwidth)] w-full mx-auto">
        
        {/* Tab buttons */}
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className={`py-2 px-4 text-lg font-semibold rounded-t-lg focus:outline-none transition-all duration-200 
              ${activeTab === 'work' ? 'bg-gray-400 text-white' : 'bg-transparent text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab('work')}
          >
            Work
          </button>
          <button
            className={`py-2 px-4 text-lg font-semibold rounded-t-lg focus:outline-none transition-all duration-200 
              ${activeTab === 'education' ? 'bg-gray-400 text-white' : 'bg-transparent text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button
            className={`py-2 px-4 text-lg font-semibold rounded-t-lg focus:outline-none transition-all duration-200 
              ${activeTab === 'skills' ? 'bg-gray-400 text-white' : 'bg-transparent text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-darkbg p-6 rounded-lg shadow-lg">
          {/* Each tab content */}
          {activeTab === 'work' && <Work />}
          {activeTab === 'education' && <Education />}
          {activeTab === 'skills' && <Skills />}
        </div>
      </div>
    </section>
  );
};

export default Tablist;
