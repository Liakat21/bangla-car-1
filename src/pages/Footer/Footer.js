import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer bg-info text-white  ">
            <div className="container my-4 d-flex ">
                <div className="row row-cols-1 row-cols-md-3 g-4 d-flex ">

                    <div className=" col-md-4 ">
                        <h1>Our Vision :</h1>
                        <h4> To be a reluxable jurney</h4>
                        <p>One always quickly consider that for the developmental <br /> role of education in a country the tertiary level is important.</p>
                        <p>email : banglacar@gmail.com</p>
                    </div>
                    <div className="col-md-4 ">
                        <h1>Contact Info :</h1>
                        <h4> Our Address</h4>
                        <p>7A, 89/2, Haque chamber,
                            West Panthapath,
                            Dhaka -1215, <br />
                            Bangladesh
                            +88-01971-746663

                            +88-01972-746663

                            info@shonod.com</p>
                        <p>email : banglacar@gmail.com</p>
                    </div>
                    <div className="col-md-4 ">
                        <h3>Payment :</h3>
                        <img className="payment" src="https://i2.wp.com/thereviewstories.com/wp-content/uploads/2020/10/paymentgateway.jpg?w=1080&ssl=1" alt="" />
                    </div>
                </div>
               

            </div>
            <div className="text-center">
                <h5 className="text-center my-2">copyright@2021banglacar</h5>
            </div>
        </div>
    );
};

export default Footer;