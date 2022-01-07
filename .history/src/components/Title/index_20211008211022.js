import './title.css';

export default function Title({children, name}){
    return (
        <div cl>
            {children}
            <span>{name}</span>
        </div>
    )
}