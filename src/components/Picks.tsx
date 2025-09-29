import styled from "styled-components";

const PicksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem; 
  padding-bottom: 1.5rem; 
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem; 
`;


const InfoText = styled.p`
  color: #6b6b6b;
  margin: 0;

  span {
    color: #000;
  }
`;

const Title = styled.h3`
  font-size: 18px; 
  font-weight: bold;
  margin: 0;
`;

const DateText = styled.p`
  color: #6b6b6b;
  margin: 0;
`;

const Avatar = styled.img`
  aspect-ratio: 1 / 1; 
  border-radius: 9999px; 
  width: 1.4rem;
  margin-top: ; 
`;

const Picks = () => {
  return (
    <PicksWrapper>
      <Row>
        <Avatar src="/daniel.png" alt="daniel" />
        <InfoText>
          In <span>Rooted</span> by <span>Joshua Brown</span>
        </InfoText>
      </Row>
      <Title>The four stages of life as experienced in taiwanese cuisine</Title>
      <DateText>Sept 11</DateText>
    </PicksWrapper>
  );
};

export default Picks;
