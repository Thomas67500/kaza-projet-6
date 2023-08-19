import '../styles/styles.css'
import { CarteLocation } from '../components/carte-location'
import JsonData from "../data/logements.json"



export const BoxLocation=() => {
return(
<main className='box-location'>
{JsonData.map((infos)=>{
            return (
          <CarteLocation {...infos} key={infos.id} />   
        )})}
   
   

      

</main>





)
}