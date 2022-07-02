import { Container, ContainerInner } from './styles';

interface AppLayoutProps {
  children: React.ReactNode;
  page?: string; // page에 따른 App의 Layout
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, page }) => {
  return (
    <Container>
      <ContainerInner page={page}>{children}</ContainerInner>
    </Container>
  );
};

export default AppLayout;
