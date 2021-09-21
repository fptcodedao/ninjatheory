import React from "react";
import PositionSlide from "../../components/PositionSlide";
import './scss/Opportunities.scss';

const Opportunities: React.FC = () => {
  return (
    <>
      <div className="md:flex md:items-center md:flex-col mb-8 md:mb-0">
        <h2
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-out"
          className="font-roboto font-light md:font-thin text-white leading-tight md:leading-none tracking-tight wrapper mb-6 md:mb-14 text-24 -md:text-64 subtitle-not-block text-20 md:text-42 wrapper:text-64"
        >
          Opportunities
        </h2>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-out"
          className="font-roboto text-14 md:text-14 text-white copy px-20-px md:text-center max-w-560"
        >
          <p>
            We pride ourselves on hiring the best talent in the industry to craft
            life changing art with game changing tech.
          </p>
          <p>
            We're a diverse and welcoming team who focus on the quality of our work
            above all else and support excellence in all that we do, maintaining a
            culture that empowers deep focus and teamwork, rewards innovation and
            recognises individual growth.
          </p>
          <p>
            For those looking to work remotely outside of the UK, initially we offer
            this on a 12 month self-employed contract. We do, however, provide full
            relocation assistance, including visa’s for those wishing to relocate to
            the UK. Full details of this will be disclosed during interview.
          </p>
          <p>
            If there no openings available in your chosen path, please send your
            cover letter and CV to
            <a href="mailto:jobs@ninjatheory.com">jobs@ninjatheory.com</a>
          </p>
        </div>
      </div>
      <div className="md:max-w-wrapper md:mx-auto">
        <div>
          <div className="px-20-px wrapper:px-0">
            <div className="bg-blue-400- items-center hidden md:flex">
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-easing="ease-out"
                className="bg-red-400- gradient-text font-roboto font-black text-162 text-ninja-theory pt-1 position-count-desktop relative tracking-tighter pr-2 aos-init aos-animate"
              >
                3
              </div>
              <div className="bg-green-400-">
                <div className="font-black font-roboto text-nt-grey-light-alt text-58 uppercase tracking-tight leading-xl-tight">
                  <span
                    data-aos="fade-left"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    className="block aos-init aos-animate"
                  >
                    open
                  </span>
                  <span
                    data-aos="fade-left"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-delay={250}
                    className="block aos-init aos-animate"
                  >
                    Positions
                  </span>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay={500}
                  data-aos-easing="ease-out"
                  className="font-roboto font-black text-white text-14 uppercase tracking-wide pl-1 aos-init aos-animate"
                >
                  Find your path - Apply now
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <PositionSlide />
          </div>
        </div>
      </div>
      <div className="wrapper mb-8 md:mb-16">
        <div>{/**/}</div>
      </div>
      <div className="bg-nt-grey pt-8 pb-4 md:pb-8 md:pt-16">
        <div className="md:flex md:items-center md:flex-col mb-8 md:mb-0">
          <div className="wrapper">
            <h3
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-out"
              className="font-roboto font-black text-white uppercase text-18 md:text-30 text-center mt-8 mb-2 md:mt-16 md:mb-10"
            >
              Interview Process
            </h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-out"
            className="font-roboto text-14 md:text-14 text-white copy px-20-px text-center max-w-560 mb-6 md:mb-14"
          >
            <p>
              At Ninja Theory we strive for greatness through Excellence, Teamwork
              and Integrity. Everything we do is in the pursuit of fulfilling our
              Ninja Values and this is the reason our interviews are structured
              around these values. The interview process typically has 4 stages, as
              detailed below. Depending on the role, you may also be asked to
              complete a test as part of the recruitment process.
            </p>
          </div>
        </div>
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-16">
          <div>
            <div>
              <p className="mb-6">
                <span className="block font-roboto font-black text-white text-14 uppercase tracking-wide">
                  Stage
                </span>
                <span className="block -mt-2 -ml-1 font-black font-roboto leading-none relative text-90 text-nt-grey-light tracking-tighter">
                  01
                </span>
              </p>
              <p className="font-roboto font-bold -mt-2 text-white text-16 md:text-18">
                Integrity
              </p>
              <p className="font-roboto text-14 md:text-14 text-white pb-5">
                Lasting 25 – 30 minutes with a development director and will cover
                the following themes:
              </p>
              <ul className="font-roboto text-14 md:text-14 interview-bullet">
                <li>
                  <span className="block">
                    <strong>Transparent</strong> - sharing often, openly inviting
                    critique, engaging with peers and inspiring others.
                  </span>
                </li>
                <li>
                  <span className="block">
                    <strong>Supportive</strong> - mentoring, knowledge sharing and
                    helping others to achieve success.
                  </span>
                </li>
                <li>
                  <span className="block">
                    <strong>Respectful</strong> - holding yourself and others to
                    high standards of behaviour.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <p className="mb-6">
                <span className="block font-roboto font-black text-white text-14 uppercase tracking-wide">
                  Stage
                </span>
                <span className="block -mt-2 -ml-1 font-black font-roboto leading-none relative text-90 text-nt-grey-light tracking-tighter">
                  02
                </span>
              </p>
              <p className="font-roboto font-bold -mt-2 text-white text-16 md:text-18">
                Teamwork
              </p>
              <p className="font-roboto text-14 md:text-14 text-white pb-5">
                Lasting 25 – 30 minutes with a ninja outside of your discipline and
                will cover the following themes:
              </p>
              <ul className="font-roboto text-14 md:text-14 interview-bullet">
                <li>
                  <span className="block">
                    <strong>Proactive</strong> - remove barriers to success for
                    yourself and team.
                  </span>
                </li>
                <li>
                  <span className="block">
                    <strong>Accountable</strong> - taking responsibility for your
                    work and your teams as one.
                  </span>
                </li>
                <li>
                  <span className="block">
                    <strong>Adaptive</strong> - doing what’s needed for the team
                    regardless of your role and remit.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <p className="mb-6">
                <span className="block font-roboto font-black text-white text-14 uppercase tracking-wide">
                  Stage
                </span>
                <span className="block -mt-2 -ml-1 font-black font-roboto leading-none relative text-90 text-nt-grey-light tracking-tighter">
                  03
                </span>
              </p>
              <p className="font-roboto font-bold -mt-2 text-white text-16 md:text-18">
                Excellence
              </p>
              <p className="font-roboto text-14 md:text-14 text-white pb-5">
                Lasting 45 – 60 minutes with a ninja from your discipline and will
                cover the following themes:
              </p>
              <ul className="font-roboto text-14 md:text-14 interview-bullet">
                <li>
                  <span className="block">
                    <strong>Expert</strong> - skill, knowledge and quality of work.
                  </span>
                </li>
                <li>
                  <span className="block">
                    <strong>Inventive</strong> - creative problem solving and
                    pushing boundaries.
                  </span>
                </li>
                <li>
                  <span className="block">
                    <strong>Driven</strong> - consistent, productive and expanding
                    skills.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <p className="mb-6">
                <span className="block font-roboto font-black text-white text-14 uppercase tracking-wide">
                  Stage
                </span>
                <span className="block -mt-2 -ml-1 font-black font-roboto leading-none relative text-90 text-nt-grey-light tracking-tighter">
                  04
                </span>
              </p>
              <p className="font-roboto font-bold -mt-2 text-white text-16 md:text-18">
                Final interview
              </p>
              <p className="font-roboto text-14 md:text-14 text-white pb-5">
                Lasting 20 – 25 minutes with recruitment and will cover salary,
                benefits, relocation and visa’s (if applicable). Where we can, we
                aim to get all interviews on one day so we will try and give you as
                much notice as possible to make necessary arrangements. We always
                aim to have provided feedback on your success within 1 – 2 weeks
                following interview.
              </p>
              <ul className="font-roboto text-14 md:text-14 interview-bullet" />
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center md:flex-col mb-8 md:mb-0">
          <div className="wrapper">
            <h4
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-out"
              className="font-roboto font-black text-white uppercase text-18 md:text-30 text-center mt-8 mb-2 md:mt-16 md:mb-10"
            >
              Dress Code &amp; Location
            </h4>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-out"
            className="font-roboto text-14 md:text-14 text-white copy px-20-px text-center max-w-560 mb-6 md:mb-14"
          >
            <p>
              The accepted dress code at NT is wear what you are comfortable in,
              which we invite you to follow. We don’t have a formal dress code so we
              don’t expect you to dress formally for interview.
            </p>
            <p>
              At present, all interviews are held via video call on Microsoft Teams.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-nt-grey pt-8 pb-4 md:pb-8 md:pt-16">
        <div className="md:flex md:items-center md:flex-col mb-8 md:mb-0">
          <div className="wrapper">
            <h2
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-out"
              className="font-roboto font-light md:font-thin text-white leading-tight md:leading-none tracking-tight mb-6 md:mb-14 max-w-220 md:max-w-full text-24 -md:text-64 subtitle-not-block text-20 md:text-42 wrapper:text-64"
            >
              Even more reasons to work at Ninja Theory
            </h2>
          </div>
          {/**/}
        </div>
        <div className="max-w-1690 mx-auto px-20-px md:px-20-px">
          <div className="md:grid md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-y-18 pb-10">
            <div
              data-class="mb-6 md:w-1/2 lg:w-1/3 md:mb-12"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-out"
              data-aos-delay={0}
              className="mb-6 md:mb-0"
            >
              <div className="flex flex-row-reverse md:flex-row">
                <div className="w-64 h-64 wrapper:w-100 wrapper:h-100 bg-ninja-theory rounded-md flex-shrink-0 relative benefit-icon ml-2 md:ml-0 md:mr-2" />
                <div className="mx-2">
                  <div className="--md:w-75-p --max-w-300">
                    <div className="font-roboto font-bold -mt-2 text-white text-16 md:text-18 text-right md:text-left">
                      The Way We Work
                    </div>
                    <div className="font-roboto text-white text-14 md:mr-2 copy text-right md:text-left">
                      <p>
                        Achieving an optimal work/life balance is possible and we'll
                        support you to do this. With no fixed working hours and the
                        trust to deliver, you'll be able to find a great blend
                        between work and life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-class="mb-6 md:w-1/2 lg:w-1/3 md:mb-12"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-out"
              data-aos-delay={100}
              className="mb-6 md:mb-0"
            >
              <div className="flex">
                <div className="w-64 h-64 wrapper:w-100 wrapper:h-100 bg-ninja-theory rounded-md flex-shrink-0 relative benefit-icon mr-2 md:mr-2" />
                <div className="mx-2">
                  <div className="--md:w-75-p --max-w-300">
                    <div className="font-roboto font-bold -mt-2 text-white text-16 md:text-18">
                      Your Wellbeing
                    </div>
                    <div className="font-roboto text-white text-14 md:mr-2 copy">
                      <p>
                        We recognise that good mental and physical health is
                        important, so we will support you with a range of health
                        care benefits, from private medical and dental cover to gym
                        membership and access to free counselling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-class="mb-6 md:w-1/2 lg:w-1/3 md:mb-12"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-out"
              data-aos-delay={200}
              className="mb-6 md:mb-0"
            >
              <div className="flex flex-row-reverse md:flex-row">
                <div className="w-64 h-64 wrapper:w-100 wrapper:h-100 bg-ninja-theory rounded-md flex-shrink-0 relative benefit-icon ml-2 md:ml-0 md:mr-2" />
                <div className="mx-2">
                  <div className="--md:w-75-p --max-w-300">
                    <div className="font-roboto font-bold -mt-2 text-white text-16 md:text-18 text-right md:text-left">
                      Your Development
                    </div>
                    <div className="font-roboto text-white text-14 md:mr-2 copy text-right md:text-left">
                      <p>
                        Your development is our development. Every team member is
                        assigned a mentor, who will work with you to identify and
                        pursue your development goals both in your day-to-day work
                        and during our quarterly learning and development weeks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-class="mb-6 md:w-1/2 lg:w-1/3 md:mb-12"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-out"
              data-aos-delay={300}
              className="mb-6 md:mb-0"
            >
              <div className="flex">
                <div className="w-64 h-64 wrapper:w-100 wrapper:h-100 bg-ninja-theory rounded-md flex-shrink-0 relative benefit-icon mr-2 md:mr-2" />
                <div className="mx-2">
                  <div className="--md:w-75-p --max-w-300">
                    <div className="font-roboto font-bold -mt-2 text-white text-16 md:text-18">
                      The Way You Work
                    </div>
                    <div className="font-roboto text-white text-14 md:mr-2 copy">
                      <p>
                        We support working from home or from Ninja House, our studio
                        in Cambridge (UK). This brand new custom built studio offers
                        a luxurious setting with cutting-edge facilities at your
                        fingertips, including full motion capture stage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-class="mb-6 md:w-1/2 lg:w-1/3 md:mb-12"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-out"
              data-aos-delay={400}
              className="mb-6 md:mb-0"
            >
              <div className="flex flex-row-reverse md:flex-row">
                <div className="w-64 h-64 wrapper:w-100 wrapper:h-100 bg-ninja-theory rounded-md flex-shrink-0 relative benefit-icon ml-2 md:ml-0 md:mr-2" />
                <div className="mx-2">
                  <div className="--md:w-75-p --max-w-300">
                    <div className="font-roboto font-bold -mt-2 text-white text-16 md:text-18 text-right md:text-left">
                      Taking Time Out
                    </div>
                    <div className="font-roboto text-white text-14 md:mr-2 copy text-right md:text-left">
                      <p>
                        Taking a break is important, so you'll be given 23 days
                        holiday plus 1 additional day for each year of service. For
                        those that graduate to Master Ninja status by being with us
                        for 10 years, you'll get a four week paid sabbatical too.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-class="mb-6 md:w-1/2 lg:w-1/3 md:mb-12"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-out"
              data-aos-delay={500}
              className="mb-6 md:mb-0"
            >
              <div className="flex">
                <div className="w-64 h-64 wrapper:w-100 wrapper:h-100 bg-ninja-theory rounded-md flex-shrink-0 relative benefit-icon mr-2 md:mr-2" />
                <div className="mx-2">
                  <div className="--md:w-75-p --max-w-300">
                    <div className="font-roboto font-bold -mt-2 text-white text-16 md:text-18">
                      Join Our Ninja Community
                    </div>
                    <div className="font-roboto text-white text-14 md:mr-2 copy">
                      <p>
                        Join our Ninja Community, where we host a schedule of events
                        and activities from gaming tournaments and Yoga sessions
                        through to charity fundraisers and team sports.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Opportunities;