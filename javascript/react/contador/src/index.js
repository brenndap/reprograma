import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';


let count = 0;

// const name = {
//     firstName: "Brennda",
//     lastName: "Farinha"
// };

function verificaCount() {
    if (count !== 0) {
        return 'Contador iniciado '
    }

    return 'Contador não iniciado'
}

function reset() {
    count = 0;
}

function add() {
    count++
}

function sub() {
    count--
}



setInterval(function () {
    const template =
        <div>
            <h1>Count: {count} </h1>
            <div>
                <button onClick={add}>+ 1</button>
                <button onClick={sub}>- 1</button>
                <button onClick={reset}>reset</button>
            </div>
            <p>{verificaCount()}</p>
        </div>
    ReactDOM.render(template, document.getElementById('root'));
}, 1000)





