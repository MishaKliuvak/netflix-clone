import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;
  
  a {
    display: flex;
  }
  
  @media(max-width: 1000px) {
    margin: 0 30px;
  }
  
`

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;

  @media(max-width: 1100px) {
    ${({dontShowOnSmallViewPort}) => dontShowOnSmallViewPort && 'background: none;'}
  }
`

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;
  
  @media(min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
  
`

export const ButtonLink = styled(Link)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: none;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  
  &:hover{
    background-color: #f40612;
  }
`

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  
  @media(max-width: 1100px) {
    display: none;
  }
`
export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0,0,0,.45);
  margin: 0;
`

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  font-weight: bold;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0,0,0,.45);
  margin: 0;
  margin-bottom: 20px;
`
export const TextLink = styled.p`
  color: white;
  margin-right: 30px;
  cursor: pointer;
  font-weight: ${({active}) => active === true ? '700' : 'normal'};
  
  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`

export const Group = styled.div`
    display: flex;
    align-items: center;
`

export const Picture = styled.button`
    background: url(${({src}) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`
export const Dropdown = styled.div`
  display: none;
    background-color: black;
    position: absolute;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;
    
    ${Group}:last-of-type ${TextLink} {
        cursor: pointer;
    }
    ${Group} {
        margin-bottom: 10px;
        
        &:last-of-type {
            margin-bottom: 0;
        }
        
        ${TextLink}, ${Picture} {
            cursor: default;
        }
        
        button {
            margin-right: 10px;
        }
        
        p {
            font-size: 14px;
            margin-bottom: 0;
            margin-top: 0;
        }
    } 
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;
    
    button {
        cursor: pointer;
    }
    
    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`
export const Search = styled.div`
    display: flex;
    align-items: center;
    
    svg {
        color: white;
        cursor: pointer;
    }
    
    @media(max-width: 700px) {
        display: none;
    }
`
export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    
    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`

export const SearchInput = styled.input`
    background-color: #44444459;
    color: white;
    border: 1px solid white;
    transition: width .5s;
    height: 30px;
    font-size: 14px;
    margin-left: ${({active}) => active ? '10px' : '0'};
    padding: ${({active}) => active ? '0 10px' : '0'};
    opacity: ${({active}) => active ? '1' : '0'};
    width: ${({active}) => active ? '200px' : '0'};
`
