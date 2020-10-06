const standard_allowance = 12500;

function computeTax(income){
    let allowance = standard_allowance;
    if(income > 100000){
        allowance = standard_allowance - ( income - 100000) / 2;
        allowance = Math.max(allowance, 0);
    }

    const adjusted_taxable_income = income - allowance;

    if(adjusted_taxable_income <= 0){
        return 0;
    }

    if(adjusted_taxable_income <= 37500 ){
        return (income - allowance) * .2;
    }
    
    if(adjusted_taxable_income <= 150000){
        const basic_rate = 37500 * .2;
        const higher_rate = (adjusted_taxable_income - 37500) * .4;
        return basic_rate + higher_rate;
    }
    else{
        const basic_rate = 37500 * .2;
        const higher_rate = (150000-37500) *.4;
        const additional_rate = (adjusted_taxable_income - 150000) * .45;
        return basic_rate + higher_rate + additional_rate;
    }
}

export default computeTax;

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
