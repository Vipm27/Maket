import React, { Component } from 'react';
import './StyleNew.css';
import RightBlockIT from './RightBlockIT';

export default class IT extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             visibility: false,
             visibility2: false,
             visibility3: false,
        }
        this.handlClick= this.handlClick.bind(this);
        this.handlClick2= this.handlClick2.bind(this);
        this.handlClick3= this.handlClick3.bind(this);
    }
    handlClick(){
        this.setState(state =>({
            visibility: !state.visibility
        }));
    }
    handlClick3(){
        this.setState(state =>({
            visibility3: !state.visibility3
        }));
    }
    handlClick2(){
        this.setState(state =>({
            visibility2: !state.visibility2
        }));
    }
    render() {
        if(this.state.visibility){
            return (
                <>
                <div>
                    <p className="ITGround">IT</p>
                    <p onClick={this.handlClick} className="ITIvent">1 занятие</p>
                    <p className="ITEmpty">.</p>
                    <p className="ITEmpty">.</p>
                    <p className="ITEmpty">.</p>
                    <p className="ITIvent3">1 занятие</p>
                    <p className="ITEmpty2">.</p>
                    <p className="ITEmpty2">.</p>
                    <p className="ITIvent2"><span>Доделать макап</span><br /><span>Продумать API</span> </p>
                </div>
                <RightBlockIT />
                </>
            );
        }
        if(this.state.visibility2){
            return (
                <>
                <div>
                    <p className="ITGround">IT</p>
                    <p className="ITIvent">1 занятие</p>
                    <p className="ITEmpty">.</p>
                    <p className="ITEmpty">.</p>
                    <p className="ITEmpty">.</p>
                    <p onClick={this.handlClick2} className="ITIvent3">1 занятие</p>
                    <p className="ITEmpty2">.</p>
                    <p className="ITEmpty2">.</p>
                    <p className="ITIvent2"><span>Доделать макап</span><br /><span>Продумать API</span> </p>
                </div>
                <RightBlockIT />
                </>
            );
        }
        if(this.state.visibility3){
            return (
                <>
                <div>
                    <p className="ITGround">IT</p>
                    <p className="ITIvent">1 занятие</p>
                    <p className="ITEmpty">.</p>
                    <p className="ITEmpty">.</p>
                    <p className="ITEmpty">.</p>
                    <p className="ITIvent3">1 занятие</p>
                    <p className="ITEmpty2">.</p>
                    <p className="ITEmpty2">.</p>
                    <p onClick={this.handlClick3} className="ITIvent2"><span>Доделать макап</span><br /><span>Продумать API</span> </p>
                </div>
                <RightBlockIT />
                </>
            );
        }
        else{
            return(
                <div>
                    <p className="ITGround">IT</p>
                    <p onClick={this.handlClick} className="ITIvent">1 занятие</p>
                    <p className="ITEmpty">.</p>
                    <p className="ITEmpty">.</p>
                    <p className="ITEmpty">.</p>
                    <p onClick={this.handlClick2} className="ITIvent3">1 занятие</p>
                    <p className="ITEmpty2">.</p>
                    <p className="ITEmpty2">.</p>
                    <p onClick={this.handlClick3} className="ITIvent2"><span>Доделать макап</span><br /><span>Продумать API</span> </p>
                </div> 
            )
        }
    }
}

