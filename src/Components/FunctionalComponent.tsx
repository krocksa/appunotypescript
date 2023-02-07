
import React from "react";
import './FunctionalComponent.css';

interface FunctionalComponentProps{
    name: string;
}


export function FunctionalComponent (props: FunctionalComponentProps): JSX.Element {
    return <>
       <h1 className="FC">Hola, {props.name}</h1>
    </>
}




 