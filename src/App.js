import './style.css';
import Header from './components/header/Header';
import Banner from './components/header/Banner';
import DisplayCard from './components/body/DisplayCard';
import MyResume from './components/body/MyResume';
import ContactMe from './components/body/ContactMe';
import Footer from './components/Footer/Footer';

function App() {

  
  return (
    <div>
      <Header
        section='home'
      />
      <Banner />
      <DisplayCard
        text='Visit my portfolio and keep your feedback'
        title='My Portfolio'
        section='portfolio'
      />
      <MyResume
        section='resume'
      />
      <DisplayCard
        text='Visit my blog and keep your feedback'
        title='My Blog'
        section='blog'
      />

      <ContactMe
        section='contact'
      />
      <Footer />
    </div>
  );
}

export default App;
