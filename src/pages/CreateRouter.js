import { createBrowserRouter} from 'react-router-dom';
import {Home} from '../pages/Home'
import { APropos } from "./APropos";
import  FicheLogement  from "./FicheLogement";
import { Erreur } from "../pages/Erreur";


export const Router = createBrowserRouter([
    
    {
      path: "/",
      element: <Home />,
      errorElement: <Erreur />,
      index: true
    },
    {
      path: '/Fiche_Logement/:id',
      element: <FicheLogement />,
      errorElement: <Erreur />
    },
    {
      path: '/A_propos',
      element: <APropos />,
      errorElement: <Erreur />
    },

    {

      path:'*',
      element:<Erreur/>
      
    }
  ]);
  