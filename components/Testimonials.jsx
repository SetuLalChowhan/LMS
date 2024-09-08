
import Head from "./Head";
import ReviewCards from "./ReviewCards";
import Slide from "./Slide";

const Testimonials = ({title,para}) => {
  return (
    <section className=" md:w-full lg:w-full h-[637px] bg-[#EEF5FF] mt-24 inline-block">
      <div className=" lg:w-[1320px] lg:h-[444px] mx-auto  mt-24 ">
        <div className=" lg:w-[1320px] lg:h-[112px] mx-auto  ">
           <Head header={title} details={para}
           />
          <div className="lg:w-[872px] lg:h-[251px] mx-auto mt-8">
            <Slide cards ={<ReviewCards/>} tailwindValue={"md:w-[600px] lg:w-[900px] w-[300px] rounded-md"}  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
