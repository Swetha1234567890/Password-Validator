// Style your elements here

import styled from 'styled-components'

export const Container = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  background-color: #383a4e;
  padding: 60px;
  border-radius: 5px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  color: #ffffff;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #f8fafc;
`

export const Input = styled.input`
  background-color: #edeeff;
  border-style: none;
  height: 40px;
  width: 350px;
  box-shadow: 0px 4px 16px 0px #434451;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ef4444;
`
