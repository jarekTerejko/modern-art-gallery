import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import {
  LocationMapLinkRouterWrapper,
  LocationMapWrapper,
  MapContainerWrapper,
} from "./LocationMapElements";
import LocationIcon from "../../assets/icon-location.svg";
import LinkRouter from "../../components/LinkR/index";
import { Container } from "../Container/Container";
import ArrowLeft from "../../assets/icon-arrow-left.svg";

const LocationMap = () => {
  const markerIcon = new L.icon({
    iconUrl: LocationIcon,
    popupAnchor: [-4, -100],
    iconAnchor: [36, 90],
  });

  return (
    <>
      <LocationMapWrapper>
        <MapContainerWrapper>
          <MapContainer
            center={[41.48056, -71.31096]}
            zoom={16}
            scrollWheelZoom={true}
            style={{ height: "inherit" }}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position="bottomright" />
            <Marker position={[41.48056, -71.31096]} icon={markerIcon}>
              <Popup>
                99 King Street
                <br />
                Newport
                <br />
                RI 02840
                <br />
                United States of America
              </Popup>
            </Marker>
          </MapContainer>
        </MapContainerWrapper>
        <LocationMapLinkRouterWrapper>
          <Container>
            <LinkRouter
              pathname="/"
              text="back to home"
              src={ArrowLeft}
              arrowLeft
            ></LinkRouter>
          </Container>
        </LocationMapLinkRouterWrapper>
      </LocationMapWrapper>
    </>
  );
};

export default LocationMap;
