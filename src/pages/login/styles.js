import styled from 'styled-components';

export const Container = styled.div `
  margin: 0px;
  padding: 0px;
  outline:0px;
  box-sizing: border-box;
  display: flex;
  flex-direction:column;
  background-color: #fff;
  align-items: center;
  justify-content: center;

  h3 {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: normal;
    color: #8A8A8A;
  }

  a{
    display: flex;
    font-family: Open Sans;
    font-weight: normal;
    font-size: 11px;
    color: #45B54A;
    text-decoration: none;
    align-content: center;
    justify-content: center;

  }
  img{
    margin: 0px;
    width:100vw;
  }

  img#logo{
    width: 134px;
    height: 32px;
    margin-top: 10px
  }

  form{
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  input{
    width: 317px;
    height: 43px;
    border: 1px solid #F0F0F0;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 30px;
  }
  input[type='submit']{
    border: 1.5px solid #45B54A;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #fff;
    color:#45B54A;
    transition: 0.3s;
  }
  input[type='submit']:hover{
    border: 1.5px solid #fff;
    color:#fff;
    background-color: #45B54A;
  }



  @media (min-width:600px){
    width: 100%;
    display: flex;
    flex-direction:row;
    background-color: #fff;
    align-items: center;
    justify-content: center;

    img{
      height:100vh;
      min-width: 800px;
      max-width:800px;
      max-height: 100vh;
      margin-right: 50px;
      margin-left: 0px
    }
    form{
      display:flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      align-content: center;
    }
    a{
    display: flex;
    font-family: Open Sans;
    font-weight: normal;
    font-size: 11px;
    color: #45B54A;
    text-decoration: none;
    align-content: center;
    justify-content: center;
    }}`
