import Head from "next/head";
import { Button, Select, FormLabel,  } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import GrantCard from "../../components/GrantCard";
import { useState } from "react";



export interface CardProps {
  link: string
  title: string
}

export const getStaticProps: GetStaticProps<{ grants: CardProps[] }> = async (
  context
) => {
  const url = process.env.APIFY
  const res = await axios.get(url!)
  const grants: CardProps[] = await res.data

  return {
    props: {
      grants,
    },
  }
}

export default function Home({ grants }: InferGetStaticPropsType<typeof getStaticProps>) {

  const [ecosystem, setEcosystem] = useState('All')
  const filteredgrant = (e: any) => {
    e.preventDefault()
    setEcosystem(e.target.value)
  }
  console.log(ecosystem)
  return (
    <main className="">
      <Head>Grant Cart</Head>
      <header className="z-10 fixed top-0 left-0 backdrop-blur-sm w-full">
        <div className="flex flex-row justify-between  items-center p-4 ">
          <p className="text-2xl font-bold">🎁 Grant Cart</p>
        </div>
      </header>
      <div className="my-20 p-4 text-center">
        <h1 className="text-4xl font-bold my-2">
          Get the latest info about{" "}
          <span className="text-purple-500">Solana Grants</span> in one place.
        </h1>
        <Button colorScheme="purple" size={"lg"}>
          <a href="#main">   Get Started
          </a>
        </Button>
      </div>
      <section id='main' className="bg-gray-100 w-full h-fit p-4">
        <div className="my-2 mb-8">
          <p className="text-xl font-bold">Filter</p>
          <div className="flex gap-2">
            <div className="flex flex-col w-1/2">
              <FormLabel>Ecosystem</FormLabel>
              <Select value={ecosystem} onChange={filteredgrant} variant='outlined'>
                <option  value={'all'}>All</option>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 justify-center">
          {grants.map((data, i) => (
            <GrantCard link={data.link} title={data.title} key={i} />
          ))}
        </div>
      </section>
      <footer className="text-center py-10 bg-black text-gray-400">
        Built with ❤ by{" "}
        <a href="https://twitter.com/_dynage" className='underline' target="_blank">
          @Dynage
        </a>
      </footer>
    </main>
  );
}
