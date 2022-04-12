import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Component } from 'react';

export default class RewardsTable extends Component{

    constructor(props){
        super(props);

        this.state = {
            dailyAPR: "",
            dailyReward: "",
            weeklyAPR: "",
            weeklyReward: "",
            monthlyAPR: "",
            monthlyReward: "",
            yearlyAPR: "",
            yearlyReward: ""
        }
    }

    render(){
        return(
            <TableContainer component={Paper}>
                        <Table  aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{backgroundColor: 'secondary.main'}}>
                                    <TableCell align="center" sx={{width: "25%", color: 'white'}}>Times</TableCell>
                                    <TableCell align="center" sx={{color: 'white'}}>Rewards</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{bgcolor: 'primary.light'}}>
                                <TableRow >
                                    <TableCell align="center">daily</TableCell>
                                    <TableCell align="center">{this.props.dailyReward} ({this.props.dailyAPR}%)</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell align="center">weekly</TableCell>
                                    <TableCell align="center">{this.props.weeklyReward} ({this.props.weeklyAPR}%)</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell align="center">monthly</TableCell>
                                    <TableCell align="center">{this.props.monthlyReward} ({this.props.monthlyAPR}%)</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell align="center">yearly</TableCell>
                                    <TableCell align="center">{this.props.yearlyReward} ({this.props.yearlyAPR}%)</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
        )
    }

    
}