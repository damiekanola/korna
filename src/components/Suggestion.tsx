import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem; /* gap-2 */
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 0.75rem; /* pb-3 */
`;

const LeftSection = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
`;

const Avatar = styled.img`
  aspect-ratio: 1 / 1; /* aspect-square */
  border-radius: 9999px; /* rounded-full */
  width: 1.75rem; /* w-7 */
  margin-top: 0.5rem; /* mt-2 */
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font-weight: 600; /* font-semibold */
  margin: 0;
`;

const Bio = styled.p`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* line-clamp-2 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FollowButton = styled.button`
  padding: 0.5rem 0.75rem; /* py-2 px-3 */
  border-radius: 1.5rem; /* rounded-3xl */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d1d5db; /* Tailwind's default border color */
  font-size: 0.875rem; /* text-sm */
  margin-top: 0.25rem; /* mt-1 */
  background: white;
  cursor: pointer;

  &:hover {
    background: #f9fafb; /* subtle hover effect */
  }
`;

const Suggestion = () => {
  return (
    <Wrapper>
      <LeftSection>
        <Avatar src="/daniel.png" alt="daniel" />
        <Info>
          <Name>Noel Johnson</Name>
          <Bio>
            Physician turning lifestyle science into actionable events with
            beauty in sight of every single thing
          </Bio>
        </Info>
      </LeftSection>
      <FollowButton>Follow</FollowButton>
    </Wrapper>
  );
};

export default Suggestion;
