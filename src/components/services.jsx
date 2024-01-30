import { services } from "./constants";

function Services() {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>


          </p>
        </div>
        <div className='row'>
          {services ? services.map((d, i) => (
            <div key={`${d.name}-${i}`} className='col-md-4'>
              <i className={d.icon}></i>
              <div className='service-desc'>
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))
            : 'Unexpected Error in Constants.jsx'}
        </div>
      </div>
    </div>
  )
}

export default Services;