import List from './List'
import Info from './Info'
export default function Footer(){
    const src = 'images/logo.png'
    return(
        <footer>
                <Info source={src}/>
                <List />
        </footer>
    )
}