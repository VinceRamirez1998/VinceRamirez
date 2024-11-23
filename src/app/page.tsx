  // pages/index.tsx or app/page.tsx

  import Introduction from '../../components/introduction';

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-darkbg">
      {/* Introduction Section */}
      <Introduction />

      {/* Tablist Section */}
    </div>
  );
}