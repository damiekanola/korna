import { useState } from "react";
import styled from "styled-components";
import Article from "./Article";
// import Topics from "./Topics";
import Suggestion from "./Suggestion";
import Topics from "./Topics";
import Picks from "./Picks";
import Sidecard from "./SideCard";


const Main = styled.main`
  display: flex;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  flex: 3;
`;

const ContentWrapper = styled.div`
  width: 90%;
  margin: auto;

  @media (min-width: 1024px) {
    width: 80%;
  }
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* gap-4 */
  border-bottom: 1px solid #f3f4f6; /* border-b-gray-100 */
  padding: 1rem 0; /* py-4 */
`;


const Tab = styled.p<{ $isActive: boolean }>`
  cursor: pointer;
  padding: 0 0 0 1rem;
  text-decoration: ${(props) => (props.$isActive ? "underline" : "none")};
  text-underline-offset: 21px;
`

const RightColumn = styled.div`
  display: none;
  flex: 1;
  border-left: 1px solid #e5e7eb; /* border-gray-200 */
  padding: 1rem; /* p-4 */
  flex-direction: column;
  gap: 1rem; /* space-y-4 */

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const ArticleList = () => {
  const [active, setActive] = useState("For You");

  return (
    <Main>
      <LeftColumn>
        <ContentWrapper>
          <Tabs>
            <Tab $isActive={active === "For You"} onClick={() => setActive("For You")}>
              For You
            </Tab>
            <Tab
              $isActive={active === "Featured"}
              onClick={() => setActive("Featured")}
            >
              Featured
            </Tab>
          </Tabs>
          <div>
            <Article />
            <Article />
            <Article />
          </div>
        </ContentWrapper>
      </LeftColumn>

      <RightColumn>
        <Sidecard
          title="Staff Picks"
          action="the full list"
          content={<Picks />}
        />
        <Topics />
        <Sidecard
          title="Who to follow"
          action="more suggestions"
          content={<Suggestion />}
        />
      </RightColumn>
    </Main>
  );
};

export default ArticleList;
