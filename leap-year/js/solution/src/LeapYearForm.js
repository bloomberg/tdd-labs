import React from 'react';
import isLeapYear from './isLeapYear';


class LeapYearForm extends React.Component {
    constructor(){
        super();
        this.state = {year: "", leapYear: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        const year = parseInt(evt.target.value);
        this.setState({year: year, leapYear:isLeapYear(year)});
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Input Year
                        <input type="number"
                                pattern="\d+"
                                value={this.state.year}
                                onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        {`is ${this.state.leapYear ? "a" : "not a"} leap year`}
                    </label>
                </form>
            </div>
        )
    }
}

export default LeapYearForm;

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
