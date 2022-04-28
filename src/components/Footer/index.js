import {
  FooterCols,
  FooterLinkR,
  FooterSocialLink,
  FooterSocialLinkItem,
  FooterSocialLinksList,
  FooterWrapper,
} from "./FooterElements";
import { Container } from "../Container/Container";
import { TextRegular } from "../TextRegular/TextRegular";
import { ImageEl } from "../Image/ImageElement";
import { useLocation } from "react-router-dom";
import IconInstagramWhite from "../../assets/icon-instagram.svg";
import IconFacebookWhite from "../../assets/icon-facebook.svg";
import IconTwitterWhite from "../../assets/icon-twitter.svg";
import IconInstagramDark from "../../assets/icon-instagram--dark.svg";
import IconFacebookDark from "../../assets/icon-facebook--dark.svg";
import IconTwitterDark from "../../assets/icon-twitter--dark.svg";

const Footer = () => {
  const location = useLocation();

  const socialIconsWhite = [
    IconFacebookWhite,
    IconInstagramWhite,
    IconTwitterWhite,
  ];
  const socialIconsDark = [
    IconFacebookDark,
    IconInstagramDark,
    IconTwitterDark,
  ];

  const renderIcons = () => {
    let icons;
    if (location.pathname === "/") {
      icons = socialIconsWhite.map((icon, i) => {
        return (
          <FooterSocialLinkItem key={i}>
            <FooterSocialLink href="#" target="_blank">
              <ImageEl src={icon} alt="" />
            </FooterSocialLink>
          </FooterSocialLinkItem>
        );
      });
    } else {
      icons = socialIconsDark.map((icon, i) => {
        return (
          <FooterSocialLinkItem key={i}>
            <FooterSocialLink href="#" target="_blank">
              <ImageEl src={icon} alt="" />
            </FooterSocialLink>
          </FooterSocialLinkItem>
        );
      });
    }
    return icons;
  };

  return (
    <>
      <FooterWrapper darkBg={location.pathname === "/" ? "darkBg" : null}>
        <Container>
          <FooterCols>
            <FooterLinkR to="/">
              <span style={{ display: "block" }}>Modern</span> art gallery
            </FooterLinkR>
            <TextRegular darkBg className="footer-text-regular">
              The Modern Art Gallery is free to all visitors and open seven days
              a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
            </TextRegular>
            <FooterSocialLinksList>{renderIcons()}</FooterSocialLinksList>
          </FooterCols>
        </Container>
      </FooterWrapper>
    </>
  );
};

export default Footer;
