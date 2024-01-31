import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Partnership Section */}
      <div
        name="contact"
        className="h-fit min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 w-full pt-20"
      >
        <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-start items-start w-full h-full text-white">
          <div>
            <p className="text-4xl sm:text-5xl font-bold border-b-4 border-gray-500 p-2 inline">
              Partnering for Future Success
            </p>
          </div>
          <div className="mt-6">
            <p>
              As we continue to innovate and expand our real-time software
              solutions...<br>
              </br>
               our focus remains on creating lasting
              partnerships with our clients. We are not just a service provider;
              we are a partner invested in your success. Together, we navigate
              the complexities of the digital world, driving towards a future
              where real-time solutions translate into real-world success.
              {/* Full text here */}
            </p>
          </div>
        </div>

        {/* Contact Section */}

        <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-start items-start w-full h-full text-white">
          <div>
            <p className="text-4xl sm:text-5xl font-bold border-b-4 border-gray-500 p-2 inline">
              Get in Touch
            </p>
          </div>
          <div className="mt-6">
            <p>
              We are here to answer your queries and discuss how we can meet
              your technology needs...
              {/* Full text or contact form here */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
