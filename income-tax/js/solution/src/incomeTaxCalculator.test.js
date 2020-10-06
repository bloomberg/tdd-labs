import computeTax from './incomeTaxCalculator'

test('income 5600 pays no tax',()=>{
    // Given
    const income = 5600;

    // When
    const tax = computeTax(income);

    // Then
    expect(tax).toBe(0);
});

test('income 12600 pays 20',()=>{
    // Given
    const income = 12600;

    // When
    const tax = computeTax(income);

    // Then
    expect(tax).toBe(20)
});

test('income 50000 pays 7500',()=>{
    // Given
    const income = 50000;

    // When
    const tax = computeTax(income);

    // Then
    expect(tax).toBe(7500)
});

test('income 60000 pays 11500',()=>{
    // Given
    const income = 60000;

    // When
    const tax = computeTax(income);

    // Then
    expect(tax).toBe(11500)
});

// Do we even need this test?  Maybe as it's a boundary value
// But does it add any better feedback than the previous test?
test('income 99000 pays 27100',()=>{
    // Given
    const income = 99000;

    // When
    const tax = computeTax(income);

    // Then
    expect(tax).toBe(27100)
});

test('income 110000 pays 33500',()=>{
    // Given
    const income = 110000;

    // When
    const tax = computeTax(income);

    // Then
    expect(tax).toBe(33500)
});

test('income 125000 pays 42500',()=>{
    // Given
    const income = 125000;

    // When
    const tax = computeTax(income);

    // Then
    expect(tax).toBe(42500)
});

test('income 155000 pays 54750',()=>{
    // Given
    const income = 125000;

    // When
    const tax = computeTax(income);

    // Then
    expect(tax).toBe(42500)
});

test('income 1000000 pays 435000',()=>{
    // Given
    const income = 1000000;

    // When
    const tax = computeTax(income);

    // Then
    expect(tax).toBe(435000)
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
