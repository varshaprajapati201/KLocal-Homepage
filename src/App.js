
import './App.css';
import { CardSection } from './pages/card-section';

import { Header } from './pages/components/header';
import { Hero } from './pages/components/hero';

function App() {
  return (
    <div >

    <Header fixed="top"/>
    <Hero />
      <CardSection />
    </div>
  );
}

export default App;
