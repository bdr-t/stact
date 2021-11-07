import styled from 'styled-components';
import LoginForm from '../components/LoginForm/LoginForm';
import { LogoXl } from '../assets/Logo';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 3em;
`;

const Login = () => (
  <Container>
    <LogoXl />
    <LoginForm />
  </Container>
);

export default Login;
