import React from 'react'

export default function Contact() {
  return (
    <>
  {/* contant */}
  <section className="contact">
    <div className="continer">
      <div className="title">contact me</div>
      <div className="contant">
        <div className="left">
          <div className="top">
            <h3>get in touch</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              repellat quas hic. dolor sit amet consectetur adipisicing elit.
              Aliquam repellat quas hic.
            </p>
          </div>
          <div className="bottom">
            <div className="box">
              <div className="icon">
                {" "}
                <i className="far fa-user-circle" />
              </div>
              <div className="info">
                <h5>Name</h5>
                <p> Adel Elbamby</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                {" "}
                <i className="fas fa-map-marker-alt" />
              </div>
              <div className="info">
                <h5> address</h5>
                <p> Egypt,tanta</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                {" "}
                <i className="fa-solid fa-envelope" />
              </div>
              <div className="info">
                <h5> Email</h5>
                <p> adel@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <h3>message me </h3>
          <form>
            <div className="fileds">
              <div className="filed name">
                <input type="text" placeholder="name" required="" />
              </div>
              <div className="filed email">
                <input type="email" placeholder="email" required="" />
              </div>
            </div>
            <div className="filed subject">
              <input type="text" placeholder="subject" required="" />
            </div>
            <div className="  filed message">
              <textarea placeholder="message" defaultValue={""} />
            </div>
            <div className=" sub">
              <button type="submit" class="mt-5">send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
