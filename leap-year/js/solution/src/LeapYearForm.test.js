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

// Copyright 2020 Bloomberg Finance L.P.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
