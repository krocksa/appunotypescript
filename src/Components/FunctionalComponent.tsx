import './FunctionalComponent.css';

interface FunctionalComponentProps{
    name: string;
}

export const FunctionalComponent: React.FC<FunctionalComponentProps> = ({ name }) => {

    return(
        <h1 className='FC'>
            Hola desde un FC, {name}
        </h1>
    )
}