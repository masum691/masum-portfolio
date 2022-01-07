import React, {useRef} from 'react';
import './Contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_11gsc2c', 'template_253rric',form.current, 'user_QVa3GyxGfUi3DiQ6Vig26')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };
    return (
        <div id="contact">
            <div className="contact-container py-5">
                <div className="d-lg-flex container mx-auto ">
                    <div className="pe-lg-5">
                        <h4>Quick Contact</h4>
                        <p>Don't Like Form? call me - 01996834815 </p>
                        <h5>Email</h5>
                        <p> masumhu691@gmail.com</p>
                        <h5>Social Media</h5>
                        <div className="fonts">
                            <a href="https://github.com/masum691/" target="_blank" rel="noreferrer"><i class="fab fa-github git"></i></a>
                            <a href="https://web.facebook.com/profile.php?id=100071095920767" target="_blank" rel="noreferrer"><i class="fab fa-facebook fbook ms-2"></i></a>
                            <i class="fab fa-twitter twit"></i>
                            <a href="https://www.linkedin.com/in/md-masum-mia-579ab320a/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin linkd"></i></a>
                        </div>
                        <h5 className="mt-3">Location</h5>
                        <p><i class="fas fa-map-marker-alt fs-6 icon"></i> Mymensingh, BD</p>
                    </div>
                    <div>
                        <form ref={form} onSubmit={sendEmail} class="row g-3 ps-lg-5 contact-form">
                            <div class="col-md-6">
                                <label htmlFor="name" class="form-label">Name *</label>
                                <input type="text" name="name" class="form-control shadow border-0 p-2 name-input" id="inputEmail4" placeholder="Your name" required />
                            </div>
                            <div class="col-md-6">
                                <label htmlFor="email" class="form-label">Email *</label>
                                <input type="email" name="email" class="form-control shadow border-0 p-2" placeholder="Your email" required />
                            </div>
                            <div class="col-12">
                                <label htmlFor="subject" class="form-label">Subject</label>
                                <input type="text" name="subject" class="form-control shadow border-0 p-2" placeholder="Subject" />
                            </div>
                            <div class="col-12">
                                <label htmlFor="subject" class="form-label">Message *</label>
                                <textarea className="rounded w-100 border-0 shadow p-3" name="message" rows="4" placeholder="Your message" required></textarea>
                            </div>
                            <div class="col-12">
                                <input type="submit" class="btn submit-btn shadow" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

