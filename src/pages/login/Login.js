import React from 'react';
import {Container} from './styles'
import { createGlobalStyle } from 'styled-components';
import ImgLogin from '../../assets/images/backgroundimg.jpg'
import Logo from "../../assets/images/logo 01 mobile.svg"

function Login() {
  return (
    <div className="Login">
      <>
        <createGlobalStyle/>
        <Container>
          <img  src={ImgLogin} alt="Homem analizando dados" />
            <div id="formulario">
              <form>
                <img id="logo" src={Logo} alt="Logo da conta simples"></img>
                <h3>Preencha os campos abaixo para fazer login </h3>
                <input placeholder="CPF" type='text'/>
                <input placeholder="Senha" type='password'/>
                <input value="LOGIN" type= "submit" />
              </form>
              <a href="/">Esqueci minha senha {">"}</a> <br/>
              <a href="/">Ainda não sou cliente {">"}</a>
            </div>
        </Container>
      </>
    </div>
  );
}

export default Login;
