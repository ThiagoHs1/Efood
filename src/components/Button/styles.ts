import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: none;
  color: ${cores.branco};
  background-color: ${cores.corHeader};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  margin: 0 0 5px 5px;
`
export const ButtonLink = styled(Link)`
  position: absolute;
  top: 87%;
  color: ${cores.branco};
  background-color: ${cores.corHeader};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  margin: 10px 0 5px 5px;
`
