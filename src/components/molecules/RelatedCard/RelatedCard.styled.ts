import styled from 'styled-components'

export const StyledRelatedCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.primary};
  text-align: center;
  align-items: center;
  width: 100%;
  position: relative;

  :hover {
    cursor: pointer;

    img {
      transform: scale(1.05);
    }
  }

  a {
    background-color: white;
    width: 90%;
    border-radius: 10px;
    transform: translateY(-40px);
    padding: 5px 10px;
    box-shadow: rgba(149, 157, 165, 0.1) 0 8px 24px;

    h3 {
      font-size: 15px;
      text-align: center;
      margin: 0 auto;

      @media ${({ theme }) => theme.media.tablet} {
        font-size: 18px;
      }
    }

    :before {
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      position: absolute;
    }
  }

  > * {
    width: 100%;
  }

  picture {
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    display: block;

    ::before {
      content: '';
      padding-top: 100%;
      display: block;
    }
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    transform: scale(1);
    transition: all 0.2s linear;
  }
`

export const StyledRelatedCardHeading = styled.h3`
  width: fit-content;
  transition: all 0.3s linear;
  line-height: 25px;
  padding: 12px 0;
`

export const StyledRelatedCardDescription = styled.p`
  width: 90%;
  padding: 0 18px;
  margin: 10px auto 15px auto;
  font-size: 15px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
