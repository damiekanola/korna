import styled from "styled-components";

const Bubble = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f4f6; /* bg-gray-100 */
  border-radius: 1.5rem; /* rounded-3xl */
  padding: 0.5rem 1rem; /* py-2 px-4 */
`;

const Text = styled.p`
  font-size: 0.875rem; /* text-sm */
  margin: 0;
`;

const TopicBubble = ({ topic }: { topic: string }) => {
  return (
    <Bubble>
      <Text>{topic}</Text>
    </Bubble>
  );
};

export default TopicBubble;
