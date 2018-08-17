
/* 
React APP : Javascript Calculator
Date : 8/17/2018
Author : Raj Praveen
*/





class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='button-container'>

                <button id="add" className= "operator"><i class="fas fa-plus"></i></button>
                <button id="subtract" className= "operator"><i class="fas fa-minus"></i></button>
                <button id="multiply" className= "operator"><i class="fas fa-times"></i></button>
                <button id="divide" className= "operator"><i class="fas fa-divide"></i></button>

                <button id="one" className= "number">1</button>
                <button id="two" className= "number">2</button>
                <button id="three" className= "number">3</button>
                <button id="four" className= "number">4</button>
                <button id="five" className= "number">5</button>
                <button id="six" className= "number">6</button>
                <button id="seven" className= "number">7</button>
                <button id="eight" className= "number">8</button>
                <button id="nine" className= "number">9</button>
                <button id="zero" className= "number">0</button>
                <button id="decimal" >.</button>

                <button id="equals"><i class="fas fa-equals"></i></button>
                <button id="clear">AC</button>

            </div>
        )
    }
}

class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='display-container' id="display">
                <p>Expression</p>
                <p>CurrentValue</p>
            </div>
        )
    }
}


class Calculator extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return(
            <div className = "container">
                <Display />
                <Buttons />
            </div>
        )
    }
}


ReactDOM.render(<Calculator />,document.querySelector('#App'));
