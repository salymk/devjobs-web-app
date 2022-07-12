import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants";

const JobCard = ({
  to,
  logo,
  logoBackground,
  postedAt,
  contract,
  position,
  company,
  location,
}) => {
  return (
    <>
      <Card to={to}>
        <LogoContainer logoBackground={logoBackground}>
          <img src={logo} alt={company} />
        </LogoContainer>
        <div>
          <PostedAtAndContractContainer>
            {postedAt}
            <span>&#8226;</span>
            {contract}
          </PostedAtAndContractContainer>
          <Title>{position}</Title>
          <CompanyName>{company}</CompanyName>
        </div>

        <Subtitle>{location}</Subtitle>
      </Card>
    </>
  );
};

export default JobCard;

const Title = styled.h2`
  color: var(--heading);
  font-size: ${20 / 16 + "rem"};
  line-height: 25px;
  margin: 13px 0;
`;

const Card = styled(Link)`
  position: relative;
  width: 100%;
  min-height: 250px;
  border-radius: 6px;
  background-color: var(--background);
  padding: 50px 20px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;

  &:hover ${Title} {
    color: ${COLORS.gray[300]};
  }

  &:focus {
    outline-color: ${COLORS.violet[200]};
    outline-offset: 4px;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  transform: translateY(-75px);
  width: 50px;
  height: 50px;
  background: ${(props) => props.logoBackground || "white"};
  display: grid;
  place-items: center;
  border-radius: 15px;
`;

const PostedAtAndContractContainer = styled.p`
  display: flex;
  gap: 12px;
  color: var(--text);
  font-size: 1rem;
  transition: all 200ms ease-in;
`;

const CompanyName = styled.span`
  color: var(--text);
  font-size: 1rem;
  transition: all 200ms ease-in;
`;

const Subtitle = styled.h3`
  font-size: ${14 / 16 + "rem"};
  color: ${COLORS.violet[200]};
`;
