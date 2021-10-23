import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../DashboardHeader';
import Sidebar from './Sidebar';
import { ClassesDummyData } from './ClassesDummyData';

const initialAvailableClass = [];

export default function AvailableClasses(props) {
  const [availableClass, setAvailableClass] = useState(initialAvailableClass);

  useEffect(() => {
    setAvailableClass(ClassesDummyData);
  }, []);

  return (
    <div className='App'>
      <Header />
      <Sidebar />
      <StyledContainer>
        <StyledCardContainer>
          <StyledHeadline>Available Classes</StyledHeadline>
          <div
            style={{
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
              margin: '2%',
            }}>
            <label
              style={{
                fontWeight: '700',
              }}>
              Filter By Time:
              <select
                style={{
                  width: '100%',
                  height: '3em',
                  border: '0.1em solid hsl(0, 0%, 87%)',
                  borderRadius: '4px',
                  textIndent: '0.5em',
                  marginTop: '2%',
                  marginBottom: '2%',
                }}>
                {availableClass.map((elem, index) => (
                  <option key={index}>{elem.time}</option>
                ))}
              </select>
            </label>
            <label
              style={{
                fontWeight: '700',
              }}>
              Filter By Date:
              <select
                style={{
                  width: '100%',
                  height: '3em',
                  border: '0.1em solid hsl(0, 0%, 87%)',
                  borderRadius: '4px',
                  textIndent: '0.5em',
                  marginTop: '2%',
                  marginBottom: '2%',
                }}>
                {availableClass.map((elem, index) => (
                  <option key={index}>{elem.date}</option>
                ))}
              </select>
            </label>
            <label
              style={{
                fontWeight: '700',
              }}>
              Filter By Duration:
              <select
                style={{
                  width: '100%',
                  height: '3em',
                  border: '0.1em solid hsl(0, 0%, 87%)',
                  borderRadius: '4px',
                  textIndent: '0.5em',
                  marginTop: '2%',
                  marginBottom: '2%',
                }}>
                {availableClass.map((elem, index) => (
                  <option key={index}>{elem.duration}</option>
                ))}
              </select>
            </label>
            <label
              style={{
                fontWeight: '700',
              }}>
              Filter By Type:
              <select
                style={{
                  width: '100%',
                  height: '3em',
                  border: '0.1em solid hsl(0, 0%, 87%)',
                  borderRadius: '4px',
                  textIndent: '0.5em',
                  marginTop: '2%',
                  marginBottom: '2%',
                }}>
                {availableClass.map((elem, index) => (
                  <option key={index}>{elem.type}</option>
                ))}
              </select>
            </label>
            <label
              style={{
                fontWeight: '700',
              }}>
              Filter By Intensity:
              <select
                style={{
                  width: '100%',
                  height: '3em',
                  border: '0.1em solid hsl(0, 0%, 87%)',
                  borderRadius: '4px',
                  textIndent: '0.5em',
                  marginTop: '2%',
                  marginBottom: '2%',
                }}>
                {availableClass.map((elem, index) => (
                  <option key={index}>{elem.intensity}</option>
                ))}
              </select>
            </label>
            <label
              style={{
                fontWeight: '700',
              }}>
              Filter By Location:
              <select
                style={{
                  width: '100%',
                  height: '3em',
                  border: '0.1em solid hsl(0, 0%, 87%)',
                  borderRadius: '4px',
                  textIndent: '0.5em',
                  marginTop: '2%',
                  marginBottom: '2%',
                }}>
                {availableClass.map((elem, index) => (
                  <option key={index}>{elem.location}</option>
                ))}
              </select>
            </label>
          </div>
          {availableClass.map((elem, index) => (
            <StyledCards key={index}>
              <StyledClassTitle>{elem.name}</StyledClassTitle>
              <StyledInstructor>Instructor: {elem.instructor}</StyledInstructor>
              <StyledContent>Type: {elem.type}</StyledContent>
              <StyledContent>Date: {elem.date}</StyledContent>
              <StyledContent>Time: {elem.time}</StyledContent>
              <StyledContent>Duration: {elem.duration}</StyledContent>
              <StyledContent>Intensity: {elem.intensity}</StyledContent>
              <StyledContent>Location: {elem.location}</StyledContent>
              <StyledContent>
                Registered Members: {elem.attendees}
              </StyledContent>
              <StyledContent>Max Class Size: {elem.max}</StyledContent>
              <StyledButton onClick={console.log(elem)}>Add Class</StyledButton>
            </StyledCards>
          ))}
        </StyledCardContainer>
      </StyledContainer>
    </div>
  );
}

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

const StyledContent = styled.h4`
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
  position: relative;
`;

const StyledHeadline = styled.h2`
  border-bottom: 1px solid #ccc;
  text-align: center;
  margin-top: 0;
  padding-bottom: 2%;
`;

const StyledCardContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  border: 1px solid hsl(0, 0%, 82%);
  border-radius: 4px;
  box-shadow: 0 30px 60px -30px hsla(0, 0%, 0%, 0.5);
  padding: 2%;
  background-color: hsl(0, 0%, 100%);
  margin-bottom: 2%;
  @media (min-width: 769px) {
    width: 95%;
  }
`;

const StyledCards = styled.div`
  border: 1px solid #ddd;
  padding: 2%;
  margin: 0 auto;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  border-radius: 10px;
  margin: 0 auto;
  @media (min-width: 769px) {
    flex-flow: row wrap;
    margin-left: calc(15.625rem + 1%);
    margin-right: 0.5%;
    padding: calc(3.938rem + 1rem);
    padding-left: 0;
    padding-right: 0;
  }
`;
