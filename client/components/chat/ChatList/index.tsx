import Chat from '../Chat';
import { Container } from './styles';

const tempList: { type: 'me' | 'other'; message: string }[] = [
  {
    type: 'me',
    message: '안녕하세요 현진님 길게 한번 적어보겠습니다. ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },
  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎ',
  },
  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },
  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },
  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },
  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },
  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },

  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },
  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },

  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },
  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },
  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },
  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },
  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },
  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },

  {
    type: 'other',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },

  {
    type: 'me',
    message: '안녕하세요 가나다라 마바사 아자차카타파하 라인 바뀝니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
  },
];

const ChatList: React.FC = () => {
  return (
    <Container>
      {tempList.map((chat) => (
        <Chat type={chat.type} message={chat.message} />
      ))}
    </Container>
  );
};

export default ChatList;
