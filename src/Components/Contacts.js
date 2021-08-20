import React from 'react'
import emailjs from 'emailjs-com'

const Contacts = () => {

    const serviceID = "service_3u8qxds"
    const templateID = "template_ajbbezr"
    const userID="user_xdjOtEdYfFHMqkoGBEyF6"

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out the form to contact me.</p>
            </div>
            <div className="container">
                <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                    <div className="text-center">
                        <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        />
                        <div className="line"></div>
                        </div>
                        <div className="text-center">
                        <input
                        id="phone"
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        />
                        <div className="line"></div>
                        </div>
                        <div className="text-center">
                        <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        />
                        <div className="line"></div>
                        </div>
                        <div className="text-center">
                        <input
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        />
                        <div className="line"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                    <div className="text-center">
                    <textarea
                    id="description"
                    type="text"
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        ></textarea>
                        <div className="line"></div>
                        </div>
                        <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                    </div>
                </div>
                </form>
            </div>
            </div>
            )
}

            export default Contacts
