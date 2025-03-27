import React from 'react'
import aboutimage from './../../assets/images/about.jpg'
import cv from './../../../public/adel-elbamby1__MERN stack developer.pdf'
export default function About() {
  return (
    <>
    {/* about section */}
    <section className="about">
      <div className="continer">
        <h2 className="title">about me</h2>
        <div className="left-right ">
          <div className="img ">
            <img src={aboutimage} alt="notfound " />
          </div>
          <div className="text ">
            <h3>
              I'm Adel and I'm a <span>develober</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              nulla distinctio corporis labore sapiente ratione ipsam. Corrupti
              dolores dicta, exercitationem sequi tempora cupiditate perspiciatis
              voluptatem animi odit alias fuga est! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quaerat reiciendis ab, illum non
              beatae dolorum voluptatibus blanditiis quasi iste? Assumenda iste
              veritatis sapiente, possimus tenetur commodi earum tempore veniam
              laudantium.
            </p>
            <a href={cv} download="Adel_CV.pdf">Download CV</a>

          </div>
        </div>
      </div>
    </section>
  </>
  )
}

