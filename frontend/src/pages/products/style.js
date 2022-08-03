import styled from 'styled-components'

export const ProductsPage = styled.section`
  margin-bottom: 4rem;
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  color: var(--primary-dark-text);
`;

export const Heading = styled.h2`
  margin-right: 1rem;
`

export const ItemCount = styled.span`
  opacity: 0.5;
  font-weight: 600;
  font-size: 1.4rem;
`

export const ProductCards = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem 1.2rem;
  gap: 1rem 1.2rem;
`