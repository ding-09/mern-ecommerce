import styled from 'styled-components';

export const StyledCard = styled.article`
  background: rgba(0, 0, 0, 0.2) url(${(props) => typeof props.image === 'object' ? props.image.mobile : props.image}) no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 5.6rem;
  position: relative;
  grid-area: ${props => props.gridPos};
  h2,
  a {
    position: relative;
    z-index: 3;
  }
  h2 {
    margin-bottom: 2.4rem;
    color: var(--primary-white-text);
    white-space: pre-line;
    text-align: center;
  }
  a {
    background-color: var(--primary-white-bg);
    color: var(--primary-dark-text);
    border: 1px solid var(--primary-dark-text);
    border-radius: 0.2rem;
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

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    background: rgba(0, 0, 0, 0.2) url(${(props) => typeof props.image === 'object' ? props.image.tablet : props.image}) no-repeat;
    background-size: cover;
    min-height: 40rem;
  }
`;
