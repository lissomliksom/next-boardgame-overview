import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import Search from '../components/Search'
import Boardgames from '../components/Boardgames'
import Logo from '../public/images/logo.svg'

export default function Home() {
  const [searchPhrase, setSearchPhrase] = useState('')

  return (
    <Layout>

      <Image src={Logo} alt="Boardgame logo" className="w-36 h-36 mx-auto my-10" />

      <Search 
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />

      <Boardgames 
        searchPhrase={searchPhrase}
      />

    </Layout>
  )
}
