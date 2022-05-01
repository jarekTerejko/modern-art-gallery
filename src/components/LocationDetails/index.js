import { Container } from "../Container/Container";
import { TextRegular } from "../TextRegular/TextRegular";
import {
  LocationDetailsColLeft,
  LocationDetailsColRight,
  LocationDetailsCols,
  LocationDetailsHeading,
  LocationDetailsSmallHeading,
  LocationDetailsWrapper,
} from "./LocationDetailsElements";

const LocationDetails = () => {
  return (
    <>
      <LocationDetailsWrapper>
        <Container>
          <LocationDetailsCols>
            <LocationDetailsColLeft>
              <LocationDetailsHeading>
                <span className="location-details-heading">Our</span> location
              </LocationDetailsHeading>
            </LocationDetailsColLeft>
            <LocationDetailsColRight>
              <LocationDetailsSmallHeading>
                99 King Street
              </LocationDetailsSmallHeading>
              <TextRegular darkBg className="location-text-regular">
                <span style={{ display: "block" }}>Newport </span>
                <span style={{ display: "block" }}>RI 02840 </span>
                <span style={{ display: "block" }}>
                  United States of America
                </span>
              </TextRegular>
              <TextRegular darkBg className="location-text-regular">
                Our newly opened gallery is located near the Edward King House
                on 99 King Street, the Modern Art Gallery is free to all
                visitors and open seven days a week from 8am to 9pm.
              </TextRegular>
            </LocationDetailsColRight>
          </LocationDetailsCols>
        </Container>
      </LocationDetailsWrapper>
    </>
  );
};

export default LocationDetails;
