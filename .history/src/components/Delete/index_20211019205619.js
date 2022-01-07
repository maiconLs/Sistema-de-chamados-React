

export default function Delete(deleteItems, close){
    return(
        <div className='modal'>
            <div>
                <span>Deseja excluir este item?</span>
                <button onClick={deleteItems}>Excluir</button>
                <button onClick={close}>Cancelar</button>
            </div>
        </div>
    )
}