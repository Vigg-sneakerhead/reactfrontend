import React, {Component} from 'react'; 

import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal';
import Routes from './Routes';
import Footer from './components/Footer/Footer';

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
