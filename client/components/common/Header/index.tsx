import Image from 'next/image';

import Breakpoints from 'constants/breakpoints';
import ConnectionCount from 'components/common/ConnectionCount';
import { useWindowSize } from 'hooks/useWindowSize';
import { HeaderContainer, Title } from './styles';

const Header: React.FC = () => {
  const windowSize = useWindowSize();

  const isMobile = (windowSize.width as number) <= Breakpoints.small;

  return (
    <HeaderContainer>
      <Title>
        {isMobile ? (
          <Image src="/assets/cnu3.png" width={36.5} height={34} />
        ) : (
          <Image src="/assets/cnu2.png" width={175} height={34} />
        )}
      </Title>
      <ConnectionCount />
    </HeaderContainer>
  );
};

export default Header;
