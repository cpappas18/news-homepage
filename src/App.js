import './App.scss';
import { useState } from 'react';
import Header from './components/Header';
import NewArticles from './components/NewArticles';
import Main from './components/Main';
import SuggestedArticles from './components/SuggestedArticles';
import Footer from './components/Footer';

function App() {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <div className={`App ${menuVisible ? 'menu-visible' : ''}`}>
            <Header 
                menuVisible={menuVisible}
                setMenuVisible={setMenuVisible}
            />
            <Main/>
            <NewArticles/>
            <SuggestedArticles/>
            <Footer/>
        </div>
    );
}

export default App;
