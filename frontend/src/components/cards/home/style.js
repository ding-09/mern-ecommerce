import styled from 'styled-components';

export const StyledCard = styled.article`
  background: rgba(0, 0, 0, 0.2) url(${(props) => props.img}) no-repeat;
  background-size: cover;
  min-height: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 5.6rem;
  position: relative;
  h2,
  a {
    position: relative;
    z-index: 3;
  }
  h2 {
    margin-bottom: 2rem;
    color: var(--primary-white-text);
    white-space: pre-line;
    text-align: center;
  }
  a {
    background-color: var(--primary-white-bg);
    color: var(--primary-dark-text);
    border: 1px solid var(--primary-dark-text);
    border-radius: 0.2rem;
    width: 14rem;
  }
  .dark-overlay {
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;