import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import FicheLogement from "./FicheLogement";
import { APropos } from "./APropos";
import { Erreur } from "./Erreur";

function App() {
  return (
    
    <Routes> 
      <Route path="/" Component={Home}></Route>
      <Route path="/Fiche_Logement/:id" Component={FicheLogement}></Route>
      <Route path="/A_Propos" Component={APropos}></Route>
      <Route path="*" Component={Erreur}></Route>

    </Routes >
 
    
   
  );
}

export default App;


