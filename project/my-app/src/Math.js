import './StyleNew.css';
import RightBlockMath from "./RightBlockMath";
import React, { Component } from 'react'

export default class Math extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             visibility: false,
             visibility2: false
        }
        this.handlClick= this.handlClick.bind(this);
        this.handlClick2= this.handlClick2.bind(this);
    }
    handlClick(){
        this.setState(state =>({
            visibility: !state.visibility
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
                    <p className='Graund'>Мат</p>
                    <p className='MathEmpty'>_</p>
                    <p onClick={this.handlClick} className='MathQuest'>1 занятие</p>
                    <p className='MathEmpty'>_</p>
                    <p className='MathEmpty'>_</p>
                    <p className='MathEmpty'>_</p>
                    <p className='MathQuest'>1 занятие</p>
                    <p className='MathEmpty'>_</p>
                </div>
                <RightBlockMath name="Vorovich Yelena Alexandrovna" lesson="'Matrix'" place="'Online','Link'" HomeTask="[]" Time="20.05.21 c 10:15 po 11:45" />
                </>
            );
        }
        if(this.state.visibility2){
            return (
                <>
                <div>
                    <p className='Graund'>Мат</p>
                    <p className='MathEmpty'>_</p>
                    <p className='MathQuest'>1 занятие</p>
                    <p className='MathEmpty'>_</p>
                    <p className='MathEmpty'>_</p>
                    <p className='MathEmpty'>_</p>
                    <p onClick={this.handlClick2} className='MathQuest'>1 занятие</p>
                    <p className='MathEmpty'>_</p>
                </div>
                <RightBlockMath name="Vorovich Yelena Alexandrovna" lesson="'Matrix'" place="'Online','Link'" HomeTask="[]" Time="22.05.21 c 10:15 po 11:45" />
                <RightBlockMath name="Vorovich Yelena Alexandrovna" lesson="'Matrix'" place="'Online','Link'" HomeTask="[]" Time="22.05.21 c 12:00 po 13:35" />
                </>
            );
        }
        else{
            return(
                <div>
                    <p className='Graund'>Мат</p>
                    <p className='MathEmpty'>_</p>
                    <p onClick={this.handlClick} className='MathQuest'>1 занятие</p>
                    <p className='MathEmpty'>_</p>
                    <p className='MathEmpty'>_</p>
                    <p className='MathEmpty'>_</p>
                    <p onClick={this.handlClick2} className='MathQuest'>1 занятие</p>
                    <p className='MathEmpty'>_</p>
                </div>
            )
        }
    }
}

 
