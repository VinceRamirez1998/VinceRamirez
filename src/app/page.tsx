  // pages/index.tsx or app/page.tsx
  import './globals.css';
  import Introduction from '../../components/introduction';
  import TabList from'../../components/tablist';
  import Preloader from '../../components/preloader';


  export default function Home() {
    return (
      <div className=''>
       <Preloader className='font-serif' />
        <Introduction/>
        <TabList />
        {/* Other sections of your page */}
      </div>
    );
  }
