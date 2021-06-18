import React, { Component } from 'react';
import RightBlockEnglish from './RightBlockEnglish'

export default class English extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             visibility: false,
             visibility2: false,
             visibility3: false,
             visibility4: false
        }
        this.handlClick= this.handlClick.bind(this);
        this.handlClick2= this.handlClick2.bind(this);
        this.handlClick3= this.handlClick3.bind(this);
        this.handlClick4= this.handlClick4.bind(this);
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
    
    render() {
        if(this.state.visibility){
            return (
                <>
                <div>
                    <p className='Graund'>Англ</p>
                    <p onClick={this.handlClick} className="EnglishQuestion">1 занятие</p>
                    <p className="EnglishEmpty">.</p>
                    <p className="EnglishQuestionDouble">1 занятие</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p className="EnglishQuestionDouble">1 занятие</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p className="EnglishQuestionAther">Перевести статью</p>
                </div>
                <RightBlockEnglish name="Konenko Kseniya Aleksandrovna" lesson="Grammatika postroyeniya predlogeniy" place="8-624" HomeTask="'19-05-21','Perevesti statyu'" Time="'19-05-21','Sr','10-15','11-45'" />
                </>
            );
        }
        if(this.state.visibility2){
            return (
                <>
                <div>
                    <p className='Graund'>Англ</p>
                    <p className="EnglishQuestion">1 занятие</p>
                    <p className="EnglishEmpty">.</p>
                    <p onClick={this.handlClick2} className="EnglishQuestionDouble">1 занятие</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p className="EnglishQuestionDouble">1 занятие</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p className="EnglishQuestionAther">Перевести статью</p>
                </div>
                <RightBlockEnglish name="Konenko Kseniya Aleksandrovna" lesson="Grammatika postroyeniya predlogeniy" place="8-624" HomeTask="[]" Time="21.05.21 c 10:15 po 11:45" />
                </>
            );
        }
        if(this.state.visibility3){
            return (
                <>
                <div>
                    <p className='Graund'>Англ</p>
                    <p className="EnglishQuestion">1 занятие</p>
                    <p className="EnglishEmpty">.</p>
                    <p className="EnglishQuestionDouble">1 занятие</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p onClick={this.handlClick3} className="EnglishQuestionDouble">1 занятие</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p className="EnglishQuestionAther">Перевести статью</p>
                </div>
                <RightBlockEnglish name="Konenko Kseniya Aleksandrovna" lesson="Grammatika postroyeniya predlogeniy" place="8-624" HomeTask="[]" Time="24.05.21 c 10:15 po 11:45" />
                </>
            );
        }
        if(this.state.visibility4){
            return (
                <>
                <div>
                    <p className='Graund'>Англ</p>
                    <p className="EnglishQuestion">1 занятие</p>
                    <p className="EnglishEmpty">.</p>
                    <p className="EnglishQuestionDouble">1 занятие</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p className="EnglishQuestionDouble">1 занятие</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p onClick={this.handlClick4} className="EnglishQuestionAther">Перевести статью</p>
                </div>
                <RightBlockEnglish />
                </>
            );
        }
        else{
            return(
                <div>
                    <p className='Graund'>Англ</p>
                    <p onClick={this.handlClick} className="EnglishQuestion">1 занятие</p>
                    <p className="EnglishEmpty">.</p>
                    <p onClick={this.handlClick2} className="EnglishQuestionDouble">1 занятие</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p onClick={this.handlClick3} className="EnglishQuestionDouble">1 занятие</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p className="EnglishEmptyNotDouble">.</p>
                    <p onClick={this.handlClick4} className="EnglishQuestionAther">Перевести статью</p>
                </div>
            )
        }
    }
}

