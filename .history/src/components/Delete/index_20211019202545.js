

export default function Delete(){
    return(
        <div>
            <span>Deseja excluir este item?</span>
            <button onClick={delete}>Excluir</button>
            <button>Cancelar</button>
        </div>
    )
}