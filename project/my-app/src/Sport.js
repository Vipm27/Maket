import RightBlockSport from './RightBlockSport';
import './StyleNew.css';

import React, { Component } from 'react'

export default class Sport extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            visibility: false,
            visibility2: false
        }
        this.handlClick2= this.handlClick2.bind(this);
        this.handlClick= this.handlClick.bind(this);
    }
    handlClick2(){
        this.setState(state =>({
            visibility2: !state.visibility2
        }));}
    handlClick(){
        this.setState(state =>({
            visibility: !state.visibility
        }));
    }
    render() {
        if(this.state.visibility){
            return (
                <>
                <div>
                    <p className="SportGround">Спорт</p>
                    <p onClick={this.handlClick} className="SportIventRun">1 Занятие</p>
                    <p className="SportEmpty">.</p>
                    <p className="SportIventRun">1 Занятие</p>
                    <p className="SportEmpty">.</p>
                    <p onClick={this.handlClick} className="SportIventRun">1 Занятие</p>
                    <p onClick={this.handlClick} className="SportIventRun">1 Занятие</p>
                    <p className="SportEmpty">.</p>
                </div>
                <RightBlockSport name="Mineyev Alexey Vitalyevich" lesson="Running" place="'Manege','Zal'" HomeTask="[]" Time="19,21,22-05-21 c '08:30'do'10:00'"/>
                </>
            );
        }
        if(this.state.visibility2){
            return (
                <>
                <div>
                    <p className="SportGround">Спорт</p>
                    <p className="SportIventRun">1 Занятие</p>
                    <p className="SportEmpty">.</p>
                    <p onClick={this.handlClick2} className="SportIventRun">1 Занятие</p>
                    <p className="SportEmpty">.</p>
                    <p className="SportIventRun">1 Занятие</p>
                    <p className="SportIventRun">1 Занятие</p>
                    <p className="SportEmpty">.</p>
                </div>
                <RightBlockSport name="Mineyev Alexey Vitalyevich" lesson="Swim" place="'Manege','pool'" HomeTask="[]" Time="19,21,22-05-21 c '08:30'do'10:00'"/>
                </>
            );
        }
        else{
            return(
                <div>
                    <p className="SportGround">Спорт</p>
                    <p onClick={this.handlClick} className="SportIventRun">1 Занятие</p>
                    <p className="SportEmpty">.</p>
                    <p onClick={this.handlClick2} className="SportIventRun">1 Занятие</p>
                    <p className="SportEmpty">.</p>
                    <p onClick={this.handlClick} className="SportIventRun">1 Занятие</p>
                    <p onClick={this.handlClick} className="SportIventRun">1 Занятие</p>
                    <p className="SportEmpty">.</p>
                </div>
            )
        }
    }
}

