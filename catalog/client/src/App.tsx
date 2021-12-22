import React from 'react';
import { Categories } from './features/categories/categories';
import { Footer } from './features/components/footer/footer';
import { SLider } from './features/slider/slider';
import {Favorites} from './features/favorites/favorites';




function App() {




  return (
    <div className="App">

      <SLider />
      <div className='Main' >
      <h1 className='MenuTitle' >Categories</h1>
     
     <Categories />
    <Favorites/>
     <Footer />
      </div>
     
     
    </div>
  );
}




export default App;
