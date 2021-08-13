import Head from 'next/head';

//React & Next.js Components
import Header from '../components/Header';
import { HeroSection, AboutSection, RecentProjects, ContactForm } from '../components/Home';

export default function Home({ projectData }) {
  return (
    <>
      <Head>
        <title>Bradley Mubenga | Web Developer, Leader, Human.</title>
        <meta name="description" content="Bradley is a full-stack developer who loves coffee, mayonnaise and using technology to solve problems." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className="fpParentElement">
        <HeroSection />
        <AboutSection />
        <RecentProjects projectData={projectData}/>
        <ContactForm />
      </main>
    </>
  )
}