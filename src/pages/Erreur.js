import '../styles/styles.css'
import { Link } from "react-router-dom"

import Layout from '../layout/layout'


export const Erreur = () => {
    return (


     <Layout> 
    <div className='bloc-erreur'>
     <div className="bloc-erreur__chiffre">
        404
     </div>

     <div className='bloc-erreur__texte'>
        Oups! La page que vous demandez n'existe pas.
     </div>
    

    <nav className='bloc-erreur__lien'>

      <Link to ='/'> Retourner sur la page d'accueil </Link>
    </nav>
    </div>
    </Layout>
    
    )
}