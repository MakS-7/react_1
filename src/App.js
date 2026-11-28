import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Factorial from "./components/Factorial";
import Power from "./components/Power";
import Fibonacci from "./components/Fibonacci";
import Footer from './components/Footer'

function App()
{
    let menu =
    {
            "Главная"       :   "/index",
            "Магазин"       :   "/shop",
            "Новости"       :   "/news",
            "О компании"    :   "/about",
            "Контакты"      :   "/contacts"
    }
    return (
        <div className="App">
            <Header />
            <Nav menu={ menu } />
            <Main />
            <div className="app">
                <h1 className="app-title">Математические калькуляторы</h1>
                <div className="grid">
                    <Factorial />
                    <Power />
                    <Fibonacci />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
