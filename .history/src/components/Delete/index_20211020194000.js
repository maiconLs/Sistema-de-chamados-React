import './delete.css';

export default function Delete({button, deleteItems, close}){
    return(
        <div className='modals'>
            <div className="containers">
                <span className="span">Deseja excluir este item?</span> 
                <div className="button">
                    <button className="closes" onClick={deleteItems}>Excluir</button>
                    <button className="cancel" onClick={ close }>Cancelar</button>
                </div>
              
            </div>
        </div>
    )
}