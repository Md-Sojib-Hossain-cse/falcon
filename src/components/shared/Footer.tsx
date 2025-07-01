import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import Logo from "../../assets/footerLogo.png";
import ContactInfo from "../ContactInfo";
import { RiCustomerServiceLine } from "react-icons/ri";
import googleImg from "../../assets/Google.png";
import appleImg from "../../assets/apple.png";
import BkashImg from "../../assets/bkash.png";
import NogodImg from "../../assets/nogod.png";
import VisaImg from "../../assets/visa.png";
import AmericanExpressImg from "../../assets/americanExpress.png";
import MasterCardImg from "../../assets/mastercard.png";
import PaymentButton from "../PaymentButton";

const Footer = () => {
  return (
    <nav className="bg-[#0F172A] text-white min-h-32">
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-4 py-2 md:px-8 md:py-3 lg:px-20 lg:py-4 gap-6">
        <footer className="footer sm:footer-horizontal pt-6 md:pt-10 lg:pt-14">
          <aside>
            <div className="space-y-2 md:space-y-3 lg:space-y-4">
              <div className="space-y-2 md:space-y-3 lg:space-y-4">
                <div className="flex justify-start items-center gap-1">
                  <img
                    src={Logo}
                    alt="website logo"
                    className="h-7 md:h-9 lg:h-12 w-7 md:w-9 lg:w-12"
                  />
                  <h3 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-white">
                    FALCON
                  </h3>
                </div>
                <p className="text-[#F1F5F9] text-sm max-w-[272px]">
                  Experience our new platform & Enjoy exiting deals and offers
                  on your day to day
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 lg:space-y-4">
                <ContactInfo
                  title={"House #64, Road 13, ASA Center, Uttara, Dhaka-1402"}
                >
                  <FaLocationDot className="h-3 lg:h-4 w-3 lg:w-4 text-[#000000]" />
                </ContactInfo>
                <ContactInfo title={"01729-1497201"}>
                  <FaPhone className="h-3 lg:h-4 w-3 lg:w-4 text-[#000000]" />
                </ContactInfo>
                <ContactInfo title={"falcon@gmail.com"}>
                  <FaEnvelope className="h-3 lg:h-4 w-3 lg:w-4 text-[#000000]" />
                </ContactInfo>
              </div>
            </div>
          </aside>
          <nav className="space-y-3">
            <h6 className="footer-title text-[#94A3B8] text-lg font-medium leading-5 md:leading-6 lg:leading-7">
              ABOUT
            </h6>
            <div className="space-y-2 flex flex-col">
              <a className="link link-hover text-white font-medium">
                Contact Us
              </a>
              <a className="link link-hover text-white font-medium">About Us</a>
              <a className="link link-hover text-white font-medium">Careers</a>
              <a className="link link-hover text-white font-medium">Press</a>
              <a className="link link-hover text-white font-medium">
                Cancellation & Returns
              </a>
              <a className="link link-hover text-white font-medium">
                Terms of Use
              </a>
            </div>
          </nav>
          <nav>
            <h6 className="footer-title text-[#94A3B8] text-lg font-medium leading-5 md:leading-6 lg:leading-7">
              HELP
            </h6>
            <div className="space-y-2 flex flex-col">
              <a className="link link-hover text-white font-medium">
                Contact Us
              </a>
              <a className="link link-hover text-white font-medium">Payments</a>
              <a className="link link-hover text-white font-medium">Shipping</a>
              <a className="link link-hover text-white font-medium">
                My Orders
              </a>
              <a className="link link-hover text-white font-medium">FAQs</a>
              <a className="link link-hover text-white font-medium">
                Terms of Use
              </a>
              <a className="link link-hover text-white font-medium">Security</a>
              <a className="link link-hover text-white font-medium">Privacy</a>
            </div>
          </nav>
          <nav className="space-y-5 md:space-y-6 lg:relative lg:left-12 xl:left-24">
            <div className="space-y-3">
              <h6 className="footer-title text-[#94A3B8] text-lg font-medium leading-5 md:leading-6 lg:leading-7">
                HELP
              </h6>
              <p className="leading-4 md:leading-5 lg:leading-6 flex gap-2 items-center border border-[#F1F5F9] py-2 px-4 rounded-sm">
                <RiCustomerServiceLine className="text-[#00B795] text-lg" />
                <span className="font-medium text-white">10724-7814XX</span>
              </p>
            </div>
            <div className="space-y-3">
              <h6 className="footer-title text-[#94A3B8] text-lg font-medium leading-5 md:leading-6 lg:leading-7">
                DOWNLOAD APP
              </h6>
              <div className="space-y-4">
                <img
                  src={googleImg}
                  alt="google img"
                  className="max-w-[180px]"
                />
                <img src={appleImg} alt="apple img" className="max-w-[180px]" />
              </div>
            </div>
          </nav>
        </footer>
      </div>
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-4 py-2 md:px-8 md:py-3 lg:px-20 lg:py-4 gap-6 border-b border-b-[#FFFFFF30]">
        <div className="flex items-start gap-4 flex-col lg:flex-row lg:items-center ">
          <h6 className="text-[#E2E8F0] font-medium">Follow us on</h6>
          <div className="flex items-center gap-4">
            <div className=" bcursor-pointer bg-white h-8 w-8 rounded-full flex justify-center items-center transition-all duration-300 hover:scale-110 hover:bg-blue-100">
              <FaFacebookF className="h-3 lg:h-4 w-3 lg:w-4 text-[#000000]" />
            </div>
            <div className=" cursor-pointer bg-white h-8 w-8 rounded-full flex justify-center items-center transition-all duration-300 hover:scale-110 hover:bg-blue-100">
              <FaInstagram className="h-3 lg:h-4 w-3 lg:w-4 text-[#000000]" />
            </div>
            <div className=" cursor-pointer bg-white h-8 w-8 rounded-full flex justify-center items-center transition-all duration-300 hover:scale-110 hover:bg-blue-100">
              <FaTwitter className="h-3 lg:h-4 w-3 lg:w-4 text-[#000000]" />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 flex-col lg:flex-row lg:items-center">
          <h6 className="text-lg text-[#94A3B8] font-medium leading-5 md:leading-6 lg:leading-7">
            PAYMENTS ACCEPTED
          </h6>
          <div className="flex gap-2">
            <PaymentButton imgUrl={VisaImg}></PaymentButton>
            <PaymentButton imgUrl={MasterCardImg}></PaymentButton>
            <button className="bg-blue-700 rounded-sm h-11 w-16 flex justify-center items-center">
              <img src={AmericanExpressImg} alt="payment logo" />
            </button>
            <PaymentButton imgUrl={BkashImg}></PaymentButton>
            <PaymentButton imgUrl={NogodImg}></PaymentButton>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-4 py-2 md:px-8 md:py-3 lg:px-20 lg:py-4 gap-6">
        <p className="text-center text-white text-sm">
          Falcon ©2025. Design by MD Sojib Hossain
        </p>
      </div>
    </nav>
  );
};

export default Footer;
