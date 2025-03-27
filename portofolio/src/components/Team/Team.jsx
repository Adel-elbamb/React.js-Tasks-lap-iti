import React from 'react'
import profile from '../../assets/images/prtoflio.jpg'
export default function Team() {
  return (
    <>
  {/* my teams */}
  <section className="teams">
    <div className="continer">
      <h2 className="title">My teams</h2>
      <div className="contant">
        {/* person one  */}
        <div className="person">
          <div className="cont">
            <img src={profile} width="50px" height="50px" />
            <h3>adel Elbamby</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              est quod nam dolorem, obcaecati eos.
            </p>
          </div>
        </div>
        {/* two */}
        <div className="person">
          <div className="cont">
            <img src={profile} width="50px" height="50px" />
            <h3>adel Elbamby</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              est quod nam dolorem, obcaecati eos.
            </p>
          </div>
        </div>
        {/* three */}
        <div className="person">
          <div className="cont">
            <img src={profile} width="50px" height="50px" />
            <h3>adel Elbamby</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              est quod nam dolorem, obcaecati eos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
