

export default function Delete(deleteitem, close){
    return(
        <div>
            <span>Deseja excluir este item?</span>
            <button onClick={deleteItem}>Excluir</button>
            <button onClick={close}>Cancelar</button>
        </div>
    )
}