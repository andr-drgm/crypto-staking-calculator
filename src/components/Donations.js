import { Typography, Box } from "@mui/material"

export default function Donations(){
    return(
        <Box sx={{bgcolor: "primary.light", color: "white", p:"5px", m:"5px", borderRadius: "12px"}}>
            <Typography align="center" variant="h6">Do you use it often? Support this project!🍻</Typography>
            <br/>
            <Typography align="center">Bitcoin: 3E1kx7M9gXa8aKFp8MsvRrzJvDJvUhKz3g</Typography>
            <Typography align="center">Ethereum: 0xd3205c2804ab9CAAF18e792505BB52457ba0A2BA</Typography>
            <Typography align="center">EGLD: erd1n042lh7fwzl6uqljrytkwmke04tufk68hewcwp8qac5uy3p3ralst435x7</Typography>
        </Box>
    )
}