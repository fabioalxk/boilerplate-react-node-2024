import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProcedimentoPage from "./pages/ProcedimentoPage";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import Eula from "./pages/Eula";
import ClassificacaoLeon from "./pages/ClassificacaoLeon";
import IntubacaoPreditor from "./pages/IntubacaoPreditor";
import IntubacaoSemPreditor from "./pages/IntubacaoSemPreditor";
import DadosPaciente from "./pages/DadosPaciente";
import PreOxigenacao from "./pages/PreOxigenacao";
import Posicionamento from "./pages/Posicionamento";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procedimento" element={<ProcedimentoPage />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/eula" element={<Eula />} />
        <Route path="/classificacao-leon" element={<ClassificacaoLeon />} />
        <Route path="/intubacao-preditor" element={<IntubacaoPreditor />} />
        <Route path="/intubacao-sem-preditor" element={<IntubacaoSemPreditor />} />
        <Route path="/dados-paciente" element={<DadosPaciente />} />
        <Route path="/pre-oxigenacao" element={<PreOxigenacao />} />
        <Route path="/posicionamento" element={<Posicionamento />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;