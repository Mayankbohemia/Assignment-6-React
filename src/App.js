import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Content from './Components/NavBar/COntent/Content';
import Footer from './Components/Footer/Footer';

function App() {
  const imgArr = ['https://cdn-icons-png.flaticon.com/128/407/407016.png','https://cdn-icons-png.flaticon.com/256/9394/9394521.png','https://cdn-icons-png.flaticon.com/256/7648/7648276.png']
  return (
    <div className="App">
     
      <NavBar/>
      <Content/>
      <Footer images={imgArr}/>

    </div>
  );
}

export default App;
