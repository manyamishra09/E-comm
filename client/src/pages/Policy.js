import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={'Privacy Policy'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.jpg"
            alt="contactus"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
          <p>1. Information Collection:
We collect personal information provided by users voluntarily, such as name, email address, 
shipping address, and payment details during the account creation and checkout process.
</p>

<p>2. Use of Information:
The information we collect is utilized to process orders, personalize user experience,
 communicate with customers regarding their orders and inquiries, improve our services,
  and tailor marketing efforts.</p>

   <p>3. Information Sharing:
We may share personal information with trusted third-party service providers to facilitate
 order fulfillment, payment processing, and marketing activities.</p>

 <p>By using The Infinity Store website and services, you consent to the terms outlined in this Privacy Policy. Last updated:31/3/24.</p>
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;