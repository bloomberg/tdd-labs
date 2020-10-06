function isLeapYear(year){
    const isDivisibleBy400 = year % 400 === 0;
    const isDivisibleBy100 = year % 100 === 0;
    const isDivisibleBy4 = year % 4 === 0;

    return isDivisibleBy400 || (isDivisibleBy4 && !isDivisibleBy100)
}

export default isLeapYear;

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
