import styled from "styled-components";
import { SearchInput } from "../molecules/SeachInput";
import { UserCard } from "../Organisms/User/UserCard";

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    name: `じゃけぇ${val}`,
    image: "https://source.unsplash.com/NEOXGVKTmcA"
    email: "12345@example.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  }
}))

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map(() => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>  
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1ft));
  grid-gap: 20px;
`;
