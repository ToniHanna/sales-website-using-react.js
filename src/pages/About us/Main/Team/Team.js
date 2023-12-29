import teamArray from './teamArray'
import Person from './Person'
export default function Team(){
    const teamList=teamArray.map(person=>
        <Person 
            src={person.src}
            name={person.name}
            position={person.position}
        />
        )
    return(
        <div class='Team'>
            <h1>Discover our Team</h1>
            <hr/>
            <div class='team-container'>
                {teamList}
            </div>
        </div>
    )
}