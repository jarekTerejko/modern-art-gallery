import { ImageEl } from "../Image/ImageElement";
import {
  LinkRouterImgBg,
  LinkRouterTextBg,
  LinkRouterWrapper,
} from "./LinkRouterElements";

const LinkRouter = ({ pathname, text, src, arrowRight, arrowLeft }) => {
  return (
    <LinkRouterWrapper to={pathname}>
      {arrowLeft ? <ImageEl src={src} /> : null}
      <LinkRouterTextBg>{text}</LinkRouterTextBg>
      {arrowRight ? (
        <LinkRouterImgBg>
          <ImageEl src={src} />
        </LinkRouterImgBg>
      ) : null}
    </LinkRouterWrapper>
  );
};

export default LinkRouter;
