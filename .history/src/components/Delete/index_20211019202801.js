

export default function Delete(deleteItens, close){
    return(
        <div>
            <span>Deseja excluir este item?</span>
            <button onClick={deleteItens}>Excluir</button>
            <button onClick={close}>Cancelar</button>
        </div>
    )
}