interface ChildrenComponentProps {
    firstName: string;
    lastName: string;
    age: number;
}

export function ChildrenComponent (props: ChildrenComponentProps): JSX.Element{
    return <>
        Hola, {props.firstName + ' ' + props.firstName} <br />
        Edad: {props.age}: A#os
    </>
}