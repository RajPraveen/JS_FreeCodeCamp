
/* 
React APP : Javascript Calculator
Date : 8/17/2018
Author : Raj Praveen
*/


class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }


    handleClick = (event) => {
        
        event.preventDefault();
        this.props.handleCurrentDisplay(event.target.value);
    }

    render() {
        return(
            <div className='button-container' onClick={this.handleClick}>

                <button id="add" className= "operator" value="+" ><i className="fas fa-plus"></i></button>
                <button id="subtract" className= "operator" value="-"><i className="fas fa-minus"></i></button>
                <button id="multiply" className= "operator" value="*"><i className="fas fa-times"></i></button>
                <button id="divide" className= "operator" value="/"><i className="fas fa-divide"></i></button>

                <button id="one" className= "number" value="1">1</button>
                <button id="two" className= "number" value="2">2</button>
                <button id="three" className= "number" value="3">3</button>
                <button id="four" className= "number" value="4">4</button>
                <button id="five" className= "number" value="5">5</button>
                <button id="six" className= "number" value="6">6</button>
                <button id="seven" className= "number" value="7">7</button>
                <button id="eight" className= "number" value="8">8</button>
                <button id="nine" className= "number" value="9">9</button>
                <button id="zero" className= "number" value="0">0</button>
                <button id="decimal" value=".">.</button>

                <button id="equals" value="="><i className="fas fa-equals"></i></button>
                <button id="clear" value= "AC">AC</button>

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
                <div>{this.props.expressionDisplay}</div>
                <div>{this.props.currentDisplay}</div>
            </div>
        )
    }
}


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentDisplay : '',
            isBegin: false,
            expressionDisplay : [],
            isEvaluated: false
        }

        this.handleCurrentDisplay = this.handleCurrentDisplay.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.handleEval = this.handleEval.bind(this);
    }

    /* 
        handleEval function evaluates the data in the expressionDisplay
    */

    handleEval = (value) => {
        
       // console.log(this.state.expressionDisplay);
        
        /* tempArray is checked to see if it has only operators or Dot or an valid mathematical expression  */
        let tempArray = this.state.expressionDisplay ? ((/^[+\-\/\*\.]$/g).test(this.state.expressionDisplay)) ? '' : this.state.expressionDisplay.join('') : ''; 
        
        //console.log(tempResult);
    
        
        let tempResult;
        if(!this.state.currentDisplay && tempArray) {
            tempArray = tempArray.slice(0,tempArray.length - 1);
            
        } 
        else if(!(/^[+\-\/\*\.]$/g).test(this.state.currentDisplay) && tempArray) { /* condition that evaluates to check if not of operators in the current display */
            tempArray = tempArray + this.state.currentDisplay;
        }


        if(tempArray){
            tempResult = eval(tempArray);  
            this.setState({
                expressionDisplay : tempArray + value + tempResult,
                isBegin: false,
                currentDisplay: tempResult,
                isEvaluated: true
            })
             
        }
        else
            this.handleClear();
        
        
       
    }

    /* 
        handleClear function describes clearing the display region when the corresponding button is pressed
    */

    handleClear = () => {
        this.setState({
            currentDisplay: '',
            expressionDisplay:'',
            isBegin: false
        })
    }

    /* 
        handleOperator Defines what happens when an operator is provided as input.
    
    */

    handleOperator = (value) => {
                
        if(this.state.currentDisplay && !this.state.isEvaluated) {
            this.setState(prev => ({
                expressionDisplay: (/[a-zA-Z]/g).test(this.state.currentDisplay) ? '' : [...prev.expressionDisplay,prev.currentDisplay,value],
                currentDisplay:'',
                isBegin: false
            }))
        } 
        else {
            this.setState(prev => ({
                expressionDisplay: [prev.currentDisplay,value],         /* adding the result of an evaluated expression and the succeeding operator */
                currentDisplay:'',                                      /* 5+3=8 => 8+ */                                    
                isBegin: false,
                isEvaluated: false
            }))
        }
            
        
    }

    /** 
     * The function handleNumber defines what happens when a number is entered in the current display
     * 
    */

    handleNumber = (value) => {

        
        if(!this.state.isBegin){                                    /* This little code prevents from entering '0' */
            this.setState({
                currentDisplay: '',
            })
        }

        if(this.state.currentDisplay.length > 21)                   /* Condition to check if the maximum allowable count is met or not */
            this.setState({
                currentDisplay:"Maxmimum input exceeded"
            })
        else if(value === '0' && this.state.isBegin) {              /* The conditon allows you to enter after one or n numbers in the range - [1-9] */
            this.setState((prev) => ({
                currentDisplay: prev.currentDisplay + value
            }));
        }
        else if((/[1-9]/g).test(value)) {                           /* Add first non zero number followed by n number of zeros upto 21 characters */
            this.setState((prev) => ({
                currentDisplay: prev.currentDisplay + value,
                isBegin: true

            }));
        }
        else if (value === '.' && !this.state.isBegin) {            /* Allows you to add decimal at the begining followed by n number of [0-9] */
            this.setState((prev) => ({
                currentDisplay: prev.currentDisplay + value,
                isBegin: true

            }));
        }    
    }


    /* 
        Handle Current Display describes about the characterstics of handling the display based on input
    
    */
    handleCurrentDisplay = (value) => {
        
        if((/[0-9\.]/).test(value))
            this.handleNumber(value);
        else if((/[+|\-|\*|\/]/g).test(value))
            this.handleOperator(value);   
        else if(value === '=')
            this.handleEval(value);
        else if(value === 'AC')
            this.handleClear();        

    }

    render() {
        return(
            <div className = "container">
                <Display currentDisplay= {this.state.currentDisplay} expressionDisplay = {this.state.expressionDisplay}/>
                <Buttons handleCurrentDisplay= {this.handleCurrentDisplay}/>
            </div>
        )
    }
}


ReactDOM.render(<Calculator />,document.querySelector('#App'));
