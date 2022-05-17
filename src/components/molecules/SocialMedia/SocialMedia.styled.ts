import styled from 'styled-components'

interface SocialMediaSize {
  size: number
  label: string
}

export const SocialMedia = styled.div<SocialMediaSize>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px 0;
  padding: 0 20px;

  @media ${({ theme }) => theme.media.desktop} {
    width: ${({ label }) => (label ? '100%' : 'fit-content')};
    margin: 0;

    p {
      font-size: ${({ size }) => (size ? `${size / 2.25}px` : '100px')};
      margin-right: 25px;
    }
  }

  svg {
    width: ${({ size }) => (size ? `${size}px` : '100px')};
    fill: white;
    background-color: #cbbcb8;
    margin: ${({ size }) => (size ? `10px ${size / 10}px` : '10px 3px')};
    padding: ${({ size }) => (size ? `${size / 8}px` : '3px')};
    border-radius: 62% 38% 36% 64% / 53% 52% 48% 47%;
    border: 2px solid #cbbcb8;
  }
`
