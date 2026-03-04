import CountUp from "../Components/CountUp"
export default function About() {
  return (
    <section id="about" className="h-full bg-[#181818] text-white p-16">
      <div className="flex-col ">
        <div>
          <h1 className="text-3xl">About Us.</h1>
          <h1 className="text-[105px]">Your Tech Journey Starts Here...</h1>
          <hr className="m-5 text-4xl" />
          {/* <p>Your Tech Journey Starts Here.</p> */}
        </div>
        <div className="text-3xl p-5">
          <h1 className="text-4xl text-[#FF7F11]">Who we are?</h1>
          <p>
            - A professional Software Engineers with hands on experience <br />{" "}
            in building modern wesites, Helping startUps to transform ideas into
            real world Websites.
          </p>
          <p>
            Our vesion is to make the most professional websites that will
            deliver A message.
          </p>
        </div>
        <div className="text-3xl p-5">
          <h1 className="text-4xl text-[#FF7F11]">What we do?</h1>
          <p>- We help you Turn Your IDEAS into FUll-functional website</p>
        </div>

        <div className=" flex justify-center  p-20 m-20  gap-20 text-6xl font-bold items-center ">
          <div className=" border-2 rounded-2xl p-5">
            <h1 className="px-7">
              +
              {
                <CountUp
                  from={0}
                  to={40}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  startCounting={false}
                />
              }
            </h1>{" "}
            <p className="text-2xl mt-3">Projects Finished</p>
          </div>
          <div className="p-5 border-2 rounded-2xl">
            <h1 className="px-7">
              +
              {
                <CountUp
                  from={0}
                  to={5}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  startCounting={false}
                />
              }
            </h1>{" "}
            <p className="text-2xl mt-3">Years Of Experience</p>
          </div>
          <div className="p-5 border-2 rounded-2xl">
            <h1 className="px-7">
              +
              {
                <CountUp
                  from={0}
                  to={35}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  startCounting={false}
                />
              }
            </h1>{" "}
            <p className="text-2xl mt-3">Clients WorldWide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
