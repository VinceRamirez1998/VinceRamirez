  // pages/index.tsx or app/page.tsx
  import './globals.css';
  import Introduction from '../../components/introduction';
  import TabList from'../../components/tablist';


  export default function Home() {
    return (
      <div className=''>
        <Introduction/>
        <TabList />
        {/* Other sections of your page */}
      </div>
    );
  }
