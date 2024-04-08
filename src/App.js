import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import Home from './component/home';
import 'aos/dist/aos.css';
import Contact from './component/contact';
import Skill from './component/skill';
// import Project from './component/project';
function App() {
  return (
    <>
      <Header />
      <Home />
      <Skill />
      {/* <Project /> */}
      <Contact />
    </>
  );
}

export default App;
