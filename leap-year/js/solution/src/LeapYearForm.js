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
