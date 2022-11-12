import './styles.css';

/*EXISTEM DUAS FORMAS DE UTILIZAR O PROPS: PASSANDO ELE OU DESESTRUTURANDO E PASSANDO COMO SE FOSSEM PARAMETROS*/ 
/*FORMA 1*/
export function Card(props){
    return(
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}

/* FORMA 2
AQUI TEM Q COLOCAR ENTRE CHAVES*/
/*
export function Card({name, time}){
    return(
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}
*/