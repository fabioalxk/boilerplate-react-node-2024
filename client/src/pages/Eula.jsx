import React from "react";
import { Link } from "react-router-dom";
import "./PoliticaPrivacidade.scss"; // Reaproveitamos o mesmo estilo

function Eula() {
  return (
    <div className="eula-container">
      <div className="header">
        <Link to="/" className="back-button">←</Link>
        <h1 className="header-title">Termos de Uso (EULA)</h1>
      </div>

      <div className="content">
        <div className="section">
          <h2 className="section-title">Termos de Uso do doc-facil</h2>

          <p className="policy-text">
            Última atualização: Junho 2024
          </p>

          <p className="policy-text">
            Bem-vindo ao doc-facil. Ao utilizar este aplicativo, você concorda com estes termos de uso.
            Por favor, leia-os atentamente.
          </p>

          <h3 className="subsection-title">1. Aceitação dos Termos</h3>
          <p className="policy-text">
            Ao utilizar o aplicativo doc-facil, você concorda em cumprir e estar vinculado a estes Termos de Uso.
            Se você não concordar com qualquer parte destes termos, não deverá utilizar o aplicativo.
          </p>

          <h3 className="subsection-title">2. Descrição do Serviço</h3>
          <p className="policy-text">
            O doc-facil é um aplicativo médico auxiliar que fornece informações de suporte para procedimentos de intubação
            traqueal em pacientes adultos. O aplicativo é destinado exclusivamente a profissionais de saúde qualificados.
          </p>

          <h3 className="subsection-title">3. Isenção de Responsabilidade</h3>
          <p className="policy-text">
            O doc-facil é uma ferramenta auxiliar e não substitui a avaliação clínica presencial da equipe de saúde.
            O aplicativo não substitui a formação médica, o julgamento clínico ou a experiência profissional.
            Os usuários são inteiramente responsáveis pelas decisões tomadas com base nas informações fornecidas pelo aplicativo.
          </p>

          <h3 className="subsection-title">4. Propriedade Intelectual</h3>
          <p className="policy-text">
            Todo o conteúdo incluído no aplicativo, como textos, gráficos, logotipos, imagens, bem como a compilação destes,
            é de propriedade do Dr. Antonio | CRM xxx-xxx e protegido por leis de direitos autorais.
          </p>

          <h3 className="subsection-title">5. Restrições de Uso</h3>
          <p className="policy-text">
            O usuário não tem permissão para:
          </p>
          <ul className="policy-list">
            <li>Modificar ou copiar os materiais do aplicativo</li>
            <li>Usar os materiais para qualquer finalidade comercial</li>
            <li>Remover qualquer direito autoral ou outras notações de propriedade dos materiais</li>
            <li>Transferir os materiais para outra pessoa ou espelhar os materiais em qualquer outro servidor</li>
          </ul>

          <h3 className="subsection-title">6. Alterações nos Termos</h3>
          <p className="policy-text">
            Reservamos o direito de revisar estes termos a qualquer momento, sem aviso prévio.
            Ao usar este aplicativo, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>

          <h3 className="subsection-title">7. Lei Aplicável</h3>
          <p className="policy-text">
            Estes termos são regidos e interpretados de acordo com as leis do Brasil,
            sem considerar seus conflitos de disposições legais.
          </p>

          <h3 className="subsection-title">8. Contato</h3>
          <p className="policy-text">
            Para quaisquer dúvidas ou preocupações sobre estes termos, entre em contato através
            do e-mail: fabioalxk@gmail.com@gmail.com
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

export default Eula; 