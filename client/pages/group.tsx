import type { NextPage } from 'next';
import Loading from 'components/common/Loading';
import { useUser } from 'contexts/UserContext';

const Group: NextPage = () => {
  const { nickname, setNickname } = useUser();

  console.log(nickname, setNickname, '??');

  return (
    <div>
      <Loading />
    </div>
  );
};

export default Group;
