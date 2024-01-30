import { Image } from "./image";
import { gallery } from "./constants";

function Gallery() {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Gallery</h2>
          <p>
            Our Product Images
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {gallery
              ? gallery.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Error loading data from constants.jsx'}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Gallery;