import React, {Component} from 'react'; 
import "./components/HomePage/HomePage.css"
import "./components/components.css";
import "./components/HomePage/OwlCarousel.css";
import './components/HomePage/Footer/Footer.css';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Routes from './Routes';
import Footer from './components/HomePage/Footer/Footer';

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <section>
                    <Routes/>
                </section>
                <footer className="footer-distributed">
                    <Footer />
                </footer>
                <Modal/>
            </React.Fragment>
        );
    }
}
