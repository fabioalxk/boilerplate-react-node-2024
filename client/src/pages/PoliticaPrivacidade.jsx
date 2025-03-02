import React from "react";
import { Link } from "react-router-dom";
import "./PoliticaPrivacidade.scss";

function PoliticaPrivacidade() {
  return (
    <div className="politica-container">
      <div className="header">
        <Link to="/" className="back-button">←</Link>
        <h1 className="header-title">Política de Privacidade</h1>
      </div>

      <div className="content">
        <div className="section">
          <h2 className="section-title">Política de Privacidade do doc-facil</h2>

          <p className="policy-text">
            Última atualização: Junho 2024
          </p>

          <p className="policy-text">
            O aplicativo doc-facil é uma ferramenta médica auxiliar que respeita a sua privacidade e
            se compromete a proteger seus dados pessoais. Esta política de privacidade explica como coletamos,
            usamos e protegemos suas informações quando você utiliza nosso aplicativo.
          </p>

          <h3 className="subsection-title">1. Informações que coletamos</h3>
          <p className="policy-text">
            O aplicativo doc-facil foi projetado para funcionar sem a necessidade de coletar dados pessoais dos usuários.
            Não coletamos nenhuma informação pessoal identificável como nome, e-mail ou dados de pacientes.
          </p>

          <h3 className="subsection-title">2. Uso da informação</h3>
          <p className="policy-text">
            Como não coletamos dados pessoais, não utilizamos suas informações para nenhuma finalidade.
            O aplicativo é uma ferramenta de consulta e auxílio, sem registro de atividades.
          </p>

          <h3 className="subsection-title">3. Compartilhamento de dados</h3>
          <p className="policy-text">
            Não compartilhamos nenhum dado com terceiros, pois não coletamos nenhuma informação pessoal.
          </p>

          <h3 className="subsection-title">4. Armazenamento e segurança</h3>
          <p className="policy-text">
            Como não coletamos dados de usuários, não armazenamos nenhuma informação em nossos servidores.
          </p>

          <h3 className="subsection-title">5. Alterações nesta política</h3>
          <p className="policy-text">
            Podemos atualizar nossa Política de Privacidade periodicamente. Recomendamos que você revise esta página
            ocasionalmente para se manter informado sobre quaisquer alterações.
          </p>

          <h3 className="subsection-title">6. Contato</h3>
          <p className="policy-text">
            Para quaisquer dúvidas ou preocupações sobre esta política de privacidade, entre em contato através
            do e-mail: vesartius.life@gmail.com
          </p>
        </div>
      </div>

      <div className="footer">
        <p className="footer-text">
          © 2022-2030 doc-facil - Todos os direitos reservados
        </p>
      </div>
    </div>
  );
}

export default PoliticaPrivacidade; 