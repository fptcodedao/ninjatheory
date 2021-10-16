/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import './Presale.scss';

import Banner from '../../assets/img/whitelist-open.png';

const PreSale: React.FC = () => {
  return (
    <section>
      <div className="px-20-px wrapper:px-0 max-w-wrapper m-auto">
        <div className="mb-6 md:mb-14">
          <h3
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-out"
            className="mb-0 md:mb-2 font-roboto font-light md:font-thin text-white leading-tight md:leading-none tracking-tight text-24 md:text-36"
          >
            🌟Presale
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
                <p className="text-14 pb-2">Price: <strong>1 BNB = 750,000 RUSH</strong></p>
                <p className="text-14 pb-2">Pancake listing price: <strong>1 BNB = 650,000 RUSH</strong></p>
                <p className="text-14 pb-2">Pancake listing date: Immadierty after hard cap met or <strong> 23 May 18:00 UTC</strong></p>
                <p className="text-14 pb-2">Max cap per wallet — 3,750,000 RUSH tokens <strong>(~5 BNB) No minimum.</strong></p>
                <p className="text-14 pb-2"><strong>Tokens are locked until presale end.</strong></p>
                <p className="text-14 pb-2">Farming start at block: #7667919 and Buyback will be activated immediately after presale.</p>
                <p className="text-14 pb-2">Liquidity locked on RUSH contract for 90 days. For evidence read function "LPLocked" then input RUSH's contract address and click query for LP unlock Unix time.</p>
                <p className="text-14 pb-2">Softcap and Hardcap amounts will show minimum and maximum liquidity on added RUSH-BNB pool.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreSale;