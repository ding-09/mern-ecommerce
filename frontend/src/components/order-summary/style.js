import styled from 'styled-components'

export const StyledOrderSummary = styled.section`
  header {
    margin-bottom: 1.6rem;
    font-weight: 500;
    font-size: 1.4rem;
  }
  margin-bottom: 4.8rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CostBreakdown = styled.section`
  > article {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;
  }
  .total-cost {
    padding-top: 1.2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: 500;
    font-size: 1.4rem;
  }
`;