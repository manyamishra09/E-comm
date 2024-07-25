import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={'About us - The Infinity store'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            
        "The Infinity Store" is a cutting-edge ecommerce platform that redefines
         the online shopping experience. With an intuitive interface and seamless
          navigation, users are immersed in a universe of infinite possibilities.
           Offering a diverse range of products from fashion and electronics to home
            decor and beyond, The Infinity Store caters to every need and desire. Its
             advanced search and recommendation algorithms ensure that shoppers
              discover exactly what they're looking for while also surprising them with
               new and exciting finds. With secure payment options and lightning-fast
                delivery, customers can shop with confidence and convenience. Whether
                 browsing through curated collections or exploring trending items, The 
                 Infinity Store promises an endless journey of discovery and satisfaction.
                  Welcome to a world where shopping knows no bounds. Welcome to The Infinity Store.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;