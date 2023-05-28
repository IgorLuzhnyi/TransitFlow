import {
  Container,
  Grid,
  Stack,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import styled from "@emotion/styled";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const NavButton = ({ children }) => {
  return (
    <Button
      variant="text"
      sx={{
        pt: 0,
        pb: 0,
        fontFamily: "'Krub', sans-serif",
        fontWeight: 400,
        color: "#fff",
        textTransform: "capitalize",
      }}
    >
      {children}
    </Button>
  );
};

const SocialMediaIconButton = styled(IconButton)(({ theme }) => ({
  color: "#fff",

  "&:hover": {
    transition: ".3s",
    color: theme.palette.primary.veryLight,
  },
}));

const Navbar = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.2)",
      }}
    >
      <Container disableGutters maxWidth="lg">
        <Grid columns={9} container>
          <Grid
            item
            lg={5}
            sx={{
              pt: 3.5,
              pb: 3.5,
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={3}
            >
              <NavButton>Home</NavButton>
              <NavButton>About</NavButton>
              <NavButton>Pages</NavButton>
              <NavButton>Project</NavButton>
              <NavButton>Contact</NavButton>
            </Stack>
          </Grid>
          <Grid
            item
            lg={2}
            sx={{ pt: 3, pb: 3, display: "flex", justifyContent: "flex-end" }}
          >
            <Stack direction="row">
              <SocialMediaIconButton>
                <InstagramIcon />
              </SocialMediaIconButton>
              <SocialMediaIconButton>
                <FacebookIcon />
              </SocialMediaIconButton>
              <SocialMediaIconButton>
                <TwitterIcon />
              </SocialMediaIconButton>
              <SocialMediaIconButton>
                <LinkedInIcon />
              </SocialMediaIconButton>
            </Stack>
          </Grid>
          <Grid
            item
            lg={2}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            Big button
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Navbar;
