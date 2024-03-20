import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './App.css';
import App1 from './App';
import Hero from './Hero';
import CollapsibleExample from './Navbar';
import BasicExample from './Contact';
import Footer from './Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));

    
    root.render(
        <section className='bg'>
    <CollapsibleExample/>
    <Hero/>
    <App1/>
    <BasicExample/>
    <Footer/>
    </section>
    
    );



