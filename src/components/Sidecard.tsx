import type { ReactNode } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* space-y-3 */
`;

const Title = styled.p`
  font-size: 1.125rem; /* text-lg */
  font-weight: 600; /* font-semibold */
  margin: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* space-y-2 */
`;

const ActionText = styled.p`
  font-size: 0.875rem; /* text-sm */
  color: #6b6b6b;
  margin: 0;
`;

const Sidecard = ({
  title,
  action,
  content,
}: {
  title: string;
  action: string;
  content: ReactNode;
}) => {
  return (
    <CardWrapper>
      <Title>{title}</Title>
      <ContentWrapper>
        {content}
        {content}
        {content}
        {content}
      </ContentWrapper>
      <ActionText>See {action}</ActionText>
    </CardWrapper>
  );
};

export default Sidecard;
