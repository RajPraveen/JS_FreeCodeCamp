/* 
React APP : DRUM MACHINE;
Author: Raj Praveen R
Date : 8/13/2018
*/
//Q, W, E, A, S, D, Z, X, C. 
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

    render() {
        return(
            <button class='drum-pad'>
                {this.props.id}
                <audio src={this.props.music} id={this.props.id}></audio>
            </button>
        )
    }
}


class DrumPadContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    

    render() {
        let drumPad = [];

        DATA.forEach((object) => {
            /* console.log(object); */
            drumPad.push(<DrumPad 
                            music = {object.music} 
                            id={object.id} 
                            key={object.name} />
                            );
        });


        return(
            
        )
    }
}

class Display extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <p id="display">
                TEST
                {' '}
            </p>
        )
    }
}


class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="drum-machine">
                <Display />
                {/* <DrumPadContainer /> */}
                <table>
                    <tbody>
                         <DrumPadContainer />
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<DrumMachine />,document.querySelector('#App'));
