import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Icon } from '@material-ui/core';
import styled from 'styled-components';

export default function Client() {

  const [classDetails, setClassDetails] = useState({
    class_name: '',
    type: '',
    start_time: '',
    duration: '',
    intensity: '',
    location: '',
    max_size: '',
    registered: ''
  });

  const handleClassRemove = (id) => {
    //   Remove class function which will remove the class
    axiosWithAuth().delete(`http://localhost:5000/api/fitness/${id}`)
  };

  const handleClassAdd = (e) => {
    e.preventDefault();
    //   Add class function which will add class
    axiosWithAuth().post('http://localhost:5000/api/fitness/')
  };

  return (
    <div>
      <div>
        <StyledWelcomeText>Welcome, Jane Doe!</StyledWelcomeText>
        <StyledWelcomeText>Here are your week schedules.</StyledWelcomeText>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <StyledCol>Tuesday</StyledCol>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <StyledCol>Wednesday</StyledCol>
            <td>Cycling</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <StyledCol>Friday</StyledCol>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <StyledCol>Saturday</StyledCol>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <StyledCol>Sunday</StyledCol>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </StyledTable>
      </div>

      {/* Need to create Header component to add nav link to classes page */}

      <StyledContainer>
        <StyledCardContainer>
          <StyledHeadline>Current Classes</StyledHeadline>
          <StyledCards>
            <StyledClassTitle>Cycling</StyledClassTitle>
            <StyledInstructor>Instructor: Jane Doe</StyledInstructor>
            <StyledDate>Date: October 19, 2021</StyledDate>
            <StyledClassDescription>
              Class description goes here
            </StyledClassDescription>
            <StyledButton onClick={handleClassRemove}>
              Remove Class
            </StyledButton>
          </StyledCards>
        </StyledCardContainer>

        <StyledCardContainer>
          <StyledHeadline>Available Classes</StyledHeadline>
          <StyledCards>
            <StyledClassTitle value={classDetails.class_name}>Cycling</StyledClassTitle>
            <StyledInstructor>Instructor: Jane Doe</StyledInstructor>
            <StyledDate value={classDetails.start_time}>Date: October 19, 2021</StyledDate>
            <StyledClassDescription value={classDetails.type}>
              Class description goes here
            </StyledClassDescription>
            <StyledButton onClick={handleClassAdd}>Add Class</StyledButton>
          </StyledCards>
        </StyledCardContainer>
      </StyledContainer>
    </div>
  );
}

const StyledCol = styled.td`
  background: black;
  color: white !important;
  text-transform: uppercase;
  font-size: 0.6em;
  text-align: center;
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
  width: 80%;
  height: 60vh;
  tr {
    &:nth-child(2n) {
      background: #eff0f1;
    }
    &:nth-child(2n + 3) {
      background: #fff;
    }
  }
  th,
  td {
    padding: 1rem;
    width: 10em;
  }
  td {
    color: black;
  }
`;

const StyledButton = styled.button`
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  background-color: #e0e0e0;
  outline: none;
  border: none;
  padding: 2%;
  cursor: pointer;
  text-transform: uppercase;
`;

const StyledClassDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 2%;
  line-height: 1.1;
  letter-spacing: 0.1rem;
`;

const StyledDate = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.5%;
`;

const StyledInstructor = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.5%;
`;

const StyledClassTitle = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.5%;
`;

const StyledHeadline = styled.h2`
  border-bottom: 1px solid #ccc;
  text-align: center;
  margin-top: 0;
  padding-bottom: 2%;
`;

const StyledCardContainer = styled.div`
  margin: 0 auto;
  width: 45%;
  border: 1px solid hsl(0, 0%, 82%);
  border-radius: 4px;
  box-shadow: 0 30px 60px -30px hsla(0, 0%, 0%, 0.5);
  padding: 2%;
  background-color: hsl(0, 0%, 100%);
  margin-bottom: 2%;
`;

const StyledCards = styled.div`
  border: 1px solid #ddd;
  padding: 2%;
  margin: 0 auto;
`;

const StyledWelcomeText = styled.h1`
  text-align: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  border-radius: 10px;
  padding: 2%;
  margin: 0 auto;
  margin-bottom: 1%;
`;
