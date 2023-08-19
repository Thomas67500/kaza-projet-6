
import {BannerPropos} from "../layout/Banner_A_Propos"
import {DropDown} from '../components/DropDown'
import Layout from "../layout/layout"




export const APropos = () => {
    return (
             
             <Layout>
        <main className="Conteneur">
        <BannerPropos />
       
       
        <div className = "standard-box" >

         <div className="info-carte">

        <DropDown title = "Fiabilité" />
        <div className = "box" >
        Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements,
        et toutes les informations sont régulièrement vérifiées par nos équipes. 
        </div>

        </div> 

        <div className="info-carte">

        <DropDown title = "Respect" />
        <div className = "box">
        La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. 
        </div>

        </div>

        <div className="info-carte">

        <DropDown title = "Service" />
        <div className = "box" >
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme.
        </div>

        </div>

        <div className="info-carte">
        <DropDown title = "Sécurité" />
        <div className = "box" >
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logementcorrespond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
        également des ateliers sur la sécurité domestique pour nos hôtes.
        </div> 
        </div>

        </div>
        </main>
        </Layout>  
        
        
    
     



    )
}