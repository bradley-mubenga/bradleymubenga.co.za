import Head from 'next/head';
import Image from 'next/image';
import NavbarDesktop from '../components/navbarDesktop';
import NavbarMobile from '../components/navbarMobile';
import { useMediaQuery } from "@chakra-ui/react";


export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 1100px)");

  return (
    <>
      {isMobile ? (
        <NavbarMobile />
      ) : (
        <NavbarDesktop />
      )}
    </>
  )
}
