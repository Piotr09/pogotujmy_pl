import styled from 'styled-components'

interface DropdownWrapper {
  dropdownPostionX: number
}

export const StyledSecondaryNavWrapper = styled.ul<DropdownWrapper>`
  background: #fcf1f1;
  padding: 20px 0;

  @media ${({ theme }) => theme.media.desktop} {
    background: #fcf1f1;
    display: flex;
    border-radius: 0 0 15px 15px;
    flex-direction: column;
    position: absolute;
    width: fit-content;
    top: 80px;

    text-align: center;
  }

  li {
    @media ${({ theme }) => theme.media.desktop} {
      display: inline-flex;
    }

    a {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 18px;
      padding: 10px 0px;
      margin-left: 15px;
      text-align: center;
      color: black;
      display: block;

      @media ${({ theme }) => theme.media.desktop} {
        font-size: 15px;
        color: black;
        padding: 10px 20px;
        margin: 0 10px;
        text-align: left;

        :hover {
          width: 90%;
          text-align: left;
          border-radius: 5px;
          background-color: #cabcb8;
        }
      }
    }
  }
`
