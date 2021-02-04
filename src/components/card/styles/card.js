import styled from 'styled-components/macro'

export const Title = styled.p`
  font-size: 1.4vw;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;
  
  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  } 
  
`


export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection === 'row' ? 'row' : 'column'};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
`

export const SubTitle = styled.p`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
`

export const Text = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: white;
  margin-bottom: 0;
  user-select: none;
  line-height: normal;
`

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({fontWeight}) => fontWeight === 'bold' ? 'bold' : 'normal'};
`

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;
  
  @media(max-width: 1000px) {
    height: auto;
    background-size: auto;
    
    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    
    ${FeatureText} {
      font-size: 14px;
    }
    
  }
`



export const FeatureTitle = styled(Title)`
  margin-left: 0;
`

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  
  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`

export const Maturity = styled.div`
  background-color: ${({ rating }) => rating >= 15 ? 'red' : 'green'};
  border-radius: 15px;
  width: 20px;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,.2);
  margin-right: 10px;
  font-size: 12px;
`

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;
  
  @media(max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`

export const Meta = styled.div`
  display: block;
  visibility: hidden;
  position: absolute;
  bottom: 0;
  opacity: 0;
  padding: 20px;
  background-image: linear-gradient(to bottom,  rgba(0,0,0,0) 0%, rgba(12,12,13,0.6) 30%, rgba(0,0,0,1) 100%);
  transition: visibility 0.3s linear,opacity 0.3s linear;
`

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`



export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
  border-radius: 4px;
  vertical-align: center;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition: transform .4s, z-index .2s;
  z-index: 98;
  backface-visibility: hidden;
  vertical-align: top;

  transform-origin: center;
  
  &:first-of-type {
    transform-origin: left;
  }
  
  &:last-of-type {
    transform-origin: right;
  }
  
  &:hover {
    transform: scale(1.4);
    z-index: 99;
  }
 
  @media(min-width: 1100px) {
    &:hover ${Meta} {
      visibility: visible;
      opacity: 1;
      z-index: 100;
    }
  }
  
  &:first-of-type {
    margin-left: 56px;
    
    @media(max-width: 1000px) {
      margin-left: 30px;
    }
  }
  
  &:last-of-type {
    margin-right: 56px;
    
    @media(max-width: 1000px) {
      margin-right: 30px;
    }
  }
  
`

