import React from "react";

export default function Skills() {
  return (
    <>
      <div className="container ">
        <h1 className="text-white m-4">Skills</h1>
        <p className="text-white text-start fw-lighter fs-4 display-6">Area Of <strong className="text-warning">Expertise</strong></p>
        
        <div class="container text-white m-5 ">
       
  <div class="row  justify-content-center gap-5">

    <div class="col-6 col-sm-3">
    <h2 className="text-white">Professional Skill</h2>
    <p className="">HTML</p>  
   <div class="progress "style={{width: "100%",height:"10px"}} role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning " style={{width: "100%"}}>100%</div>
</div>

{/* 2nd */}
<p className="m-3">CSS</p>
<div class="progress "style={{width: "100%",height:"10px"}} role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style={{width: "95%"}}>95%</div>
</div>

{/* 3rd */}
<p className="m-3">Javascript</p>
<div class="progress "style={{width: "100%",height:"10px"}} role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style={{width: "75%"}}>75%</div>
</div>

{/* 4th */}
<p className="m-3">Bootstrap</p>
<div class="progress "style={{width: "100%",height:"10px"}} role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style={{width: "85%"}}>85%</div>
</div>

{/* 5th */}
<p className="m-3">React Js</p>
<div class="progress "style={{width: "100%",height:"10px"}} role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style={{width: "75%"}}>75%</div>
</div>

    </div>

     
    <div className="col-6 col-sm-3">
    <h2 className="text-white">Personal Skill</h2>
    <p className="">Consistency</p>  
   <div class="progress "style={{width: "100%",height:"10px"}} role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning " style={{width: "90%"}}>90%</div>
</div>

{/* 2nd */}
<p className="m-3">Focusing</p>
<div class="progress "style={{width: "100%",height:"10px"}} role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style={{width: "75%"}}>85%</div>
</div>

{/* 3rd */}
<p className="m-3">Problem Solving</p>
<div class="progress "style={{width: "100%",height:"10px"}} role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style={{width: "65%"}}>65%</div>
</div>

{/* 4th */}
<p className="m-3">Enthusiast</p>
<div class="progress "style={{width: "100%",height:"10px"}} role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style={{width: "85%"}}>85%</div>
</div>


    </div>
    </div>
</div>
</div>

    </>
  )
}
