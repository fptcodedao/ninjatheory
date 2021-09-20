/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

const DmcaPolicy: React.FC = () => {
  return (
    <section>
      <div className="px-20-px wrapper:px-0 max-w-wrapper m-auto">
        <div className="mb-6 md:mb-14">
          <h2
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-out"
            className="mb-0 md:mb-2 font-roboto font-light md:font-thin text-white leading-tight md:leading-none tracking-tight text-24 md:text-36 lg:text-64"
          >
            DMCA Policy
          </h2>
          <h3
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-out"
            className="-mt-1 font-roboto text-14 md:text-20 font-black"
          />
        </div>
        <div className="md:max-w-72">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-out"
            data-aos-delay={0}
            className="mb-5"
          >
            <h3 className="font-roboto font-bold text-14 md:text-18 text-white">
              DMCA Policy
            </h3>
            <div className="font-roboto text-14 md:text-14 text-white copy">
              <p>
                You are free to use our website as long as you follow our Terms of Use
                and Acceptable Use Policy.
              </p>
              <p>
                If you believe that content on our website violates your copyright,
                please contact us using the forms at
                <a href="https://www.microsoft.com/info/cpyrtInfrg.aspx">
                  https://www.microsoft.com/info/cpyrtInfrg.aspx
                </a>
                to submit your notice. Please be aware that there may be legal
                consequences for sending a false or deliberately vexatious DMCA
                takedown request. Before you send a DMCA takedown request, don't
                forget to consider whether use of the content constitutes fair use or
                is a licensed use.
              </p>
              <p>
                If appropriate, where we operate account access to our websites, we
                may terminate the accounts of users who are repeat infringers. We
                reserve the right to take down any content in our discretion.
              </p>
              <p>
                Note: Enquiries made on a takedown request form and not relevant to
                this procedure will not receive a response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DmcaPolicy;