import './StyleNew.css';
import RightBlock from './RightBlock';
import React, { Component } from 'react';

export default class Ather extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             visibility: false,
             visibility2:false,
             visibility3: false,
             visibility4: false,
             visibility5: false
        }
        this.handlClick= this.handlClick.bind(this);
        this.handlClick2= this.handlClick2.bind(this);
        this.handlClick3= this.handlClick3.bind(this);
        this.handlClick4= this.handlClick4.bind(this);
        this.handlClick5= this.handlClick5.bind(this);
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
    handlClick3(){
        this.setState(state =>({
            visibility3: !state.visibility3
        }));
    }
    handlClick4(){
        this.setState(state =>({
            visibility4: !state.visibility4
        }));
    }
    handlClick5(){
        this.setState(state =>({
            visibility5: !state.visibility5
        }));
    }
    
    render() {
        if(this.state.visibility){
            return (
                <>
                    <div >
                        <p className="Ather">Другое</p>
                        <p onClick={this.handlClick} className="AtherEmpty">.</p>
                        <p className="AtherEmpty">.</p>
                        <p className="AtherEmpty">.</p>
                        <p className="PsihiatrIvent"><span>Сходить к</span><br /><span>психиатру</span></p>
                        <p className="KodeIvent"><span>Покодить</span></p>
                        <p className="PsihologIvent"><span>Сходить к</span><br /><span>психологу</span></p>
                        <p className="ReedBookIvent"><span>Прочитать</span><br /><span>книгу</span></p>
                    </div>
                </>
            );
        }
        if(this.state.visibility2){
            return (
                <>
                    <div >
                        <p className="Ather">Другое</p>
                        <p className="AtherEmpty">.</p>
                        <p className="AtherEmpty">.</p>
                        <p className="AtherEmpty">.</p>
                        <p onClick={this.handlClick2} className="PsihiatrIvent"><span>Сходить к</span><br /><span>психиатру</span></p>
                        <p className="KodeIvent"><span>Покодить</span></p>
                        <p className="PsihologIvent"><span>Сходить к</span><br /><span>психологу</span></p>
                        <p className="ReedBookIvent"><span>Прочитать</span><br /><span>книгу</span></p>
                    </div>
                    <RightBlock name="DIMA"/>
                </>
            );
        }
        if(this.state.visibility3){
            return (
                <>
                    <div >
                        <p className="Ather">Другое</p>
                        <p className="AtherEmpty">.</p>
                        <p className="AtherEmpty">.</p>
                        <p className="AtherEmpty">.</p>
                        <p className="PsihiatrIvent"><span>Сходить к</span><br /><span>психиатру</span></p>
                        <p onClick={this.handlClick3} className="KodeIvent"><span>Покодить</span></p>
                        <p className="PsihologIvent"><span>Сходить к</span><br /><span>психологу</span></p>
                        <p className="ReedBookIvent"><span>Прочитать</span><br /><span>книгу</span></p>
                    </div>
                    <RightBlock name="MONSTR"/>
                </>
            );
        }
        if(this.state.visibility4){
            return (
                <>
                    <div >
                        <p className="Ather">Другое</p>
                        <p className="AtherEmpty">.</p>
                        <p className="AtherEmpty">.</p>
                        <p className="AtherEmpty">.</p>
                        <p className="PsihiatrIvent"><span>Сходить к</span><br /><span>психиатру</span></p>
                        <p className="KodeIvent"><span>Покодить</span></p>
                        <p onClick={this.handlClick4} className="PsihologIvent"><span>Сходить к</span><br /><span>психологу</span></p>
                        <p className="ReedBookIvent"><span>Прочитать</span><br /><span>книгу</span></p>
                    </div>
                    <RightBlock />
                </>
            );
        }
        if(this.state.visibility5){
            return (
                <>
                    <div >
                        <p className="Ather">Другое</p>
                        <p className="AtherEmpty">.</p>
                        <p className="AtherEmpty">.</p>
                        <p className="AtherEmpty">.</p>
                        <p className="PsihiatrIvent"><span>Сходить к</span><br /><span>психиатру</span></p>
                        <p className="KodeIvent"><span>Покодить</span></p>
                        <p className="PsihologIvent"><span>Сходить к</span><br /><span>психологу</span></p>
                        <p onClick={this.handlClick5} className="ReedBookIvent"><span>Прочитать</span><br /><span>книгу</span></p>
                    </div>
                    <RightBlock />
                </>
            );
        }
        else{
            return(
                <div  >
                    <p className="Ather">Другое</p>
                    <p onClick={this.handlClick} className="AtherEmpty">.</p>
                    <p className="AtherEmpty">.</p>
                    <p className="AtherEmpty">.</p>
                    <p onClick={this.handlClick2} className="PsihiatrIvent"><span>Сходить к</span><br /><span>психиатру</span></p>
                    <p onClick={this.handlClick3} className="KodeIvent"><span>Покодить</span></p>
                    <p onClick={this.handlClick4} className="PsihologIvent"><span>Сходить к</span><br /><span>психологу</span></p>
                    <p onClick={this.handlClick5} className="ReedBookIvent"><span>Прочитать</span><br /><span>книгу</span></p>
                </div>
            )
        }
        
    }
}
