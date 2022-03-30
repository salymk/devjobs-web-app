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
  color: ${COLORS.dark[100]};
  font-size: ${20 / 16 + "rem"};
  line-height: 25px;
  margin: 13px 0;
  transition: color 200ms ease-in-out;
`;

const Card = styled(Link)`
  position: relative;
  width: 100%;
  min-height: 250px;
  border-radius: 6px;
  background-color: ${COLORS.white};
  padding: 50px 20px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  text-decoration: none;

  &:hover ${Title} {
    color: ${COLORS.gray[300]};
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
  color: ${COLORS.gray[300]};
  font-size: 1rem;
`;

const CompanyName = styled.span`
  color: ${COLORS.gray[300]};
  font-size: 1rem;
`;

const Subtitle = styled.h3`
  font-size: ${14 / 16 + "rem"};
  color: ${COLORS.violet[200]};
`;
