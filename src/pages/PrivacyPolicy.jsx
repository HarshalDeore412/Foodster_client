import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
   <div>
    <div>
        <Navbar />
    </div>
    <div className="bg-pink-100  w-full mx-auto h-screen text-gray-800 p-8">
      <div className="container mx-auto">
        <div className="bg-white rounded shadow p-6 m-4">
          <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
          <p className="mt-4">
            At Foodster, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you use our services and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-4">Information We Collect</h2>
          <p>
            We collect several types of information from and about users of our services, including information by which you may be personally identified, such as name, postal address, email address, telephone number, and any other identifier by which you may be contacted online or offline ("personal information").
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
          <p>
            We use information that we collect about you or that you provide to us, including any personal information, to provide you with our services, to fulfill any other purpose for which you provide it, to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, and to notify you about changes to our services or any products or services we offer or provide through it.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-4">Your Rights</h2>
          <p>
            You have the right to access and receive a copy of the personal information we hold about you, to rectify any personal information held about you that is inaccurate, to request the deletion of personal information held about you, and to data portability.
          </p>
          <p className="mt-4">
            Please note that this is a template and should be customized to fit the specific practices of your business. It is also recommended to consult with a legal expert to ensure that your privacy policy complies with all applicable laws and regulations.
          </p>
        </div>
      </div>
    </div>
    <div>   
            <Footer />
    </div>
   </div>
  );
};

export default PrivacyPolicy;
