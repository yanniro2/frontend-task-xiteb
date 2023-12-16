import React from "react";
import footerData from "../../data/footerData.json";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

type CorporateInformation = {
  cinnamonHotelsAndResorts: string;
  johnKeellsGroup: string;
};

type Blogs = {
  cinnamonUblog: string;
};

type Careers = {
  careers: string;
};

type NewsAndAwards = {
  news: string;
  awards: string;
};

type CorporateGovernance = {
  csr: string;
  dataPrivacyAndSecurityPolicy: string;
};

type TermsAndConditions = {
  termsAndConditions: string;
  privacyStatement: string;
};

type GetInTouch = {
  email: string;
  hotelContactInformation: string;
};

type SocialMedia = {
  facebook: {
    url: string;
    icon: string;
  };
  twitter: {
    url: string;
    icon: string;
  };
  instagram: {
    url: string;
    icon: string;
  };
  linkedin: {
    url: string;
    icon: string;
  };
};

type Newsletter = {
  label: string;
  emailPlaceholder: string;
};

type FooterData = {
  corporateInformation: CorporateInformation;
  blogs: Blogs;
  careers: Careers;
  newsAndAwards: NewsAndAwards;
  corporateGovernance: CorporateGovernance;
  termsAndConditions: TermsAndConditions;
  getInTouch: GetInTouch;
  followUs: string;
  socialMedia: SocialMedia;
  newsletter: Newsletter;
};

type Props = {};

const Footer: React.FC<Props> = () => {
  const {
    corporateInformation,
    blogs,
    careers,
    newsAndAwards,
    corporateGovernance,
    termsAndConditions,
    getInTouch,
    followUs,
    socialMedia,
    newsletter,
  }: FooterData = footerData.footer;

  // Helper function to get the React Icon component based on the icon name
  const getIconComponent = (iconName: string) => {
    const iconComponents: { [key: string]: React.ElementType } = {
      FaFacebook,
      FaTwitter,
      FaInstagram,
      FaLinkedin,
      // Add more icon components as needed
    };

    return iconComponents[iconName] || null;
  };

  return (
    <div className="w-screen  text-gray-800 font-mono py-[4rem]">
      <div className="container mx-auto p-3 lg:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Corporate Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Corporate Information</h3>
            <p>{corporateInformation.cinnamonHotelsAndResorts}</p>
            <p>{corporateInformation.johnKeellsGroup}</p>
          </div>

          {/* Blogs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Blogs</h3>
            <p>{blogs.cinnamonUblog}</p>
          </div>

          {/* Careers */}
          <div>
            <h3 className="text-xl font-bold mb-4">Careers</h3>
            <p>{careers.careers}</p>
          </div>

          {/* News and Awards */}
          <div>
            <h3 className="text-xl font-bold mb-4">News and Awards</h3>
            <p>{newsAndAwards.news}</p>
            <p>{newsAndAwards.awards}</p>
          </div>
        </div>

        <hr className="my-6 border-gray-600" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Corporate Governance */}
          <div>
            <h3 className="text-xl font-bold mb-4">Corporate Governance</h3>
            <p>{corporateGovernance.csr}</p>
            <p>{corporateGovernance.dataPrivacyAndSecurityPolicy}</p>
          </div>

          {/* Terms and Conditions */}
          <div>
            <h3 className="text-xl font-bold mb-4">Terms and Conditions</h3>
            <p>{termsAndConditions.termsAndConditions}</p>
            <p>{termsAndConditions.privacyStatement}</p>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p>Email: {getInTouch.email}</p>
            <p>{getInTouch.hotelContactInformation}</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">{newsletter.label}</h3>
          <input
            type="email"
            placeholder={newsletter.emailPlaceholder}
            className="bg-gray-700 text-white rounded-md p-2 w-min"
          />
        </div>

        {/* Follow Us */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">{followUs}</h3>
          <div className="flex items-center space-x-4">
            {Object.entries(socialMedia).map(([platform, { url, icon }]) => {
              const IconComponent = getIconComponent(icon);
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
