export default function Person({src,position,name}){
    return(
        <div class='Person'>
            <img src={src} />
            <p>{position}</p>
            <p>{name}</p>
        </div>
    )
}