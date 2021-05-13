import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import Landscape from './Pages/Landscape'
import Wildlife from './Pages/Wildlife';
import Portrait from './Pages/Portrait';
import Nav from './Components/Nav'
import React, {useState} from 'react'
import Footer from './Components/Footer';

function App() {

  const [categories] = useState([
    {
      name: 'Home'
    },
    {
      name: 'Landscape'
    },
    {
      name: 'Wildlife'
    },
    {
      name: 'Portrait'
    },
    {
      name: 'About'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Store'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);


  const renderPage = () => {
    switch(currentCategory.name) {
      case 'Home':
        return <div>
            <Nav 
              categories={categories}
              setCurrentCategory={setCurrentCategory}
              currentCategory={currentCategory}
            />
            <Home />
            <Footer />
          </div>
      case 'Landscape':
        return <div>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Nav>
            <Landscape />
            <Footer />
          </div>
      case 'Wildlife':
        return <div>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Nav>
            <Wildlife />
            <Footer />
          </div>
      case 'Portrait':
        return <div>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Nav>
            <Portrait />
            <Footer />
          </div>
      default:
        return
    }
  };


  return (
    <div>
      <div>
        {renderPage(currentCategory)}
      </div>
    </div>
  );
}

export default App;
