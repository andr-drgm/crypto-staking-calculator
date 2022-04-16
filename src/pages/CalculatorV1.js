import { Container } from "@mui/material";
import { Component } from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import RewardsTable from "./RewardsTable";
import InputAdornment from '@mui/material/InputAdornment';

export default class CalculatorV1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stakedValue: 1000,
            apr: 12,
            compoundTimes: 0,
            dailyAPR: "",
            dailyReward: "",
            weeklyAPR: "",
            weeklyReward: "",
            monthlyAPR: "",
            monthlyReward: "",
            yearlyAPR: "",
            yearlyReward: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let stakedValue = 0;
        let apr;

        let yearlyAPR, yearlyReward, dailyAPR, dailyReward, weeklyAPR, weeklyReward, monthlyAPR, monthlyReward;
        this.setState({
            [event.target.name]: event.target.value
        }, () => {

            stakedValue = this.state.stakedValue;
            if(this.state.compoundTimes === 0)
                apr = this.state.apr;
            else
                // apr = ((1 + parseInt(this.state.apr)/parseInt(this.state.compoundTimes)) ** parseInt(this.state.compoundTimes)) - 1;
                apr = (((this.state.apr / this.state.compoundTimes) / 100 + 1) ** this.state.compoundTimes - 1) * 100

            // console.log("APR: ", apr, " CompoundTimes: ", this.state.compoundTimes)

            yearlyAPR = parseInt(apr).toFixed(2);
            yearlyReward = ((stakedValue * apr) / 100).toFixed(2);
            // console.log("Staked Value: ", stakedValue, " YearlyReward: ", yearlyReward)
            dailyAPR = (yearlyAPR / 365).toFixed(2);
            dailyReward = (yearlyReward / 365).toFixed(2);
            weeklyAPR = (dailyAPR * 7).toFixed(2);
            weeklyReward = (dailyReward * 7).toFixed(2);
            monthlyAPR = (yearlyAPR / 12).toFixed(1);
            monthlyReward = (yearlyReward / 12).toFixed(1);

            this.setState({
                dailyAPR: dailyAPR,
                dailyReward: dailyReward,
                weeklyAPR: weeklyAPR,
                weeklyReward: weeklyReward,
                monthlyAPR: monthlyAPR,
                monthlyReward: monthlyReward,
                yearlyAPR: yearlyAPR,
                yearlyReward: yearlyReward
            })
        });



        
    }

    componentDidMount(){
        let stakedValue = 0;
        let apr;

        let yearlyAPR, yearlyReward, dailyAPR, dailyReward, weeklyAPR, weeklyReward, monthlyAPR, monthlyReward;
        stakedValue = this.state.stakedValue;
            apr = this.state.apr;

            yearlyAPR = this.state.apr;
            yearlyReward = (stakedValue * apr) / 100;
            // console.log("Staked Value: ", stakedValue, " YearlyReward: ", yearlyReward)
            dailyAPR = (yearlyAPR / 365).toFixed(2);
            dailyReward = (yearlyReward / 365).toFixed(2);
            weeklyAPR = dailyAPR * 7;
            weeklyReward = dailyReward * 7;
            monthlyAPR = (yearlyAPR / 12).toFixed(1);
            monthlyReward = (yearlyReward / 12).toFixed(1);

            this.setState({
                dailyAPR: dailyAPR,
                dailyReward: dailyReward,
                weeklyAPR: weeklyAPR,
                weeklyReward: weeklyReward,
                monthlyAPR: monthlyAPR,
                monthlyReward: monthlyReward,
                yearlyAPR: yearlyAPR,
                yearlyReward: yearlyReward
            })
    }

    render() {
        return (
            <Container
                component="main"
                maxWidth="sm"
                sx={{ marginBottom: 2, '& .MuiTextField-root': { mb: 2 } }}
            >
                <TextField
                    fullWidth
                    name="stakedValue"
                    type={"number"}
                    value={this.state.stakedValue}
                    onChange={this.handleChange}
                    label="Number of staked coins"
                    helperText="Enter your staked amount"

                />
                <TextField
                    fullWidth
                    name="apr"
                    type={"number"}
                    value={this.state.apr}
                    onChange={this.handleChange}
                    InputProps={{
                        endAdornment: <InputAdornment>%</InputAdornment>,
                    }}
                    label="APR"
                    helperText="Enter staking APR"
                />
                <TextField
                    fullWidth
                    select
                    name="compoundTimes"
                    label="Compound"
                    value={this.state.compoundTimes}
                    onChange={this.handleChange}
                    helperText="How often it compounds"
                >
                    <MenuItem value={0}>None</MenuItem>
                    <MenuItem value={365}>Daily</MenuItem>
                    <MenuItem value={12}>Monthly</MenuItem>
                    <MenuItem value={1}>Yearly</MenuItem>
                </TextField>

                <RewardsTable {...this.state} />


            </Container>
        )
    }
}