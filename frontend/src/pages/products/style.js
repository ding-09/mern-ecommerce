import styled from 'styled-components';

export const ProductsPage = styled.section`
  margin-bottom: 4rem;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  color: var(--primary-dark-text);
`;

export const Heading = styled.h2`
  margin-right: 1rem;
  text-transform: capitalize;
`;

export const ItemCount = styled.span`
  opacity: 0.5;
  font-weight: 600;
  font-size: 1.4rem;
`;

export const ProductCards = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(48%, 1fr));
  grid-gap: 2rem 1.2rem;
  gap: 2rem 1.2rem;

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(32%, 1fr));
    gap: 3.2rem 1.6rem;
  }

  @media screen and (min-width: 1200px) {
    gap: 4rem 2rem;
    grid-template-columns: repeat(4, minmax(20%, 1fr));
  }
`;
