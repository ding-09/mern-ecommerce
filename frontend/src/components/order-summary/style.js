import styled from 'styled-components';

export const StyledOrderSummary = styled.section`
  margin-bottom: 4.8rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  span {
    font-weight: 500;
    font-size: 1.6rem;
  }
`;

export const CostBreakdown = styled.section`
  > article {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;
  }
  .total-cost {
    padding-top: 1.2rem;
    margin: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: 500;
    font-size: 1.4rem;
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    article:not(.total-cost) {
      margin-bottom: 1.6rem;
    }
    .total-cost {
      font-size: 1.6rem;
    }
  }
`;
