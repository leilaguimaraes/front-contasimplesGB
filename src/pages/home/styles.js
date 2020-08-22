import styled from 'styled-components';

export const Container  = styled.div `
width: 100vw;
height: 100%;

nav#menu{
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
}

.menu-content{
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  margin-top: 50px
}
.dropdown:hover .menu-content {
  display: block;}

#buttondiv{
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background:#45B54A;
}
img#imglogo{
    width: 134px;
    height: 32px;
    }

div#logonotificacao{
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
div.dropdown{
  margin: 10px 20px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}

`;
