import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { act } from '@testing-library/react'

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
  background: linear-gradient(to bottom, rgba(0,0,0,.8) 0%, rgba(0,0,0,0) 30%, rgba(12,12,13,0.6) 50%, rgba(0,0,0,.8) 100%), 
    url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;

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
  width: 36%;
  
  @media(max-width: 1100px) {
    display: none;
  }
`
export const Text = styled.p`
  color: white;
  font-size: 1.4vw;
  line-height: 140%;
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
  margin-bottom: 50px;
`
export const TextLink = styled.p`
  color: ${({active}) => active ? 'white' : '#e5e5e5'};
  margin-right: 30px;
  cursor: pointer;
    transition: all .3s;
  font-weight: ${({active}) => active === true ? '700' : 'normal'};
  
  &:hover {
    ${({active, menu}) => (!active && menu) && `color: #b3b3b3;` };
    ${({menu}) => !menu && 'text-decoration: underline;'};
    ${({active}) => active && 'cursor: default;'};
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
    border-radius: 4px;
`
export const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    transition: opacity 3s;
    position: absolute;
    padding: 10px;
    transition: opacity .5s ease;
    opacity: 0;
    width: 100px;
    top: 32px;
    right: 0;
    
    ${Group}:last-of-type ${TextLink} {
        cursor: pointer;
        font-weight: bold;
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
        opacity: 1;
    }
`
export const Search = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    img {
        color: white;
        position: absolute;
        top: 50%;
        left: -10px;
        transform: translateY(-50%);
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
    outline: none;
    
    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`

export const SearchInput = styled.input`
    background-color: rgba(0,0,0,.8);
    color: white;
    border: 1px solid white;
    transition: width .3s;
    height: 30px;
    font-size: 14px;
    margin-left: ${({active}) => active ? '10px' : '0'};
    padding: ${({active}) => active ? '0 10px' : '0'};
    opacity: ${({active}) => active ? '1' : '0'};
    width: ${({active}) => active ? '200px' : '0'};
`
export const PlayButton = styled.button`
  box-shadow: 0 .6vw 1vw -.4vw rgba(0,0,0,.35);
    background-color: #e6e6e6;
    color: black;
    font-weight: 500;
    border-width: 0;
    padding: 1rem 1.7rem;
    border-radius: 4px;
    max-width: 130px;
    font-size: 1.5rem;
    letter-spacing: normal;
    display: flex;
    align-items: center;
    margin-top: 30px;
    cursor: pointer;
    transition: background-color .5s ease;
    
    svg {
        margin-right: 10px;
        fill: black;
        width: 35px;
        height: 35px;
    }
    
    &:hover {
        background-color: #ff1e1e;
        color: white;
    }
`
