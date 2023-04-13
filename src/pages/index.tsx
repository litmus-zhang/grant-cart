import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Button, Badge, Select, FormLabel, VStack } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const GrantCard = () => {
  const description = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure,
  dolorum fuga saepe excepturi nostrum tempora? Adipisci maxime
  dignissimos minus accusamus natus obcaecati eligendi. Error accusantium
  aut ipsum voluptate ipsa.`;
  const formatedDesc =
    description.length > 100 ? description.slice(0, 100) + "..." : description;
  return (
    <div className="group p-2 border w-72 h-fit pb-4 rounded shadow-sm hover:border-purple-500 ">
      <Image
        alt="image"
        src={"https://bit.ly/placeholder-img"}
        width={300}
        height={500}
        className="object-fit rounded"
      />
      <Badge colorScheme="blue">Open</Badge>
      <h1 className="text-xl font-bold truncate">Grant Name</h1>
      <p className="text-sm py-1">{formatedDesc}</p>
      <Button colorScheme="purple" size={"md"}>
        Apply 💫
      </Button>
    </div>
  );
};
export default function Home() {
  const grants = new Array(10).fill(0);
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
          Get Started
        </Button>
      </div>
      <div className="bg-gray-100 w-full h-fit p-4">
        <div className="my-2 mb-8">
          <p className="text-xl font-bold">Filter</p>
          <div className="flex gap-2">
            <div className="flex flex-col w-1/3 ">
              <FormLabel>Status</FormLabel>
              <Select>
                <option>Open</option>
                <option>Closed</option>
              </Select>
            </div>
            <div className="flex flex-col w-1/3">
              <FormLabel>Project Type</FormLabel>
              <Select>
                <option>Defi</option>
                <option>Developer Tool</option>
                <option>Infrastructure</option>
                <option>NFT</option>
              </Select>
            </div>
            <div className="flex flex-col w-1/3">
              <FormLabel>Blockchain</FormLabel>
              <Select>
                <option>Solana</option>
                <option>Cross Chain</option>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 justify-center">
          {grants.map((_, i) => (
            <GrantCard key={i} />
          ))}
        </div>
      </div>
      <footer className="text-center py-10 bg-black text-white">
        Built with ❤ by{" "}
        <a href="https://twitter.com/_dynage" target="_blank">
          @Dynage
        </a>
      </footer>
    </main>
  );
}
