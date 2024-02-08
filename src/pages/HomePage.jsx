import React from 'react'
import Container from '../components/Container'
import Product from '../components/Product'
export default function HomePage() {
  return (
    <Container>
        <Product price="5.00"/>
        <Product price="7.00"/>
        <Product price="4.00"/>
        <Product price="8.00"/>
        <Product price="12.00"/>
    </Container>
  )
}
