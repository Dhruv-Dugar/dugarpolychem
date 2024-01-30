import FadingTitle from "./animatedTitle"

// export const Header = (props) => {
// }

function LandingPage() {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h2>
                  <FadingTitle />
                  <span></span>
                </h2>
                <p>
                We are Dealers, Distributors & Importers of PVC Resin, Plasticisizers & Additives.
                </p>
                <a href='#about' className='btn btn-custom btn-lg page-scroll'>
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default LandingPage
