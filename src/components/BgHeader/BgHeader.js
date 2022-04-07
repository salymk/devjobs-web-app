import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import BgPatternHeaderMobile from "../../assets/mobile/bg-pattern-header.svg";
import BgPatternHeaderTablet from "../../assets/tablet/bg-pattern-header.svg";
import BgPatternHeaderDesktop from "../../assets/desktop/bg-pattern-header.svg";

const BgHeader = () => {
  return <StyledBgHeader role="presentation" />;
};

export default BgHeader;

const StyledBgHeader = styled.div`
  background-image: url(${BgPatternHeaderMobile});
  height: 136px;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  @media ${QUERIES.tabletAndUp} {
    background-image: url(${BgPatternHeaderTablet});
    height: 160px;
    border-radius: 0px 0px 0px 100px;
  }

  @media ${QUERIES.desktopAndUp} {
    background-image: url(${BgPatternHeaderDesktop});
  }
`;
