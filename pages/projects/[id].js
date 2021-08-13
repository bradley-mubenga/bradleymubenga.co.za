import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

//React & Next.js Components
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';

//
function CaseStudy({ projectData }) {
  const router = useRouter();
  const caseStudy = projectData[router.query.id];

  //This state and useEffect changes the hostname variable depending if it is in production or development.
  const [ hostName, setHostName ] = useState('');

  useEffect(() => {
    if (window.location.hostname === 'localhost') {
      setHostName('http://localhost:1337')
    }

    else {
      setHostName('https://server-my-portfolio.herokuapp.com')
    }
  }, [])

  return (
    <>
    {
      caseStudy ? (
        <Head>
          <title>{caseStudy.title}</title>
          <meta name="description" content={caseStudy.description} />
          <link rel="icon" href="/favicon.png" />
        </Head>
      ) : ('')
    }

    <Header />

    { caseStudy ? (
      <main id="caseStudy" className="py-5 fpChildElement animate__animated animate__fadeIn">
            <div className="py-5 d-flex justify-content-center">
                <div className="d-flex flex-column">
                    <article className="container">
                      <header>
                        <h1 className="largeH1">{ caseStudy.title }</h1>
                        <p className="pText">{ caseStudy.description }</p>

                        {/* Link To Project And Repo*/}
                        <div className="pt-3 pb-4">
                          <Link href={ caseStudy.projectLink }>
                            <a target="_blank" className="linkText">Website</a>
                          </Link>

                          <span className="px-3"></span>

                          <Link href={ caseStudy.githubLink }>
                            <a target="_blank" className="linkText">Github Repo</a>
                          </Link>
                        </div>
                      </header>

                      <div id="aboutImage"> <Image alt="" src={`${hostName}${caseStudy.imageOne.formats.medium.url}`} height="720" width="1280"/></div>

                      <div className="py-5">
                        <p className="pText">{ caseStudy.paragraphOne }</p>
                      </div>

                      <div>
                        <h1 className="largeH1">Before.</h1>
                        <Image alt="" src={`${hostName}${caseStudy.imageTwo.formats.medium.url}`} height="720" width="1280"/>
                      </div>

                      {console.log(window.location)}

                      <div className="py-5">
                        <p className="pText">{ caseStudy.paragraphTwo }</p>
                      </div>

                      <div>
                        <h1 className="largeH1">After.</h1>
                        <Image alt="" src={`${hostName}${caseStudy.imageThree.formats.medium.url}`} height="720" width="1280"/>
                        <Image alt="" src={`${hostName}${caseStudy.imageOne.formats.medium.url}`} height="720" width="1280"/>
                      </div>

                      <div className="py-5">
                        <p className="pText">{ caseStudy.paragraphTwo }</p>
                        <br></br>
                        <p className="pText">Thanks for reading this case study, I hope you enjoyed it. Feel free to reach out via social media or contact me via the email below.</p>
                      </div>
                    </article>

                    <div className="text-center pt-5">
                      <Link href="mailto:mubengabradley@gmail.com">
                          <a className="pText pt-5 linkText"><Image alt="" src="/icons/email-icon.png" height="35" width="35" className=' animate__animated animate__bounce imageLink' /> <span className="px-1"></span>mubengabradley@gmail.com</a>
                      </Link>
                    </div>
                </div>
            </div>
      </main>
    ) : (
      <div className="d-flex justify-content-center align-items-center fpChildElement">
        <div className="spinner-grow text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
    
    }
    </>
  )
}

export default CaseStudy;