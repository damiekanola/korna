import styled from "styled-components";
import { FaHandsClapping } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { CiCircleMinus, CiBookmarkPlus } from "react-icons/ci";
import { FaComment } from "react-icons/fa";

const Wrapper = styled.article`
  border-bottom: 1px solid #f3f4f6; /* border-b-gray-100 */
  padding: 0.75rem 0; /* py-3 */
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem; /* gap-5 */

  @media (min-width: 640px) {
    gap: 2.5rem; /* sm:gap-10 */
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px; /* space-y-3 */
  flex: 3;
`;

const AuthorRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;

const Avatar = styled.img`
  aspect-ratio: 1 / 1;
  border-radius: 9999px; /* rounded-full */
  width: 1.25rem; /* w-5 */
  margin-top: 0.5rem; /* mt-2 */
`;

const Title = styled.h2`
  font-size: 1.25rem; /* text-xl */
  font-weight: bold;
  margin: 0;
  line-height: 24px;

  @media (min-width: 640px) {
    font-size: 1.5rem; /* sm:text-2xl */
  }
`;

const Excerpt = styled.p`
  color: #6b6b6b;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* line-clamp-2 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  p {
    margin: 0;
  }
`;

const MetaRow = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 640px) {
    display: flex; /* sm:flex */
  }
`;

const MetaGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; /* gap-2 */
  color: #6b6b6b;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px; /* gap-1 */
`;

const ImageWrapper = styled.div`
  flex: 1;
  aspect-ratio: 1 / 1;
  height: 100px; /* h-[100px] */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MobileMetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;

  @media (min-width: 640px) {
    display: none; /* sm:hidden */
  }
`;

const Article = () => {
  return (
    <Wrapper>
      <Row>
        <Content>
          <AuthorRow>
            <Avatar src="/daniel.png" alt="daniel" />
            <p>Ekanola Damilola</p>
          </AuthorRow>
          <Title>
            How Knowledge of languages is more valuable than ever on the job
            market
          </Title>
          <Excerpt>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            facilis quae animi possimus perferendis eaque vitae vel error nobis,
            assumenda et dolores enim ducimus aliquid mollitia eveniet a odio
            alias.
          </Excerpt>
          <MetaRow>
            <MetaGroup>
              <p>4d ago</p>
              <MetaItem>
                <FaHandsClapping />
                <p>16</p>
              </MetaItem>
              <MetaItem>
                <FaComment />
                <p>341</p>
              </MetaItem>
            </MetaGroup>
            <MetaGroup>
              <CiCircleMinus />
              <CiBookmarkPlus />
              <IoIosMore />
            </MetaGroup>
          </MetaRow>
        </Content>
        <ImageWrapper>
          <Image src="/carrie.jpg" alt="carrie" />
        </ImageWrapper>
      </Row>

      <MobileMetaRow>
        <MetaGroup>
          <p>4d ago</p>
          <MetaItem>
            <FaHandsClapping />
            <p>16</p>
          </MetaItem>
          <MetaItem>
            <FaComment />
            <p>341</p>
          </MetaItem>
        </MetaGroup>
        <MetaGroup>
          <CiCircleMinus />

          <IoIosMore />
        </MetaGroup>
      </MobileMetaRow>
    </Wrapper>
  );
};

export default Article;
