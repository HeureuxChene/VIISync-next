import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {

  const [scroll, setScroll] = useState(0)
  const [headerInvisible, setHeaderInvisible] = useState(false)

  const [position, setPosition] = useState(0)

  const [screenWidth, setScreenWidth] = useState()

  const handleScroll = e => {
    if (e.target.scrollTop > scroll) {
      setHeaderInvisible(true)
    }
    else {
      setHeaderInvisible(false)
    }
    setScroll(e.target.scrollTop)
  }

  useEffect(() => {
    setScreenWidth(window.innerWidth)
    addEventListener('resize', () => setScreenWidth(window.innerWidth))
    return () => removeEventListener('resize', () => setScreenWidth(window.innerWidth))
  }, [])

  return (
    <>
      <Header position={position} headerInvisible={headerInvisible} />
      <main id='parralax' onScroll={e => handleScroll(e)}>
        <div id='topPage' />
        <Component scroll={scroll} setPosition={setPosition} screenWidth={screenWidth} {...pageProps} />
        <Footer />
      </main>
    </>
  )
}

export default MyApp;
