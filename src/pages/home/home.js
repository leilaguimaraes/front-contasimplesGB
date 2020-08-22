import React from 'react';
import GlobalStyle from '../../assets/styles/global';
import {Container} from './styles'
import {Headerdiv} from "../../assets/styles/headerdiv"
import {GreenButton} from "../../assets/styles/greenbutton"
import Img from "../../assets/images/logo 01 mobile.svg"
import Sino from "../../assets/images/iconesino.svg"
import Iconemenu from "../../assets/images/barramenu.svg"

function Home(){
  return (
  <div className="Home">
    <>
      <GlobalStyle/>
      <Container>
      <Headerdiv>

        <nav id="menu">
            <div id="logonotificacao">
              <div class="dropdown">
                <img id="menubars" src={Iconemenu} alt="Abrir menu" />
                  <div class="menu-content">
                    <ul>
                      <li><a href="/">Início</a></li>
                      <li><a href="/">Depositar</a></li>
                      <li><a href="/">Extrato da conta</a></li>
                      <li><a href="/">Cartões</a></li>
                      <li><a href="/">Emitir cobrança</a></li>
                      <li><a href="/">Gestão de cobrança</a></li>
                      <li><a href="/">Transferência</a></li>
                      <li><a href="/">Pagamentos</a></li>
                    </ul>
                  </div>
                <img id="imglogo" src={Img} alt="Logo da conta simples" />
              <a href="/"><img id="sino" src={Sino} alt="Ativar Notificações" /></a>
            </div>
          </div>
            <div className="buttondiv">

              <GreenButton><a href="/">Depositar</a></GreenButton>
              <GreenButton><a href="/">Depositar</a></GreenButton>

            </div>
        </nav>
      </Headerdiv>

      </Container>

    </>
  </div>
);
}

export default Home;

