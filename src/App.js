import '../src/css/App.css';
import Header from './components/Header'
import Footer from './components/Footer'
// import Main from './components/Main'
import Switcher from './components/Switcher'

function App() {
  return (
    <div>
      <Header />
      {/* <Main /> */}
      <Switcher />
      <Footer />
    </div>
  );
}

export default App;
