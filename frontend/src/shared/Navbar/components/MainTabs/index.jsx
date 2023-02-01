import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { withStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const CustomTab = withStyles({
  root: {
    color: "#fff",
  },
  selected: {
    color: "#d9cb1a !important",
    backgroundColor: "#141b2d !important",
  },
})(LinkTab);

function LinkTab(props) {
  const navigate = useNavigate();
  return (
    <Tab
      onClick={(event) => {
        event.preventDefault();
        navigate(props.href);
      }}
      {...props}
      // TabIndicatorProps={{
      //   style: { transition: "none" },
      // }}
      disableFocusRipple
      sx={{
        fontSize: "medium",
        fontFamily: "revert",
        fontWeight: "bold",
        paddingY: 4,
        paddingX: 4,
      }}
    />
  );
}

const MainTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} textColor="secondary">
        <CustomTab label="Player Analysis" href="/" />
        <CustomTab label="Final 11" href="/final11" />
      </Tabs>
    </Box>
  );
};

export default MainTabs;
