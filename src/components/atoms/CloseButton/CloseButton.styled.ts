import { Close as CloseIcon } from '@styled-icons/ionicons-outline/Close'
import styled from 'styled-components'

export const StyledCloseIcon = styled(CloseIcon)`
  width: 28px;
  height: 28px;
`

export const StyledCloseButton = styled.button`
  color: ${({ theme }) => theme.palette.black};
  border: unset;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: 0.3s;
  background: none;
  position: absolute;
  right: 10px;
  top: 10px;

  :hover {
    background: ${({ theme }) => theme.palette.black};
    color: white;
  }
`
