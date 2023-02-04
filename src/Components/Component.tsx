import { log } from "console";
import React from "react";
import './Component.css';

interface ComponentProps{
    name: string;
}

interface ComponentState{
    name: string;
}

export class Component extends React.Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            name: this.props.name
        }
        console.log('constructor');
        
    }

    render() {
        console.log('render');
        console.log(10*(2+3)/5);
                return <>
            Hola, {this.state.name}<br />
            <button onClick={()=>{
                this.setState({name: 'Roger Salgado'})
            }}>
                Change Name
            </button>
            <button onClick={()=>{
                this.setState({name:'KrockSalgado'})
            }}>
                Rename
            </button>

        </>
    }

    componentDidMount() {
        console.log('componentDidMount');     
    }
    componentDidUpdate(prevProps: Readonly<ComponentProps>, prevState: Readonly<ComponentState>, snapshot?: any): void {
        console.log('componentDidUpdate');       
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
        
    }
}