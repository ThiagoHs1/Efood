import { styled } from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  position: relative;
  background: ${cores.branco};
  margin-top: 40px;
  height: 450px;
  border: solid 1px;

  .capa {
    width: 471px;
    height: 217px;
    object-fit: cover;

    @media (max-width: ${breakpoints.mobile}) {
      max-width: 472px;
      width: 100%;
    }
    @media (min-width: ${breakpoints.tablet}) {
      max-width: 350px;
      width: 100%;
    }
    @media (min-width: 900px) {
      max-width: 398px;
      width: 100%;

    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 472px;
    width: 90vw;
    height: 100%;
  }
  @media (min-width: ${breakpoints.tablet}) {
    max-width: 350px;
    width: 90vw
    height: 100%;
  }
  @media (min-width: 900px) {
    max-width: 400px;
    width: 90vw;
    height: 100%;
  }
`

export const Titutlo = styled.h3`
  display: block;

  font-weight: bold;
  font-size: 18px;
  text-decoration: none;

  margin-left: 5px;
  margin-top: 2px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${cores.corHeader};
`

export const NavBar = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: bold;

  .classificacao {
    display: flex;
    align-items: flex-end;
  }
  img {
    margin: 0 10px 0 5px;
  }
`

export const Descricao = styled.p`
  display: block;

  margin-top: 16px;
  margin-bottom: 16px;
  padding: 7px;

  font-size: 14px;
  line-height: 22px;
`
export const Destacados = styled.div`
  position: absolute;
  top: 0px;
  right: 250px;

  &.tagvisivel {
    display: flex;
  }
`
export const TagDestacado = styled.div`
  display: inline-block;
  position: absolute;
  top: 15px;
  right: 80px;

  background-color: ${cores.corHeader};
  color: ${cores.branco};

  padding: 4px 6px;
  font-size: 10px;
  font-weigth: bold;
`
