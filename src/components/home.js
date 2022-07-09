import '../App.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import Header from './Header';
import Services from './Services';
import Pricing from './Pricing';
import Rooms from './Rooms';
import Footer from './Footer';




function App() {
  return (
    <>
     
    <Navbar />
    <Header />
    <Services />
    <Pricing />
    <Rooms />
    <Footer />

  
    

    
    </>
  );
}

export default App;