import { useRouter } from 'next/router';
import { Container, Description, NickNameInput, TalkWrapper, GroupTalk, PersonalTalk } from './styles';

const Intro: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <Description>
        안녕하세요!😀 <br />
        충남대학교 학생들을 위한 채팅방을 만들었습니다!
      </Description>
      <NickNameInput />
      <TalkWrapper>
        <GroupTalk onClick={() => router.push('/group')}>단체톡 하기</GroupTalk>
        <PersonalTalk onClick={() => router.push('/personal')}>일대일 톡하기</PersonalTalk>
      </TalkWrapper>
    </Container>
  );
};

export default Intro;
