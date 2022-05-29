import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ConnectionCount from '../ConnectionCount';

import {
  Container,
  GroupTalk,
  NickNameInput,
  OneVsOneTalk,
  TalkWrapper,
} from './styles';

const Intro = () => {
  const router = useRouter();

  return (
    <Container>
      <Link href="/">
        <Image src="/assets/cnu.png" alt="충남대학교" width={298} height={78} />
      </Link>
      <NickNameInput placeholder="닉네임을 입력하세요." />
      <TalkWrapper>
        <GroupTalk onClick={() => router.push('/group')}>단체톡 하기</GroupTalk>
        <OneVsOneTalk onClick={() => router.push('/onevsone')}>
          일대일 톡하기
        </OneVsOneTalk>
      </TalkWrapper>
    </Container>
  );
};

export default Intro;
