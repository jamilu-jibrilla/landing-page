// components
import Nav from "./components/Nav";
import Card from "./components/Card";
import Article from "./components/Article";

//icons
import headerImage from "./icons/header-illustration.png"
import searchIcon from "./icons/Frame.png"
import medicine from "./icons/Frame1.png"
import consultation from "./icons/Frame2.png"
import details from "./icons/Frame3.png"
import emergency from "./icons/Frame4.png"
import tracking from "./icons/Frame5.png"
import illustration2 from "./icons/illustration2.png"
import illustration3 from "./icons/illustration3.png"
import downArrow from "./icons/downArrow.png"
import leftArrow from "./icons/leftArrow.png"
import rightArrow from "./icons/rightArrow.png"
import logo from "./icons/logo.png"


//images
import avatar from "./images/avatar.png"
import image1 from "./images/image1.png"

function App() {
  return (
    <div className="App">

      <header className="App-header px-5 md:px-14">
        <Nav />
      </header>

      <section className="text-black flex flex-col md:flex-row items-center justify-between px-6 md:px-24">
        <div className="order-1 md:order-none">
          <h1 className="text-[2rem] md:text-[3rem] leading-[2.4rem]  md:leading-[3rem] mb-3 font-medium ">Virtual healthcare <br className="" /> for you</h1>
          <p className="text-[#7D7987] mb-3">Trafalgar provides progressive, and affordable <br className="hidden md:block " /> healthcare, accessible on mobile and online <br className="hidden md:block " /> for everyone</p>
          <button className="h-[47px]  md:h-[47px] w-[100%] md:w-[200px] font-medium text-lg  rounded-[55px] bg-[#458FF6] text-white"> Consult today</button>
        </div>
        <img className="h-[260px] md:h-[490px] mb-4  bg-contain" src={headerImage} alt="Two doctors reading a patients notes" />
      </section>

        <section className="mt-24 text-center ">

        <div className="text-center m-auto md:w-[60%] px-3">
          <h1 className="font-medium text-3xl">Our services</h1>
          <hr className="bg-[#7D7987] p-[.1rem] w-[40px] m-auto my-4" />
          <p className="text-[#7D7987] mt-6 text-[.95rem]">
            We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo
            treatment with our highly qualified doctors you can consult with us which type of service is suitable for
            your health
          </p>
        </div>

        <div className="md:px-24 mt-7 md:bg-[url(./icons/bg1.png)] bg-no-repeat bg-[length:700px_500px] bg-left-top pt-7">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Card imgSrc={searchIcon} heading="Search doctor" paragraph="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
            <Card imgSrc={medicine} heading="Online pharmacy" paragraph="Buy  your medicines with our mobile application with a simple delivery system" />
            <Card imgSrc={consultation} heading="Consultation" paragraph="Free consultation with our trusted doctors and get the best recomendations" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Card imgSrc={details} heading="Details info" paragraph="Free consultation with our trusted doctors and get the best recomendations" />
            <Card imgSrc={emergency} heading="Emergency care" paragraph="You can get 24/7 urgent care for yourself or your children and your lovely family" />
            <Card imgSrc={tracking} heading="Tracking" paragraph="Track and save your medical history and health data " />
          </div>
        </div>
        <button className="h-[47px]  md:h-[47px] w-[80%] md:w-[200px] font-medium text-medium  mx-auto rounded-[55px] border border-[#458FF6] text-[#458FF6]">Learn more</button>

      </section>

      <section className="text-black flex flex-col md:flex-row items-center justify-between px-6 mt-6 md:mt-20 p-24">
        <img className="h-[250px] md:h-[410px] mb-4  bg-contain" src={illustration2} alt="Two doctors reading a patients notes" />
        <div className="order-1 md:order-none md:mr-20 ">
          <h1 className="text-[2rem] md:text-[2.2rem] leading-[2.4rem]  md:leading-[3rem] mb-3 font-medium ">Leading healthcare <br className="" /> providers</h1>
          <hr className="bg-[#7D7987] p-[.1rem] w-[40px] my-5" />
          <p className="text-[#7D7987] mb-4">Trafalgar provides progressive, and affordable <br className="hidden md:block " /> healthcare, accessible on mobile and online <br className="hidden md:block " /> for everyone</p>
          <button className="h-[47px] my-3 md:h-[47px] w-[50%] md:w-[200px] font-medium text-medium  mx-auto rounded-[55px] border border-[#458FF6] text-[#458FF6]">Learn more</button>
        </div>
      </section>

      <section className="text-black flex  flex-col md:flex-row items-center justify-between px-6 mt-6 md:mt-20  md:px-24 md:py-20:">
        <div className="order-1 md:order-none pr-3 md:ml-10 mt-8 md:mt-0">
          <h1 className="text-[2rem] md:text-[2.2rem] leading-[2.4rem]  md:leading-[3rem] mb-3 font-medium ">Download our <br className="" /> mobile apps</h1>
          <hr className="bg-[#7D7987] p-[.1rem] w-[40px] my-5" />
          <p className="text-[#7D7987] mb-3">Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
          <button className="h-[47px] flex items-center  md:h-[47px] w-[50%] md:w-[200px] font-medium text-medium   rounded-[55px] border border-[#458FF6] text-[#458FF6]">
            <span className="mx-auto flex items-center">Download <img className="ml-3" src={downArrow} alt="arrow pointing down" /></span>
          </button>
        </div>
        <img className="h-[250px] md:h-[380px] mb-4  bg-contain" src={illustration3} alt="Two doctors reading a patients notes" />
      </section>

      <section className="text-center text-white md:rounded-[24px] md:h-[325px] p-10 m-auto md:w-[60%] px-3 mt-28 md:mt-44 bg-gradient-to-l from-[#67C3F3] to-[#5A98F2]">
        <h1 className="font-medium text-2xl">What our customers are saying</h1>
        <hr className="bg-white p-[.1rem] w-[40px] m-auto mt-5" />
        <div className="flex flex-col md:flex-row justify-between  items-center md:px-20 mt-10">
          <div className="flex items-center mb-6 md:mb-0 md:w-[50%]  flex-col md:flex-row  text-left">
            <img className="h-[130px]" src={avatar} alt="avatar" />
            <div className="md:ml-4 text-center pt-2 md:text-start">
              <h4>Edward Newgate</h4>
              <p className="text-[#ffffffd3] text-sm">Founder Circle</p>
            </div>
          </div>
          <p className="md:w-[50%] text-sm md:text-start ">
            “Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”
          </p>
        </div>
      </section>

      <section className="my-10 text-center flex justify-center items-center">
        <img className="mr-10 w-5" src={leftArrow} alt="arrow pointing left" />
        <span class="h-[5px] w-[5px] rounded-[50%] bg-[#5B9BF3] "></span>
        <span class="h-[5px] w-[5px] mx-4 bg-[#5B9BF3] rounded-[50%]" ></span>
        <span class="h-[5px] w-[5px] bg-[#5B9BF3] rounded-[50%]"></span>
        <img className="ml-10 w-5" src={rightArrow} alt="arrow pointing right" />
      </section>

      <section className="text-center mt-40 ">

        <div className="m-auto md:w-[60%] px-3">
          <h1 className="font-medium text-2xl mb-4">Check out our latest article</h1>
          <hr className="bg-[#7D7987] p-[.1rem] w-[40px] mx-auto mt-3" />
        </div>

        <div className="pt-14 md:bg-[url(./icons/bg2.png)] bg-no-repeat bg-[length:400px_370px] bg-right-top">
          <div className="flex flex-col md:flex-row items-center justify-center ">
            <Article imgSrc={image1} />
            <Article imgSrc={image1} />
            <Article imgSrc={image1} />
          </div>
        </div>
        <button className="h-[47px]  md:h-[45px] w-[70%] md:w-[190px] font-medium text-medium my-6  mx-auto rounded-[55px] border border-[#458FF6] text-[#458FF6]">View all</button>
      </section>

      <footer className="footer p-9 md:p-14 mt-28 bg-gradient-to-l from-[#67C3F3] to-[#5A98F2] text-white md:h-[50vh] flex flex-col md:flex-row justify-between">
        <div className="w-[100%] md:w-2/6 mb-10 text-[#ffffffc2]">
          <img className="font-bold text-2xl mb-5" src={logo} alt="logo" />
          <h3>
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
            for everyone
          </h3>
          <p className="mt-6 text-sm">
          ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>
        <div className="flex justify-between text-[#ffffffc2] w-[100%] md:w-[50%] flex-col md:flex-row">
          <div className="mr-24 mb-10 ">
            <h2 className="text-xl text-white mb-4">Company</h2>
            <h4 className=" mb-4">About</h4>
            <h4 className="mb-4">Testimonials</h4>
            <h4 className="mb-4">Find a doctor</h4>
            <h4 className="mb-4">Apps</h4>
          </div>
          <div className="mr-24 mb-10">
            <h2 className="text-xl mb-4 text-white">Region</h2>
            <h4 className=" mb-4">Indonesi</h4>
            <h4 className=" mb-4">Singapore</h4>
            <h4 className=" mb-4">Hongkong</h4>
            <h4 className=" mb-4">Canada & conditions</h4>
          </div>
          <div className="">
            <h2 className="text-xl mb-4 text-white">Help</h2>
            <h4 className="mb-4">Help center</h4>
            <h4 className="mb-4">Contact support</h4>
            <h4 className="mb-4">Instruction</h4>
            <h4 className="mb-4">How it works</h4>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default App;
