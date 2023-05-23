import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import IconLogo from "../../assets/IconLogo/IconLogo";

const Header = () => {
  const HeaderOption = () => {
    return (
      <Stack>
        <IconButton></IconButton>
        <Box>
          <Typography></Typography>
          <Typography></Typography>
        </Box>
      </Stack>
    );
  };

  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{ backgroundColor: "primary.main", color: "#fff" }}
    >
      <Container disableGutters maxWidth="lg" sx={{ pt: 6, pb: 6 }}>
        <Grid container columns={6}>
          <Grid
            item
            lg={2}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <IconLogo />
              <Typography variant="h4">TransitFlow</Typography>
            </Stack>
          </Grid>
          <Grid
            item
            lg={4}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Stack direction="row">
              lg=4lg=4lg=4lg=4lg=4lg=4lg=4lg=4lg=4lg=4lg=4lg=4
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Header;
