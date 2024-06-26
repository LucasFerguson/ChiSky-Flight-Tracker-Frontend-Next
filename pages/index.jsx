import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from './components/header';
import Footer from './components/footer';
import QueryDisplay from './QueryDisplay';
import ConsoleApp from "./components/ConsoleApp";


// this is the homepage of the website 

export default function Home() {

  console.log('Hello!');

  let aaaaa = new ConsoleApp();

  return (

    <div className={styles.homepage}>

      {/* <Header /> Header is no longer needed here because of pages/_app.tsx    */}

      

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.intro}>
        <h1>
          ChiSky Flight Tracker
        </h1> 
        </div>

        <div className={styles.info}>
        <p>
          ChiSky Flight Tracker is an experminetal flight tracker implementing SQL databases to bring you flight information using the FlightAware AeroAPI.
        </p>
        <p>
          Created by 4 students for our Database Orginization course, ChiSky is the pinacle of our semester of learning. Going above and beyond, the application has access to the AeroAPI and can update itself.  
        </p> 
        <p>
          Run an SQL Query and access our database on our Query page, learn about and contact the team on the About page, or moniter and track flights above IIT's campus on our Map page!. 
        </p>
        </div>
               
      </main>


      {/* <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style> */}

      {/* <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> */}

      {/* <Footer /> Footer is no longer needed here because of pages/_app.tsx */}

    </div>
  );
}
