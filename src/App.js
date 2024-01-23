import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
import AdSense from 'react-adsense';

function App() {
  const [adToShow, setAdToShow] = useState(false);
  const handleButtonClick = () => {

    setAdToShow(true);
    console.log(adToShow)

  };
  return (

    <div className="App" style={{ backgroundColor: '#FFFDBB' }}>

      <div className="left-image">
        <div className="overlay">
          <p className="random-text">High effIciency</p>
          <p className="random-texte">Inventory management software</p>
          <Button onClick={handleButtonClick} variant="contained" color='error' style={{ margin: 20, width: 170 }}>Try now</Button>
          {adToShow && (
          <AdSense.Google
            client='ca-pub-5082222307141955'
            slot='4468823467'
            style={{ width: 600, height: 500, backgroundColor: 'white' ,}}
          />
        )}
        </div>
        

      </div>
      <div className="right-image"></div>
      
        
      

    </div>


  );
}

export default App;

