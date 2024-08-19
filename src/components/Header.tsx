
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


interface IHeaderProps{
  brand:string
  url:string

}

const Header: React.FunctionComponent<IHeaderProps> = (Props) => {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Props.url}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
       {Props.brand}
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}


export default Header

