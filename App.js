import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './GlobalContext'; // Import the GlobalProvider
import TshirtsAndTops from './TshirtsandTops';
import WhatsNew from './Whatsnew';

import TShirts from './Tshirts';
import Tops from './Tops';
import CropTops from './Croptops';
import Jeans from './Jeans';
import Skirts from './Skirts';
import Dresses from './Dresses';
import Cords from './Cords';
import Jumpsuits from './Jumpsuits';

import KurtaSets from './Kurtaset';
import Sarees from './Sarees';
import Anarkali from './Anarkali';
import Lakhnavi from './Lakhnavi';
import IndoWestern from './Indowestern';
import Lehngas from './Lehngas';

import Flats from './Flats';
import Heels from './Heels';
import Sneakers from './Sneakers';
import Sandals from './Sandals';
import Crocs from './Crocs';
import Boots from './Boots';

import Watches from './Watches';
import Beauty from './Beauty';
import Sunglasses from './Sunglasses';
import Pajamas from './Pajamas';
import Profile from './Profile';
import EmptyWishlist from './Emptywishlist';
import Wishlist from './Wishlist';
import Cart from './Cart';
import EmptyCart from './EmptyCart';
import Navbar from './Navbar';
import Footer from './footer';
import Login from './Login'; // Import Login component
import Signup from './Signup'; // Import Signup component

function App() {
  return (
    <GlobalProvider> {/* Wrap the application with GlobalProvider */}
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<WhatsNew />} />
            <Route path="/tshirts-and-tops" element={<TshirtsAndTops />} />
            <Route path="/whats-new" element={<WhatsNew />} />
            
            <Route path="/Western-wear/tshirts" element={<TShirts />} />
            <Route path="/Western-wear/tops" element={<Tops />} />
            <Route path="/Western-wear/crop-tops" element={<CropTops />} />
            <Route path="/Western-wear/jeans" element={<Jeans />} />
            <Route path="/Western-wear/skirts" element={<Skirts />} />
            <Route path="/Western-wear/dresses" element={<Dresses />} />
            <Route path="/Western-wear/cords" element={<Cords />} />
            <Route path="/Western-wear/jumpsuits" element={<Jumpsuits/>} />
            
            <Route path="/indian-wear/kurta-set" element={<KurtaSets/>}/>
            <Route path="/indian-wear/sarees" element={<Sarees/>}/>
            <Route path="/indian-wear/anarkali" element={<Anarkali/>}/>
            <Route path="/indian-wear/lakhnavi" element={<Lakhnavi/>}/>
            <Route path="/indian-wear/indo-western" element={<IndoWestern/>}/>
            <Route path="/indian-wear/lehngas" element={<Lehngas/>}/>
            
            <Route path="/foot-wear/flats" element={<Flats />} />
            <Route path="/foot-wear/heels" element={<Heels />} />
            <Route path="/foot-wear/sneakers" element={<Sneakers />} />
            <Route path="/foot-wear/sandals" element={<Sandals />} />
            <Route path="/foot-wear/crocs" element={<Crocs />} />
            <Route path="/foot-wear/boots" element={<Boots />} />
            <Route path="/more/watches" element={<Watches />} />
            <Route path="/more/beauty" element={<Beauty />} />
            <Route path="/more/sunglasses" element={<Sunglasses />} />
            <Route path="/more/pajamas" element={<Pajamas/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/empty-wishlist" element={<EmptyWishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/empty-cart" element={<EmptyCart/>}/>
            <Route path="/login" element={<Login />} /> {/* Add route for login */}
            <Route path="/signup" element={<Signup />} /> {/* Add route for signup */}
            
          </Routes>
          <Footer />
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
