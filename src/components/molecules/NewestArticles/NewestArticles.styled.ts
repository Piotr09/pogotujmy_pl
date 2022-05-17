import styled from 'styled-components'

export const StyledRelatedCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  margin-top: 30px;
  font-family: SanchezRegular;
  text-align: center;
  margin: 0 auto;
  align-items: center;
  margin-top: 100px;

  picture {
    overflow: hidden;
    border-radius: 10px;
  }

  img {
    width: 360px;
    max-height: 360px;
    object-fit: cover;
    transform: scale(1);
    transition: all 0.2s linear;

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`

export const StyledRelatedCardHeading = styled.h4`
  width: fit-content;
  transition: all 0.3s linear;
  font-family: SanchezRegular;
  line-height: 32px;
  padding-bottom: 10px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ffbe5e;
  }
`

export const StyledTitleBackground = styled.div`
  position: relative;

  > h4,
  p {
    transform: translateY(-40px);
    width: 80%;
    margin: 0 auto;
  }
  ::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 100%;
    top: 0;
    left: 20px;
    background-color: white;
    transform: translateY(-50px);
    border-radius: 12px;
  }
`

export const StyledRelatedCardDescription = styled.p`
  width: 90%;
  padding: 0 18px;
  margin: 10px auto 0 auto;
`
