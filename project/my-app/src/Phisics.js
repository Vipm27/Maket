import './StyleNew.css';
import RightBlockPhisic from "./RightBlockPhisic";
import React, { Component } from 'react';
 
 export default class Phisics extends Component {
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
                    <p className="PhisicsGround">Физика</p>
                    <p className="PhisicsEmpty">.</p>
                    <p onClick={this.handlClick} className="PhisicsIvent">1 занятие</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p className="PhisicsIvent2">Понять, почему Шредингер так не любит кошек</p>
                </div>
                <div>
                    <RightBlockPhisic name="Yershov Igor Vladimirovich" lesson="Relyativistskaya mehanika" place="8-623" HomeTask="'25-05-21','Zasachi №1, 4, 7'" Time="18-05-21 c 14:15 po 15:45" />
                </div>
                </>
            );
        }
        if(this.state.visibility2){
            return (
                <>
                <div>
                    <p className="PhisicsGround">Физика</p>
                    <p className="PhisicsEmpty">.</p>
                    <p className="PhisicsIvent">1 занятие</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p onClick={this.handlClick2} className="PhisicsIvent2">Понять, почему Шредингер так не любит кошек</p>
                </div>
                <div>
                    <RightBlockPhisic name="dudooooss" />
                </div>
                </>
            );
        }
        else{
            return(
                <div>
                    <p className="PhisicsGround">Физика</p>
                    <p className="PhisicsEmpty">.</p>
                    <p onClick={this.handlClick} className="PhisicsIvent">1 занятие</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p className="PhisicsEmpty2">.</p>
                    <p onClick={this.handlClick2} className="PhisicsIvent2">Понять, почему Шредингер так не любит кошек</p>
                </div>
            )
        }
     }
 }
 
