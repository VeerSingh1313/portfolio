import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import Home from './component/home';
import 'aos/dist/aos.css';
// import MyComponent from './component/about';
// import Education from './component/Education';
import Contact from './component/contact';
function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <MyComponent />
      <Education /> */}
      <Contact />
    </>
  );
}

export default App;
