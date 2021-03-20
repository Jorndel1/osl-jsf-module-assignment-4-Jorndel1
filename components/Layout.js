import Head from "next/head";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
export default function Layout({ children, metaData }) {
  return (
    <>
      <Head>
        <title>{metaData.title ? metaData.title : "NextJS - Untitled"}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metaData.description} />
        <meta name="author" content={metaData.author} />
        <meta name="keywords" content={metaData.keywords} />
      </Head>

      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link href="/">
            <a className="navbar-brand">NextJS</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/results">
                  <a className="nav-link">Results</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us">
                  <a className="nav-link">About Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="container">{children}</div>
    </>
  );
}
