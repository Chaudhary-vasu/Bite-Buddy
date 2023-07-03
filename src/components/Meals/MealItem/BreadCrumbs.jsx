import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

const BreadCrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-aria-label="breadcrumb">
        <Link underline="hover">Home</Link>
        <Link underline="hover">Meal-Details</Link>
        <Typography color="text.primary">Meals-Details</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumbs;
