import { Grid } from "@mui/material";
import styled from "@emotion/styled";

const IconLogo = () => {
  const Particle = styled("div")(({ theme }) => ({
    width: "10px",
    height: "10px",
    backgroundColor: theme.palette.secondary.main,
  }));

  return (
    <Grid container columns={2} sx={{ width: "26px", height: "26px", mr: 1 }}>
      <Grid
        item
        lg={1}
        md={1}
        sm={1}
        xs={1}
        sx={{ transform: "rotate(65deg)", translate: "-5px 0" }}
      >
        <Particle />
      </Grid>
      <Grid item lg={1} md={1} sm={1} xs={1}>
        <Particle />
      </Grid>
      <Grid item lg={1} md={1} sm={1} xs={1}>
        <Particle />
      </Grid>
      <Grid item lg={1} md={1} sm={1} xs={1}>
        <Particle />
      </Grid>
    </Grid>
  );
};

export default IconLogo;
