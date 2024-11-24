'use client';

import { useState } from 'react';

const TabList = () => {
  const [activeTab, setActiveTab] = useState('Experience');

  const tabs = [
    { name: 'Experience', content: 'Here is the content for Experience.' },
    { name: 'Education', content: 'Here is the content for Education.' },
    { name: 'Skills', content: 'Here is the content for Skills.' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 bg:white dark:bg-darkbg ">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex-1 py-2 px-4 text-center font-medium text-sm sm:text-base border-b-2 
              ${
                activeTab === tab.name
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-blue-500 hover:border-blue-500'
              }
            `}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <div key={tab.name} className="text-gray-700 dark:text-gray-300">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TabList;
