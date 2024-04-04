import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import Home from './component/home';
import 'aos/dist/aos.css';
import MyComponent from './component/about';
import Education from './component/Education';
function App() {
  return (
    <>
      <Header />
      <Home />
      <MyComponent />
      <Education/>
    </>
  );
}

export default App;
