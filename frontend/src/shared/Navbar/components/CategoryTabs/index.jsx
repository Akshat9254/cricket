import { useState } from "react";
import Box from "@mui/material/Box";
import { styled, withStyles } from "@mui/styles";
import Tab from "@mui/material/Tab";
import { Tabs } from "@mui/material";
import { AppContext } from "../../../../context";
import { useContext } from "react";

const MyTab = styled(Tab)({
  borderRadius: 4,
  borderColor: "#d9cb1a",
  borderWidth: 8,
  transform: "skew(-25deg)",
  padding: 2,
});

const CustomTab = withStyles({
  root: {
    color: "#fff",
    // transform: "skew(-20deg)",
    // padding: 2,
    backgroundColor: "#141b2d",
    borderRadius: 4,
    borderColor: "#d9cb1a",
    // marginRight: 2,
  },
  selected: {
    color: "#d9cb1a !important",
    backgroundColor: "#141b2d !important",
    // transform: "skew(-20deg)",
    // padding: 2,
    borderRadius: 4,
    borderColor: "#d9cb1a",
    borderWidth: 8,
    // marginRight: 2,
  },
})(MyTab);

const CategoryTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { setTabIndex } = useContext(AppContext);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Box sx={{ borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="secondary"
          indicatorColor=""
          sx={{ padding: 2, gap: "16px" }}
        >
          <CustomTab
            label="Openers"
            value={0}
            onClick={() => setTabIndex(0)}
          />
          <CustomTab label="Middle Orders" value={1} onClick={() => setTabIndex(1)} />
          <CustomTab
            label="Finishers"
            value={2}
            onClick={() => setTabIndex(2)}
          />
          <CustomTab
            label="All Rounders"
            value={3}
            onClick={() => setTabIndex(3)}
          />
          <CustomTab
            label="Fast Bowlers"
            value={4}
            onClick={() => setTabIndex(4)}
          />
        </Tabs>
      </Box>
      {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
    </Box>
  );
};

export default CategoryTabs;
