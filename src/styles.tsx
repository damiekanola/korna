import styled from "styled-components";

export const Flexbox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Navibar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: auto;
  border-bottom: 1px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 30px;
  margin: 10px 0px;
`;

export const GrayText = styled.p`
  color: #888;
  margin: 10px 0px;
  font-size: 14px;
  line-height: 1.5;
`;
export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const TextColumn = styled.div`
  flex: 2; /* grow 2 parts */
`;

// Image column (takes ~1/3 of space, shrinks if needed)
export const ImageColumn = styled.div`
  flex: 1;
  height:100%;
`;
