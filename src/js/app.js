// TODO: write your code here
import Team from './Team'
import TeamGen from './TeamGen'
import Daemon from './Daemon'



const ivan = new Daemon('ivan');
const daemon = new Daemon('daemon')
const jack = new Daemon('jack')
const team = new Team('team');
const teamGen = new TeamGen('teamGen')
team.addAll(ivan, daemon, jack)
teamGen.addAll(ivan, daemon, jack)




// для итератора 
for (let char of team) {
    console.log(char);
}
    
// для генератора
const it = teamGen[Symbol.iterator]()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
