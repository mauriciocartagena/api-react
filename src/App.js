import React from 'react';
import Header from './components/Header';
import ProductBox from './components/Products';

function App() {
    return ( 
        <div className = "container" >
            <Header title="Products App"/>
            <ProductBox/>
        </div>
    );
}

export default App;