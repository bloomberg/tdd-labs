import React from 'react';
import { render, screen, fireEvent, wait } from '@testing-library/react';
import LeapYearForm from './LeapYearForm';


test('contains input label', () => {
  // Given
  render(<LeapYearForm />);

  // When
  const inputElement = screen.getByLabelText("Input Year")

  // Then
  expect(inputElement).toBeInTheDocument();
  expect(inputElement.value).toBe("");
});


test('input a non leap year', () => {
  // Given
  render(<LeapYearForm/>);

  // When
  const inputElement = screen.getByLabelText("Input Year");

  fireEvent.change(inputElement, {
      target: {value: "1975"}
    });

  // Then
  expect(inputElement).toBeInTheDocument();
  expect(inputElement.value).toBe("1975");

  expect(screen.getByText("is not a leap year")).toBeInTheDocument();
});


test('input a leap year', () => {
  // Given
  render(<LeapYearForm/>);

  // When
  const inputElement = screen.getByLabelText("Input Year")
  
  fireEvent.change(inputElement, {
      target: {value: "2020"}
    })

  // Then
  expect(inputElement).toBeInTheDocument();
  expect(inputElement.value).toBe("2020");

  expect(screen.getByText("is a leap year")).toBeInTheDocument();
});
