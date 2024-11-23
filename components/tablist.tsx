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
        
        {/* Tab buttons (flexbox to divide space equally) */}
        <div className="flex mb-4 bg-gray-100 rounded-xl">
          <button
            className={`flex-1 py-2 text-lg font-semibold rounded-t-lg focus:outline-none transition-all duration-200 
              ${activeTab === 'work' ? 'bg-white text-gray-400 hover:bg-white border-t-4 border-blue-500' : 'bg-transparent text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab('work')}
          >
            Work
          </button>
          <button
            className={`flex-1 py-2 text-lg font-semibold rounded-t-lg focus:outline-none transition-all duration-200 
              ${activeTab === 'education' ? 'bg-white text-gray-400 hover:bg-white border-t-4 border-blue-500' : 'bg-transparent text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button
            className={`flex-1 py-2 text-lg font-semibold rounded-t-lg focus:outline-none transition-all duration-200 
              ${activeTab === 'skills' ? 'bg-white text-gray-400 hover:bg-white border-t-4 border-blue-500' : 'bg-transparent text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-darkbg p-6 rounded-xl shadow-lg">
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
