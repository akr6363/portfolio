import styled, {css} from "styled-components";

interface ContainerProps {
    $alignRight?: boolean;
    $contactsContainer?: boolean
}
export const Container = styled.div<ContainerProps> `
  width: 100%;
  max-width: 1120px;
  padding: 0 50px;
  margin: 0 auto;
  @media (max-width: 769px) {
    padding: 0 15px;
  }
  ${props => props.$alignRight && css`
    display: flex;
    justify-content: end;
  `}
  ${props => props.$contactsContainer && css`
    display: flex;
  `}
`


interface SectionProps {
    $gray?: boolean;
}

export const Section = styled.div<SectionProps>`
  padding: 100px 0;
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  @media (max-width: 481px) {
    padding: 40px 0;
  }
  background-color: var(--dark-gray-color);
  ${props => props.$gray && css`
    background-color: var(--gray-color);
    //background-image: url("https://7themes.su/_ph/21/469525547.jpg");
  `}
`

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 40px;
  line-height: 45px;
  margin-bottom: 52px;
  //color: var(--light-gray-color)
  color: #fff;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 481px) {
    margin-bottom: 20px;
  }
  
  
`

export const Button = styled.button `
  cursor: pointer;
  border-radius: 4px;
  background-color: transparent;
  padding: 8px 20px;
  border: 2px solid var(--main-color);
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  color: var(--main-color);
  &:hover {
    background-color: var(--main-color);
    color: #fff;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
`