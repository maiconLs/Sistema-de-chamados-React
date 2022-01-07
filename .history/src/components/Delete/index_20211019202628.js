

export default function Delete(delete, close){
    return(
        <div>
            <span>Deseja excluir este item?</span>
            <button onClick={deleteModal}>Excluir</button>
            <button onClick={close}>Cancelar</button>
        </div>
    )
}