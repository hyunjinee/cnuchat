import styled from 'styled-components';

export const Container = styled.div<{ type: 'me' | 'other' }>`
  display: flex;
  background-color: ${({ type }) => (type === 'me' ? '#f5f5f5' : 'blue')};
  align-self: ${({ type }) => (type === 'me' ? 'flex-end' : 'flex-start')};
  align-items: center;

  /* min-height: 4rem; */
  max-width: 30rem;
  width: auto;

  padding-left: 1.3rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  padding-right: 1.3rem;

  margin-left: ${({ type }) => (type === 'me' ? '0' : '0.5rem')};
  margin-right: ${({ type }) => (type === 'me' ? '0.5rem' : '0')};
  margin-top: 0.5rem;

  border-radius: 1rem;

  font-size: 1.6rem;

  line-break: anywhere;
`;

export const Message = styled.p``;
