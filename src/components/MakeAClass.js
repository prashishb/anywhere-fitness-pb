import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ClassesDummyData } from './client/ClassesDummyData';

const initialFormValues = {
  instructor: '',
  name: '',
  type: '',
  date: '',
  time: '',
  duration: '',
  intensity: '',
  location: '',
  attendees: '',
  max: '',
};

export default function MakeAClass(props) {
  const [classes, setClasses] = useState(ClassesDummyData);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorText, setErrorText] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newClass = {
      instructor: formValues.instructor,
      name: formValues.name.trim(),
      type: formValues.type.trim(),
      date: formValues.date,
      time: formValues.time,
      duration: formValues.duration,
      intensity: formValues.intensity,
      location: formValues.location.trim(),
      attendees: formValues.attendees,
      max: formValues.max,
    };
    if (
      !newClass.instructor ||
      !newClass.name ||
      !newClass.type ||
      !newClass.date ||
      !newClass.time ||
      !newClass.duration ||
      !newClass.intensity ||
      !newClass.location ||
      !newClass.attendees ||
      !newClass.max
    ) {
      setErrorText('Please enter in all the fields!');
      return;
    }

    axios
      .post('fakeapi.com', newClass)
      .then((res) => {
        setClasses([res.data, ...classes]);
        setFormValues(initialFormValues);
        setErrorText('');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    axios.get('fakeapi.com').then((res) => setClasses(res.data));
  }, []);

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    updateForm(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submitForm();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledTitle>Set up Your class</StyledTitle>
      <StyledFormField>
        <StyledInputs
          type='text'
          name='instructor'
          values={formValues.instructor}
          onChange={onChange}
          placeholder='John Doe'
        />
        <StyledInputs
          type='text'
          name='name'
          values={formValues.name}
          onChange={onChange}
          placeholder='Class Name'
        />
        <StyledInputs
          type='text'
          name='type'
          values={formValues.type}
          onChange={onChange}
          placeholder='Type Of Class'
        />

        <StyledInputs
          type='time'
          name='time'
          values={formValues.time}
          onChange={onChange}
          placeholder='Start Time'
        />

        <StyledInputs
          type='text'
          name='duration'
          values={formValues.duration}
          onChange={onChange}
          placeholder='Duration'
        />

        <StyledLabel>
          Intensity level
          <select
            name='intensity'
            values={formValues.intensity}
            onChange={onChange}>
            <option value=''>- Select an option -</option>
            <option value='Beginner'>Beginner</option>
            <option value='Moderate'>Moderate</option>
            <option value='Hard'>Hard</option>
            <option value='Intense'>Intense</option>
          </select>
        </StyledLabel>

        <StyledInputs
          type='text'
          name='location'
          values={formValues.location}
          onChange={onChange}
          placeholder='Location'
        />

        <StyledLabel>
          Current number of registered attendees
          <StyledInputs
            type='text'
            name='attendees'
            values={formValues.attendees}
            onChange={onChange}
          />
        </StyledLabel>

        <StyledLabel>
          Max Class Size
          <StyledInputs
            type='number'
            name='max'
            values={formValues.max}
            onChange={onChange}
            min='1'
            max='300'
          />
        </StyledLabel>
        <StyledButton type='submit' id='submitBtn'>
          Make Class
        </StyledButton>
      </StyledFormField>
    </StyledForm>
  );
}

const StyledTitle = styled.h1`
  text-align: center;
  font-weight: 700;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  margin-top: 10%; /* Temporary for now. Should remove once header component is added */
  width: 80%;
  border: 1px solid hsl(0, 0%, 82%);
  border-radius: 4px;
  box-shadow: 0 30px 60px -30px hsla(0, 0%, 0%, 0.5);
  padding: 2%;
  background-color: hsl(0, 0%, 100%);
  margin-bottom: 2%;
  @media (min-width: 1150px) {
    width: 25%;
    font-weight: 700;
  }
`;
const StyledFormField = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  width: 100%;
  padding: 4%;
  height: 2.5em;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  text-transform: uppercase;
  box-shadow: 0 2px 10px hsla(0, 0%, 0%, 0.16), 0 3px 6px hsla(0, 0%, 0%, 0.1);
  transition: all 0.5s ease-out;
  &:hover {
    background-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 100%);
    box-shadow: 0 8px 6px -6px hsla(0, 0%, 0%, 0.3);
  }
  &:disabled {
    pointer-events: none;
  }
`;
const StyledInputs = styled.input`
  width: 100%;
  height: 3em;
  border: 0.1em solid hsl(0, 0%, 87%);
  border-radius: 4px;
  text-indent: 0.5em;
  margin-top: 2%;
  margin-bottom: 2%;
`;
const StyledLabel = styled.label`
  width: 100%;
  font-weight: 700;
`;
