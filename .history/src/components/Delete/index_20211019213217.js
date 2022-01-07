import ''

export default function Delete({deleteItems, close}){
    return(
        <div className='modal'>
            <div className="container">
                <span>Deseja excluir este item?</span> <br/>
                <div className="button">
                    <button onClick={deleteItems}>Excluir</button>
                    <button onClick={ close }>Cancelar</button>
                </div>
              
            </div>
        </div>
    )
}