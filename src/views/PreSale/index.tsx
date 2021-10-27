/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import './Presale.scss';

import Banner from '../../assets/images/PRESALE.png';

const PreSale: React.FC = () => {
  const styleMain = {
    background: 'url('+require("../../assets/images/nen.png").default+')',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  }
  return (
    <section style={styleMain}>
      <div className="px-20-px wrapper:px-0 max-w-wrapper m-auto">
        <div className="mb-6 md:mb-14">
          <h3
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-out"
            className="mb-0 md:mb-2 font-roboto font-light md:font-thin text-white leading-tight md:leading-none tracking-tight text-24 md:text-36"
          >
          </h3>
          <h3
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-out"
            className="-mt-1 font-roboto text-14 md:text-20 font-black"
          />
        </div>
        <div className="md:max-w-72 m-auto">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-out"
            data-aos-delay={0}
            className="mb-5"
          >
            <div className="box-presale bg-transparent p-0">
                <img src={Banner} className="w-100" alt="" />
            </div>
            <div className="box-presale">
                <h3 className="font-roboto font-bold text-14 md:text-18 mb-3">
                    Presale details:
                </h3>
                <p className="text-14 pb-2"><strong>Price:</strong> 1 BNB = 25,000 ZBL</p>
                <p className="text-14 pb-2"><strong>Pancake listing price:</strong> 1 BNB = 22,500 ZBL</p>

                <p className="text-14 pb-2">Max cap per wallet — 45,000 ZBL tokens (2 BNB) Min buy: 225 ZBL tokens (0.01 BNB)</p>
                <p className="text-14 pb-2"><strong>Presale start date:</strong> 7th November 2021 at 7PM UTC.</p>

                <p className="text-14 pb-2">Tokens are locked until presale end.</p>

                <p className="text-14 pb-2">Liquidity locked on ZBL contract for 90 days. For evidence read function "LPLocked" then input ZBL's contract address and click query for LP unlock Unix time.</p>

                <p className="text-14 pb-2">Softcap and Hardcap amounts will show minimum and maximum liquidity on added ZBL-BNB pool.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreSale;