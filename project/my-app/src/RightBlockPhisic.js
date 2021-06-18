import React from 'react';
import './StyleNew.css';

export default function RightBlockPhisic(props) {
    return (
        <div className="rBlockPhis">
            <h1>ПРЕПОДОВАТЕЛЬ: {props.name}</h1>
            <p>Урок: {props.lesson}</p>
            <p>Место: {props.place}</p>
            <p>Домашнее задание: {props.HomeTask}</p>
            <p>Время: {props.Time}</p>
        </div>
    )
}
