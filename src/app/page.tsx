import Image from 'next/image'
import Hero from './components/Hero'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Sixth from './components/Sixth'

export default function Home() {
  return (
    <main >
     <Hero />
     <Third />
     <Fourth />
     <Fifth />
     <Sixth />
    </main>
  )
}
