import './title.css';

export default function Title({children, name}){
    return (
        <div className="">
            {children}
            <span>{name}</span>
        </div>
    )
}