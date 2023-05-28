import { Container, Grid, Typography, Stack } from "@mui/material";
import IconLogo from "../../assets/IconLogo/IconLogo";
import { optionsData } from "../reused components/ContactOptions";
import { ContactOption } from "../reused components/ContactOptions";

const Header = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: "primary.main", color: "#fff" }}
    >
      <Container disableGutters maxWidth="lg" sx={{ pt: 6, pb: 6 }}>
        <Grid container columns={6}>
          <Grid
            item
            lg={1}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <IconLogo />
              <Typography variant="h4">TransitFlow</Typography>
            </Stack>
          </Grid>
          <Grid
            item
            lg={5}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Stack direction="row" spacing={6}>
              {optionsData.map((option, index) => (
                <ContactOption key={index} data={option} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Header;
