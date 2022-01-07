import './title.css';

export default function Title({children, name}){
    return (
        <div>
            {children}
            <span>{name}</span>
        </div>
    )
}