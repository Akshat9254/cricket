import { Stack } from "@mui/material";
import { PlayerTable, PlayerChart } from "../../shared";

const HomePage = () => {
  return (
    <Stack direction={"column"}>
      <Stack padding={2}>
        <PlayerTable />
        <PlayerChart />
      </Stack>
    </Stack>
  );
};

export default HomePage;
