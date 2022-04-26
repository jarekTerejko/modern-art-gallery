import { Container } from "../Container/Container";
import {
  GalleryContent,
  GalleryImgBox,
  GalleryTextBox,
  GalleryWrapper,
} from "./GalleryElements";
import ImgOneDesktop from "../../assets/desktop/image-grid-1@2x.jpg";
import ImgTwoDesktop from "../../assets/desktop/image-grid-2@2x.jpg";
import ImgThreeDesktop from "../../assets/desktop/image-grid-3@2x.jpg";
import ImgOneTablet from "../../assets/tablet/image-grid-1@2x.jpg";
import ImgTwoTablet from "../../assets/tablet/image-grid-2@2x.jpg";
import ImgThreeTablet from "../../assets/tablet/image-grid-3@2x.jpg";
import ImgOneMobile from "../../assets/mobile/image-grid-1@2x.jpg";
import ImgTwoMobile from "../../assets/mobile/image-grid-2@2x.jpg";
import ImgThreeMobile from "../../assets/mobile/image-grid-3@2x.jpg";
import { TextRegular } from "../TextRegular/TextRegular";
import { HeadingSecondary } from "../HeadingSecondary/HeadingSecondary";

const Gallery = () => {
  return (
    <>
      <GalleryWrapper>
        <Container>
          <GalleryContent>
            <GalleryTextBox className="gallery-item">
              <HeadingSecondary>Your day at the gallery</HeadingSecondary>
              <TextRegular galleryText>
                Wander through our distinct collections and find new insights
                about our artists. Dive into the details of their creative
                process.
              </TextRegular>
            </GalleryTextBox>

            <GalleryImgBox
              ImgDesktop={ImgOneDesktop}
              ImgTablet={ImgOneTablet}
              ImgMobile={ImgOneMobile}
              className="gallery-item"
            />
            <GalleryImgBox
              ImgDesktop={ImgTwoDesktop}
              ImgTablet={ImgTwoTablet}
              ImgMobile={ImgTwoMobile}
              className="gallery-item"
            />
            <GalleryImgBox
              ImgDesktop={ImgThreeDesktop}
              ImgTablet={ImgThreeTablet}
              ImgMobile={ImgThreeMobile}
              className="gallery-item"
            />
            <GalleryTextBox darkBg className="gallery-item">
              <HeadingSecondary>Come & be inspired</HeadingSecondary>
              <TextRegular darkBg galleryText>
                We’re excited to welcome you to our gallery and see how our
                collections influence you.
              </TextRegular>
            </GalleryTextBox>
          </GalleryContent>
        </Container>
      </GalleryWrapper>
    </>
  );
};

export default Gallery;
