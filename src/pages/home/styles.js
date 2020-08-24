import styled from 'styled-components';

export const Container  = styled.div `
width: 100vw;
height: 100%;
font-family: Open Sans;
font-weight: normal;



div#menu{
  display: flex;

  button{
    border: 0px;
    margin: 10px;
    background: 0px
  }
  button:hover{
    cursor: pointer;
  }
  #navigation{
    position: absolute;
    background: #FFFFFF;
    width: 220px;
    }
    ul{
      width: 300px;
      display: flex;
      flex-direction: column;
      align-content: center;

    }
    ul li {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 15px;
    }
    ul li a{
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      color: #333333;
      text-decoration: none;
      align-items: center;
      text-align: center;
      line-height: 100% ;
      margin: auto 0px;
    }

    ul li a img{
      width: 20px;
      height: 20px;
      margin: 0px 15px -5px 5px;

    }

  }

  div#menucontent .escondermenu{
   display: none;
  }

  }
}

div#wellcomediv{
  height: 175px;
  background: #45B54A;
  box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.06);
  border-radius: 0px 0px 94.5px 0px;
    h2{
      font-weight: 600;
      font-size: 25px;
      color: #FFFFFF;
    }
    h3 {
      font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
    }
    h4{
      font-weight: normal;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
    }
    h5{
    font-size: 12px;
    font-weight: normal;
    margin-left: 80px;
    color: rgba(255, 255, 255, 0.5);
    }
    div#logoenome{
      display: flex;
      align-items: center;
    }
    div#logoenome img{
      width: 26.5px;
      height: 26.5px;
      margin:8px 6px -5px 8px;
    }
    .mostrarsaldo{
      margin: 10px 0px 0px 80px;
      h2#mask{
        display: none;
      }
      h2#saldo {
        display: block;
      }
       button{
        border: none;
        background:none;
        position: absolute;
        margin-left: 170px;
      }
      button:hover{
        cursor: pointer;
      }
    }
    .nao-mostrarsaldo{
      h2#saldo{
        display: none
      }
      h2#mask {
        display: block
      }
    }

.buttondiv{
      margin-left: 60px
    }
}



`;
