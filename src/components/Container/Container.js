import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const Container = styled.div`
  position: relative;
  width: 1100px;
  max-width: 100%;
  padding: 0 24px;
  margin: 0 auto;
  @media ${QUERIES.tabletAndUp} {
    padding: 0 40px;
  }
`;

export default Container;
