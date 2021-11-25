import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div id="contact">
            <div className="contact-container py-5">
            <div className="d-lg-flex container mx-auto ">
                <div className="pe-lg-5">
                    <h2>Quick Contact</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <h5>Email</h5>
                    <p><i class="fas fa-envelope-open fs-5 icon"></i> masumhu691@gmail.com</p>
                    <h5>Social Media</h5>
                    <div className="fonts">
                        <i class="fab fa-github git"></i>
                        <i class="fab fa-facebook fbook ms-2"></i>
                        <i class="fab fa-twitter twit"></i>
                        <i class="fab fa-linkedin linkd"></i>
                    </div>
                    <h5 className="mt-3">Location</h5>
                    <p><i class="fas fa-map-marker-alt fs-5 icon"></i> Mymensingh, Bangladesh</p>
                </div>
                <div>
                    <form class="row g-3 ps-lg-5 contact-form">
                        <div class="col-md-6">
                            <label htmlFor="name" class="form-label">Name *</label>
                            <input type="text" class="form-control shadow border-0 p-3 name-input" id="inputEmail4" placeholder="Your name" required/>
                        </div>
                        <div class="col-md-6">
                            <label htmlFor="email" class="form-label">Email *</label>
                            <input type="email" class="form-control shadow border-0 p-3" placeholder="Your email" required />
                        </div>
                        <div class="col-12">
                            <label htmlFor="subject" class="form-label">Subject</label>
                            <input type="email" class="form-control shadow border-0 p-3" placeholder="Subject" />
                        </div>
                        <div class="col-12">
                            <label htmlFor="subject" class="form-label">Message *</label>
                            <textarea className="rounded w-100 border-0 shadow p-3" rows="6" placeholder="Your message" required></textarea>
                        </div>
                        <div class="col-12">
                            <button type="submit" class=" btn submit-btn"><i class="fas fa-paper-plane"></i> Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;



// import React from 'react';

// const Contact = () => {
//     return (
//         <div>
//             <div class="row row-cols-1 row-cols-md-2 g-4 container mx-auto d-lg-flex align-items-center">
//                 <div class="col">

//                 </div>
//                 <div class="col">

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;
