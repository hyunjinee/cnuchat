import { Container, ContainerInner } from './styles';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Container>
      <ContainerInner>{children}</ContainerInner>
    </Container>
  );
};

export default AppLayout;
