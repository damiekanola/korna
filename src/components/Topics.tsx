import styled from "styled-components";
import TopicBubble from "./TopicBubble";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* space-y-3 */
`;

const Title = styled.p`
  font-size: 1.125rem; /* text-lg */
  font-weight: 600; /* font-semibold */
  margin: 0;
`;

const BubbleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem; /* gap-3 */
`;

const MoreLink = styled.a`
  font-size: 0.875rem; 
  color: #6b6b6b; 
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Topics = () => {
  return (
    <Wrapper>
      <Title>Recommended Topics</Title>
      <BubbleWrapper>
        <TopicBubble topic="Data Science" />
        <TopicBubble topic="React" />
        <TopicBubble topic="UI/UX" />
        <TopicBubble topic="Web 3" />
        <TopicBubble topic="AI" />
        <TopicBubble topic="Productivity" />
        <TopicBubble topic="Python" />
      </BubbleWrapper>
      <MoreLink href="">See more topics</MoreLink>
    </Wrapper>
  );
};

export default Topics;
