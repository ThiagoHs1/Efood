import { styled } from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const ListaPedidos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  row-gap: 30px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
export const ContainerMenu = styled.section`
  display: flex;
  justify-content: center;
  margin: 60px 0;
`
export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }
`
export const ModalContent = styled.div`
  position: fixed;
  z-index: 1;
  top: 25%;
  left: 22.7%;
  max-width: 1040px;
  width: 80%;
  height: 344px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${cores.corHeader};
  color: ${cores.branco};

  @media (max-width: ${breakpoints.desktop}) {
    position: fixed;
    width: 80%;
    height: 50%;
    top: 21%;
    left: 10%;
    flex-direction: row;
    justify-content: flex-start;
  }
  @media (max-width: ${breakpoints.tablet}) {
    position: fixed;
    width: 80%;
    height: 40%;
    top: 21%;
    left: 10%;
    flex-direction: row;
    justify-content: flex-start;
  }
  @media (max-width: ${breakpoints.mobile}) {
    position: fixed;
    justify-content: space-between;
    width: 100vw;
    height: 40%;
    top: 21%;
    left: 0%;
  }
`
export const ModalPedido = styled.div`
  padding: 20px;

  img {
    object-fit: cover;
    position: absolute;
    top: 10px;
    right: 20px;
  }

  h2 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 30px;
  }

  p {
    line-height: 22px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 80%;
      line-height: 14px;
    }
  }
`
export const ModalImagem = styled.img`
  object-fit: cover;
  margin-left: 30px;
  width: 280px;
  height: 280px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    max-height: 100%;
    width: 100vw;
    height: 30vh;
    margin-left: 0px;
    margin-top: 5px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    max-height: 100%;
    max-width: 100%;
    width: 100vw;
    height: 30vh;
    margin-left: 5px;
    margin-top: 5px;
  }
`
export const ModalBotao = styled.button`
  border: none;
  width: 218px;
  height: 24px;
  padding: 2px;

  font-weight: 700;
  font-size: 14px;

  background-color: ${cores.corBody};
  color: ${cores.corHeader};
`
