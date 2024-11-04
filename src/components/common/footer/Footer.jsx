import { Link } from "react-router-dom";
import Container from "../ui/Container";
import logo from "../../../assets/logo.png";
import ytIcon from "../../../assets/icons/ytb.png";
import facebookIcon from "../../../assets/icons/fb.png";
import instagramIcon from "../../../assets/icons/insta.png";

const socialLink = [
  { icon: facebookIcon, href: "https://www.facebook.com/socialseller.in/" },
  { icon: ytIcon, href: "https://www.youtube.com/@Socialselleracademy" },
  {
    icon: instagramIcon,
    href: "https://www.instagram.com/socialseller_academy/?hl=en",
  },
];

const sections = [
  {
    title: "Learning",
    links: [
      { title: "Webinar", href: "https://socialseller.in/webinar" },
      { title: "Courses", href: "https://course.socialseller.in" },
      { title: "Community", href: "https://socialseller.in/community" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Registration", href: "https://socialseller.in/registration" },
      { title: "Branding", href: "https://socialseller.in/branding" },
      { title: "Consultation", href: "https://socialseller.in/consultation" },
    ],
  },
  {
    title: "Company & Legal",
    links: [
      { title: "Contact Us", href: "https://socialseller.in/contact" },
      {
        title: "Terms & Conditions",
        href: "https://socialseller.in/term-and-condition",
      },
      {
        title: "Privacy Policy",
        href: "https://socialseller.in/privacy-policy",
      },
    ],
  },
];

const Footer = () => {
  return (
    <Container classes2={"px-5"}>
      <div className="grid gap-16">
        <div
          className={
            "grid gap-16 lg:gap-0 lg:grid-cols-2 lg:last:grid-cols-1 w-full text-white text-start lg:mt-9 mt-3"
          }
        >
          <div className="flex flex-col gap-8 lg:max-w-md">
            <img
              src={logo}
              alt={"social-seller"}
              className="foot-logo h-8 object-contain mr-auto"
            />
            <p className={"foot-p text-sm leading-6 text-[#E9E9E9]"}>
              Social Seller Technologies is a leading platform for online
              sellers, empowering individuals to learn, start, and grow their
              online businesses. With a comprehensive suite of services,
              including resources, consultancy, and a dedicated marketplace, we
              are revolutionizing the online selling landscape in India and
              beyond.
            </p>
            <div className={"flex gap-5"}>
              {socialLink.map((link, i) => (
                <a
                  key={`${"data"}+${i}`}
                  href={link.href}
                  target="_blank"
                  className={""}
                >
                  <img src={link.icon} alt={"icon"} className=" w-5 md:w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14">
            {sections.map((section, i) => (
              <div
                key={`${"d"}+${i}`}
                className="text-base lg:text-xl flex flex-col gap-6"
              >
                <p className={"foot-h4 text-[#BDBDBD]"}>{section.title}</p>

                <ul className={"flex flex-col gap-3"}>
                  {section.links.map((link, i) => (
                    <li key={`${"m"}+${i}`} className={"foot-link"}>
                      <Link to={link.href} className="text-white">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="gradient-border opacity-70 !border-b-0" />
        <div
          className={
            "flex font-main-serif text-sm font-medium text-[#9D9D9D] md:text-lg justify-center items-center mb-12"
          }
        >
          <a href="https://socialseller.in" target="_blank">
            &copy; Socialseller.in | All rights reserved
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
