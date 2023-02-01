import * as React from "react";
import Box from "@mui/material/Box";
import { MainTabs, CategoryTabs } from "./components";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={2}
      backgroundColor={colors.secondary[500]}
    >
      <Box />
      <Box>
        <MainTabs />
      </Box>

      <Box>
        <CategoryTabs />
      </Box>
    </Box>
  );
};

export default Navbar;
