

export default function Delete(deleteItems, close){
    return(
        <div className='{modalDelete}'>
            <span>Deseja excluir este item?</span>
            <button onClick={deleteItems}>Excluir</button>
            <button onClick={close}>Cancelar</button>
        </div>
    )
}