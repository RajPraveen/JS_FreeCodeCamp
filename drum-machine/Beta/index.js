/* 
React APP : DRUM MACHINE;
Author: Raj Praveen R
Date : 8/13/2018
*/
//Q, W, E, A, S, D, Z, X, C. 

let drumPad = [];

const DATA = [
    {
        id : 'Q',
        music : 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
        name : 'Heater-1'
    },
    {
        id : 'W',
        music : 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
        name : 'Heater-2'
    },
    {
        id : 'E',
        music : 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
        name : 'Heater-3'
    },
    {
        id : 'A',
        music : 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
        name : 'Heater-4'
    },
    {
        id : 'S',
        music : 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
        name : 'Clap'
    },
    {
        id : 'D',
        music : 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
        name : 'Open-HH'
    },
    {
        id : 'Z',
        music : 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
        name : "Kick-n'-Hat"
    },
    {
        id : 'X',
        music : 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
        name : 'Kick'
    },
    {
        id : 'C',
        music : 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
        name : 'Closed-HH'
    },
];

class DrumPad extends React.Component {
    constructor(props) {
        super(props);    
    }

    
    
    handleClick = (event) => {
    
        let element = document.querySelector("#" + event.target.innerText);
        this.props.onChange(event.target.id);
        element.play();

    }

    render() {
        return(
            <button className='drum-pad' onClick ={this.handleClick} id={this.props.name}>
                {this.props.id}
                <audio src={this.props.music} id={this.props.id} className="clip"></audio>
            </button>
        )
    }
}


class DrumPadRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

    
        DATA.forEach((object) => {

            drumPad.push(<DrumPad 
                            onChange={this.props.onChange}
                            music = {object.music} 
                            id={object.id} 
                            key={object.name}
                            name={object.name} />
                            );
        });

        return(
                <tr> 
                    <td>
                        {drumPad.shift()}
                    </td>
                    <td>
                        {drumPad.shift()}
                    </td>
                    <td>
                        {drumPad.shift()}
                    </td>
                </tr>
        )
    }
}


class DrumPadContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    

    render() {
      
        let drumRowObject = [];
        for(let i=0; i<3; i++)
            drumRowObject.push(<DrumPadRow onChange={this.props.onChange} key={i} />)

        return(
            <tbody>
                {drumRowObject}
            </tbody>
        )
    }
}

class Display extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <p id="display">  
                {this.props.display}
            </p>
        )
    }
}


class DrumMachine extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display : ''
        }

        this.onChange = this.onChange.bind(this);


    }

    onChange = (display) => {
        this.setState({
            display
        })
    }


    render() {
        return (
            <div id="drum-machine">
                <h1>Drum-Machine</h1>
                <Display display={this.state.display}/>
                <table>
                    <DrumPadContainer display = {this.state.display} onChange = {this.onChange}/>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<DrumMachine />,document.querySelector('#App'));
