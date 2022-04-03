import Header from "./components/Header";
import Tab from "./components/Tab";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-4xl p-5 m-auto space-y-10 dark:text-white dark:bg-dark"> 
      <Header/>
      <Tab/>
      <Footer/>
    </div>
  );
}

export default App;