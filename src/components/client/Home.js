import styled from 'styled-components';
import Header from '../DashboardHeader';
import Sidebar from './Sidebar';

export default function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <StyledDashboardContent>
        <div>
          <StyledWelcomeText>Welcome, Jane Doe!</StyledWelcomeText>
          <StyledWelcomeText>Here are your 4 week schedules.</StyledWelcomeText>
        </div>
        <div>
          <StyledTable>
            <StyledRow>
              <th></th>
              <th>Week 1</th>
              <th>Week 2</th>
              <th>Week 3</th>
              <th>Week 4</th>
            </StyledRow>
            <tr>
              <StyledCol>Monday</StyledCol>
              <td data-label='Week 1'></td>
              <td data-label='Week 2'></td>
              <td data-label='Week 3'></td>
              <td data-label='Week 4'></td>
            </tr>
            <tr>
              <StyledCol>Tuesday</StyledCol>
              <td data-label='Week 1'></td>
              <td data-label='Week 2'></td>
              <td data-label='Week 3'></td>
              <td data-label='Week 4'></td>
            </tr>
            <tr>
              <StyledCol>Wednesday</StyledCol>
              <td data-label='Week 1'></td>
              <td data-label='Week 2'></td>
              <td data-label='Week 3'></td>
              <td data-label='Week 4'></td>
            </tr>
            <tr>
              <StyledCol>Thursday</StyledCol>
              <td data-label='Week 1'></td>
              <td data-label='Week 2'></td>
              <td data-label='Week 3'></td>
              <td data-label='Week 4'></td>
            </tr>
            <tr>
              <StyledCol>Friday</StyledCol>
              <td data-label='Week 1'></td>
              <td data-label='Week 2'></td>
              <td data-label='Week 3'></td>
              <td data-label='Week 4'></td>
            </tr>
            <tr>
              <StyledCol>Saturday</StyledCol>
              <td data-label='Week 1'></td>
              <td data-label='Week 2'></td>
              <td data-label='Week 3'></td>
              <td data-label='Week 4'></td>
            </tr>
            <tr>
              <StyledCol>Sunday</StyledCol>
              <td data-label='Week 1'></td>
              <td data-label='Week 2'></td>
              <td data-label='Week 3'></td>
              <td data-label='Week 4'></td>
            </tr>
          </StyledTable>
        </div>
      </StyledDashboardContent>
    </div>
  );
}

const StyledWelcomeText = styled.h1`
  text-align: center;
  font-size: 1.4rem;
  @media (min-width: 769px) {
    font-size: 2rem;
  }
`;

const StyledDashboardContent = styled.div`
  @media (min-width: 769px) {
    margin-left: calc(15.625rem - 6%);
    padding: calc(3.938rem + 1rem);
  }
`;

const StyledCol = styled.td`
  background: black;
  color: white !important;
  text-transform: uppercase;
  font-size: 0.8rem;
  text-align: center;
  @media (min-width: 769px) {
    font-size: 0.6rem;
  }
`;

const StyledRow = styled.tr`
  background: black;
  text-transform: uppercase;
  font-size: 0.6em;
  text-align: center;
`;

const StyledTable = styled.table`
  color: white;
  margin: 0 auto;
  width: 100%;
  display: block;
  tr {
    display: block;
    text-align: right;
    position: relative;
    &:nth-child(2n) {
      background: #eff0f1;
    }
    &:nth-child(2n + 3) {
      background: #fff;
    }
    @media (min-width: 769px) {
      display: table-row;
      text-align: center;
    }
  }
  th {
    display: none;
    padding: 1rem;
    width: 10em;
    @media (min-width: 769px) {
      display: table-cell;
    }
  }
  td {
    display: block;
    color: black;
    position: relative;
    padding: 1.5rem;
    width: 10em;
    border-bottom: 1px solid black;
    @media (min-width: 769px) {
      display: table-cell;
      padding: 1rem;
      border: none;
    }
    @media (max-width: 769px) {
      width: 100%;
      &::before {
        content: attr(data-label);
        position: absolute;
        left: 0;
        width: 50%;
        text-align: left;
        padding-bottom: 2%;
      }
    }
  }
  @media (min-width: 769px) {
    width: 80%;
    height: 60vh;
    display: table;
  }
`;
