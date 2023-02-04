import './FunctionalComponent.css';

interface FunctionalComponentProps{
    name: string;
}
let nombre = 'Roger Salgado';
let terminal = console.log(nombre);

export const FunctionalComponent: React.FC<FunctionalComponentProps> = ({ name }) => {

    return(
        <>
        <h1 className='FC'>
            Hola desde un FC, {name}
        </h1>
        {terminal}
        </>
    )
}