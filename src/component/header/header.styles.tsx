import styled from 'styled-components';
import { device } from '../../media-query/media-query';
import Navbar from 'react-bootstrap/Navbar';

// const size = {
//     mobileS: '320px',
//     mobileM: '375px',
//     mobileL: '425px',
//     tablet: '768px',
//     laptop: '1024px',
//     laptopL: '1440px',
//     desktop: '2560px'
// }


export const SocialDiv = styled.div`
  box-sizing: border-box;
`
export const SocialUl = styled.ul`
  
  
  list-style-type: none;
  display: flex;
  align-items: center;
  @media ${device.tablet} { 
    gap: 2em;
  }
  @media ${device.mobile} { 
    gap: 1em;
  }
   @media ${device.desktop} {
    margin-bottom: 1em;
    padding: 1em;
    gap: 2em;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-left: 90px */
`
export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2em;
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    padding-bottom: 2em;
  }
`;

export const NavbarBrand = styled(Navbar.Brand)`
    @media ${device.mobile} {
        visibility: hidden;
        color: red;
    }
    
`;
export const NavbarToggle = styled(Navbar.Toggle)`
    @media ${device.mobile} {
        display: flex;
        flex-direction: row;
        justify-self: flex-start;
    }
`
