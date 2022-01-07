import './delete.css';

export default function Delete({deleteItems, close}){
    return(
        <div className='modal'>
            <div className="container">
                <span>Deseja excluir este item?</span> <br/>
                <div className="button">
                    <button className="closes" onClick={deleteItems}>Excluir</button>
                    <button className="cancel" onClick={ close }>Cancelar</button>
                </div>
              
            </div>
        </div>
    )
}