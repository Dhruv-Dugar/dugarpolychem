import FadeExample from "./animatedTitle"

export const Header = (props) => {
    return (
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 intro-text'>
                  <h2>
                    <FadeExample/>
                    <span></span>
                  </h2>
                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <a
                    href='#about'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Know More
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
