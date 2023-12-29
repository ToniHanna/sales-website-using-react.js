export default function Feature({source,title,text}){
    return(
        <li>
            <img src={source}></img>
            <h2> {title} </h2>
            <p> {text}</p>
        </li>
    )
}