import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";

import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px; /* p-4 */
  border-bottom: 1px solid #e5e7eb; /* border-b-gray-200 */
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* gap-4 */
`;

const Logo = styled.p`
  font-size: 1.5rem; /* text-2xl */
  font-weight: bold;
  margin: 0;
`;

const SearchWrapper = styled.div`
  display: none;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
  background-color: #f9f9f9;
  border-radius: 1.5rem; /* rounded-3xl */
  padding: 0.5rem 1rem; /* py-2 px-4 */

  @media (min-width: 640px) {
    display: flex; /* sm:flex */
  }
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;

  &:focus,
  &:active {
    outline: none;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* gap-3 */
`;

const MobileSearch = styled.p`
  display: block;

  @media (min-width: 640px) {
    display: none; /* sm:hidden */
  }
`;

const DesktopIcons = styled.div`
  display: none;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 640px) {
    display: flex; /* sm:flex */
  }
`;

const Avatar = styled.img`
  aspect-ratio: 1 / 1;
  border-radius: 9999px; /* rounded-full */
  width: 1.75rem; /* w-7 */
  margin-top: 0.5rem; /* mt-2 */
`;

const Navbar = () => {
  return (
    <Nav>
      <LeftSection>
        <RxHamburgerMenu />
        <Logo>Medium</Logo>
        <SearchWrapper>
          <CiSearch />
          <SearchInput type="text" placeholder="Search" />
        </SearchWrapper>
      </LeftSection>

      <RightSection>
        <MobileSearch>
          <CiSearch />
        </MobileSearch>
        <DesktopIcons>
          <TfiWrite />
          <CiBellOn />
        </DesktopIcons>
        <Avatar src="/daniel.png" alt="daniel" />
      </RightSection>
    </Nav>
  );
};

export default Navbar;
