


// const FlashingEffect ={
//     backgroundColor: "green",
//     opacity:"1",
//     padding: "12px 15px",
//     border: "0",
//     borderRadius: "5px",
//     transitionProperty: "opacity",
//     transitionDuration: "1s",
    
//     transition:" opacity 3s steps(1000, start)",
//     animationName: "flashingEffect",
//     animationIterationCount: "infinite",

//     @keyframes flashingEffect{
//         0%{
//             opacity:"1"
//         }
//         100%{
//             opacity:"0"
//         }
    
//     }

// }
// import React, { Component } from 'react'
// import 'style.css';



class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            "seconds":0,
            "minutes":0,
            "hours": 0,
            indicator:"stop",
            
        };
        this.tick=this.tick.bind(this)
        this.start=this.start.bind(this)
        this.pause=this.pause.bind(this)
        this.stop=this.stop.bind(this)
        
    }
    tick(){
        // console.log(this)
        let seconds = this.state.seconds+1;
        let minutes = this.state.minutes;
        let hours = this.state.hours;
        if(seconds>=60) {
            minutes++;
            seconds=0;
        }
        if (minutes>=60) {
            hours++;
            minutes=0;

        }
        this.setState({
            seconds:seconds,
            minutes:minutes,
            hours:hours,
        }
            

        )
           
    }
    start() {
        console.log(this)
        this.interval=setInterval(this.tick,1000) 
        this.setState({indicator:"active"})

        
        
    }
    pause() {
        clearInterval(this.interval)
        // document.body.style.backgroundColor="yellow";
        this.setState({indicator:"pause"})
    }
    stop() {
        
        this.pause();
        this.setState(
            {
                seconds:0,
                minutes:0,
                hours:0,
            }
        )
        // document.body.style.backgroundColor="red";
        this.setState({indicator:"stop"})


    }
    // componentDidMount() {
    //     //  this.start();
    // }
    componentWillUnmount() {
        
        this.pause();
        
    }
    

    render() {
        
        return(
            <div>
                <div className={`indicator ${this.state.indicator}`}></div>
                Прошло {zeroTime(this.state.hours)}:{zeroTime(this.state.minutes)}:{zeroTime(this.state.seconds)}  

                <button onClick={this.start} className="styles"> Start</button>
                <button onClick={this.pause}> Pause</button>
                <button onClick={this.stop}> Stop</button>

            </div>
            
        )
    }
}

function zeroTime(x) {
  return  x<10 ? "0" + x : x
}

ReactDOM.render(
    <Timer/>,
    document.querySelector("#root")
)