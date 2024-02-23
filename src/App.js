import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar.js'
import SlideShow from './SlideShow.js';
import FirstBody from './FirstBody.js';


export default function App() {
  return (
    <div>
      <NavigationBar />
      <SlideShow/>
      <FirstBody/>
    </div>

  );
}

