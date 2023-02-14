import './ChildrenComponent.css'
interface ChildrenComponentProps {
    firstName: string;
    lastName: string;
    age?: number;
    clickReturnName: (Name: string) => void;
}

export function ChildrenComponent (props: ChildrenComponentProps): JSX.Element{

    const devolverName = ()=>{
        const Name = props.firstName + ' ' + props.lastName;
        props.clickReturnName(Name);
    }

    return <>
        <h1 className='hijo'>
        Hola, {props.firstName + ' ' + props.lastName} <br />
        {(props.age!== undefined)? 'Edad: ' + props.age + 'A#os': null}
        <button className='boton'
        onClick={()=>{
            devolverName();
        }}
        >
            Devolver
        </button>
        </h1>
    </>
}