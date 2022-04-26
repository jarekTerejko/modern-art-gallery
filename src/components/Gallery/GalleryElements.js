import styled from "styled-components";

export const GalleryWrapper = styled.section`
  margin-bottom: 20rem;
`;

export const GalleryTextBox = styled.div`
  font-size: 2.2rem;
  background: ${(props) =>
    props.darkBg ? "var(--color-dark)" : "var(--color-light)"};
  color: ${(props) => (props.darkBg ? "var(--color-light)" : "")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ darkBg }) => (darkBg ? "6rem 4rem" : "")};
`;

export const GalleryContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;

  @media screen and (max-width: 768px) {
    gap: 10px;
    padding: 0 2rem;
  }

  .gallery-item:nth-child(1) {
    grid-column: 1/6;
    grid-row: 1/2;
  }

  .gallery-item:nth-child(2) {
    grid-column: 6/13;
    padding-top: calc(
      400 / 635 * 100%
    ); // (img-height / img-width * container-width)

    @media screen and (max-width: 768px) {
      padding-top: calc(
        398 / 400 * 100%
      ); // (img-height / img-width * container-width)
    }
  }
  .gallery-item:nth-child(3) {
    grid-column: 1/8;
    grid-row: 2/4;
    padding-top: calc(
      720 / 635 * 100%
    ); // (img-height / img-width * container-width)

    @media screen and (max-width: 768px) {
      padding-top: calc(
        720 / 398 * 100%
      ); // (img-height / img-width * container-width)
    }
  }
  .gallery-item:nth-child(4) {
    grid-column: 8/13;
    grid-row: 2/3;
    padding-top: calc(
      313 / 445 * 100%
    ); // (img-height / img-width * container-width)

    @media screen and (max-width: 768px) {
      padding-top: calc(
        313 / 280 * 100%
      ); // (img-height / img-width * container-width)
    }
  }

  .gallery-item:nth-child(5) {
    grid-column: 8/13;
    grid-row: 3/4;
  }
`;

export const GalleryImgBox = styled.div`
  padding-top: calc(
    400 / 635 * 100%
  ); // (img-height / img-width * container-width)
  background: ${(props) =>
    props.ImgDesktop ? `url(${props.ImgDesktop})` : "black"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    background: ${(props) =>
      props.ImgTablet ? `url(${props.ImgTablet})` : "black"};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
