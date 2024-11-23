  // pages/index.tsx or app/page.tsx
'use client'; 
  import Introduction from '../../components/introduction';
  import Tablist from '../../components/tablist';

  export default function Home() {
    return (
      <div className="bg-gray-100 dark:bg-darkbg">
        {/* Introduction Section */}
        <Introduction />
  
        {/* Tablist Section */}
        <Tablist />
      </div>
    );
  }