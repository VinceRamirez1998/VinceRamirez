  // pages/index.tsx or app/page.tsx
  'use client';
  import '../globals.css';
  import Introduction from '../../../components/introduction';
  import TabList from'../../../components/tablist';
  import Preloader from '../../../components/preloader';
  import Header from '../../../components/header';


  export default function Home() {
    return (
      <div className=''>
        <Header/>
       <Preloader className='font-serif' />
        <Introduction/>
        <TabList />
        {/* Other sections of your page */}
      </div>
    );
  }
