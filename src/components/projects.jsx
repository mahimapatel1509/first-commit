import React from 'react'


export default function Projects() {
  return (
    <>
      <div className="container m-5">
      <h1 className="text-white m-4 text-start fw-lighter fs-4 display-6">My <strong className='text-warning'>Projects</strong></h1>
      <div className="container text-center">
  <div className="row row-cols-2 text-white d-flex justify-content-center" >
    <div className="col border col-xl-3 m-4 img1 img-fluid rounded">
    </div>
    <div className="col border col-xl-3 m-4 img2 img-fluid rounded">
    
    </div>
    <div className="col border col-xl-3 m-4 img3 img-fluid rounded">
   
    </div>
    <div className="col border col-xl-3 m-4 img4 img-fluid rounded">
  
    </div>
    <div className="col border col-xl-3 m-4 img5 img-fluid rounded">

    </div>
    <div className="col border col-xl-3 m-4 img6 img-fluid rounded">

    </div>
  </div>
</div>

{/* btns */}
<div className="btns d-flex justify-content-center">
<button type="button" class="btn btn-outline-primary me-md-2">Real Estate Webpage</button>
<button type="button" class="btn btn-outline-secondary me-md-2">Clinic Site</button>
<button type="button" class="btn btn-outline-success me-md-2">Concert Site</button>
<button type="button" class="btn btn-outline-danger me-md-2">Tic Tac Toe</button>
<button type="button" class="btn btn-outline-warning me-md-2">To DO List</button>
<button type="button" class="btn btn-outline-info me-md-2">Bubble Game</button>
</div>

      </div>
    </>
  )
}
