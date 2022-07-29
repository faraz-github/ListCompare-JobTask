import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';

export default function ButtonAppBar() {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0}>
                <Container disableGutters>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            List Computation App
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>


    );
}
