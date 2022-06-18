import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useUser } from 'contexts/UserContext';
import {
  Container,
  GroupTalk,
  NickNameInput,
  PersonalTalk,
  TalkWrapper,
} from './styles';
import React from 'react';

const Intro = () => {
  const { nickname, setNickname } = useUser();
  const router = useRouter();
  console.log(nickname);
  return (
    <Container>
      <Link href="/">
        <Image src="/assets/cnu.png" alt="충남대학교" width={298} height={78} />
      </Link>
      <NickNameInput
        placeholder="닉네임을 입력하세요."
        value={nickname}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNickname(e.target.value)
        }
      />
      <TalkWrapper>
        <GroupTalk onClick={() => router.push('/group')}>단체톡 하기</GroupTalk>
        <PersonalTalk onClick={() => router.push('/personal')}>
          일대일 톡하기
        </PersonalTalk>
      </TalkWrapper>
    </Container>
  );
};

export default Intro;
