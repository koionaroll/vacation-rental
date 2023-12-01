import styled from 'styled-components'
import Header from './components/Header'
import HeroGallery from './components/HeroGallery'
import Description from './components/Description'
import PriceTag from './components/PriceTag'
import Footer from './components/Footer'

const Title = styled.div`
  color: black;
`


function App() {

  return (
    <>
      <Title>hello world</Title>
    <Header />
    <HeroGallery />
    <Description />
    <PriceTag />
    <Footer />
    </>
  )
}

export default App
