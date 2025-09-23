import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout({ children, onCategorySelect }) {
  return (
    <div className="idb-layout">
      <header>
        <Navbar onCategorySelect={onCategorySelect} />
      </header>
      <main className="idb-main-content bg-body-secondary">
        {children}
      </main>
      <Footer />
    </div>
  );
}