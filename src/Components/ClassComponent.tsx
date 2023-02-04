import React from "react";
import './ClassComponent.css';

interface ClassComponentProps{
    name: string;
}

export class ClassComponent extends React.Component<ClassComponentProps, any> {
    constructor(props: ClassComponentProps) {
        super(props);
    }

    render() {
        return <h1 className="CC">
            Hola Mundo desde un CC, {this.props.name}
        </h1>
    }
}