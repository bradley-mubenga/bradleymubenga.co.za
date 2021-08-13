import Head from 'next/head';

//React & Next.js Components
import Header from '../components/Header';

export default function CaseStudy() {
  return (
    <>
      <Head>
        <title>{''}</title>
        <meta name="description" content={''} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className="fpParentElement">
          <div>
            <h1>S</h1>
            
            <p>Thanks for reading this case study, I hope you enjoyed it. Feel free to reach out via social media or contact me via the email below.</p>
          </div>
      </main>
    </>
  )
}