import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import Home from './component/home';

import 'aos/dist/aos.css';
import TypingEffect from './component/about';
function App() {
  return (
    <>
      <Header />
      <Home />
      <TypingEffect />
    </>
  );
}

export default App;
