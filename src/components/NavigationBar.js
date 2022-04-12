import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Typography from "@mui/material/Typography";

export default function NavigationBar() {
    return (
        <AppBar position='static' sx={{ mb: 2 }}>
            <Toolbar>
                <Typography align='center' variant="h5" component="div" sx={{ flexGrow: 1 }}>Staking Calculator</Typography>
            </Toolbar>

        </AppBar>


    )
}