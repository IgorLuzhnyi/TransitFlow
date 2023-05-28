import { Box, IconButton, Stack, Typography } from "@mui/material";
import { BsClock } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import { theme } from "../../theme";

const iconStyles = {
  height: "22px",
  width: "22px",
  fontWeight: "100",
  color: theme.palette.secondary.main,
};

export const optionsData = [
  {
    firstText: "Mon - Sat 9.00 - 18.00",
    secondText: "Sunday Closed",
    optionIcon: <BsClock style={iconStyles} />,
  },
  {
    firstText: "Email",
    secondText: "contact@logistics.com",
    optionIcon: <CiMail style={iconStyles} />,
  },
  {
    firstText: "Call Us",
    secondText: "(00) 112 365 489",
    optionIcon: <SlPhone style={iconStyles} />,
  },
];

export const ContactOption = ({ data }) => {
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        alignItems: "center",
        fontFamily: "'Krub', sans-serif",
      }}
    >
      <IconButton
        sx={{
          mr: 2,
          padding: "20px",
          border: `1px solid ${theme.palette.primary.veryLight}`,
          backgroundColor: theme.palette.primary.lightTwo,
        }}
      >
        {data.optionIcon}
      </IconButton>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="small">{data.firstText}</Typography>
        <Typography variant="small">{data.secondText}</Typography>
      </Box>
    </Stack>
  );
};
