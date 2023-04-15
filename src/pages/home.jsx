import '../styles/home.css';
import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;