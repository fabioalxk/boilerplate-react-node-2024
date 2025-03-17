import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./redux/store";
import Layout from "./components/Layout";
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
import "./pages/App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="/procedimento" element={<ProcedimentoPage />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/eula" element={<Eula />} />
            <Route path="/classificacao-leon" element={<ClassificacaoLeon />} />
            <Route path="/intubacao-preditor" element={<IntubacaoPreditor />} />
            <Route path="/intubacao-sem-preditor" element={<IntubacaoSemPreditor />} />
            <Route path="/dados-paciente" element={<DadosPaciente />} />
            <Route path="/pre-oxigenacao" element={<PreOxigenacao />} />
            <Route path="/posicionamento" element={<Posicionamento />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;