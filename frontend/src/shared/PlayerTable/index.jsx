import { Alert, Box, Snackbar, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { Header } from "../../shared";
import { renderProgress } from "./components";
import { AppContext } from "../../context";
import React, { useContext } from "react";
// import { columns } from "../../utils";

const titles = [
  { title: "Openers", subtitle: "Power Hitters" },
  { title: "Middle Orders", subtitle: "Anchors" },
  { title: "Finishers", subtitle: "Lower Order Anchors" },
  { title: "All Rounders", subtitle: "Lower Middle Order" },
  { title: "Fast Bowlers", subtitle: "Tail End" },
];

const PlayerTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    handleChangeSelectedPlayer,
    tabIndex,
    openers,
    middleorders,
    finishers,
    allrounders,
    bowlers,
    setSelectedOpeners,
    setSelectedMiddleorders,
    setSelectedFinishers,
    setSelectedAllrounders,
    setSselectedBowlers,
    selectedOpeners,
    selectedMiddleorders,
    selectedFinishers,
    selectedAllrounders,
    selectedBowlers,
  } = useContext(AppContext);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const columns = [
    [
      {
        field: "Name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "Team",
        headerName: "Team",
        headerAlign: "left",
        align: "left",
      },
      {
        field: "Batting Style",
        headerName: "Batting Style",
      },
      {
        field: "Innings Batted",
        headerName: "Innings Batted",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Runs",
        headerName: "Runs",
        headerAlign: "center",
        type: Number,
        flex: 1,
        renderCell: ({ row: { Runs } }) => {
          return (
            <Box
              width="60%"
              m="0 auto"
              py={1}
              display="flex"
              justifyContent="center"
              borderRadius="4px"
            >
              {renderProgress({ runs: Math.round(Runs / 10), maximum: 600 })}
            </Box>
          );
        },
      },
      {
        field: "Balls Faced",
        headerName: "Balls Faced",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Strike Rate",
        headerName: "Strike Rate",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Batting Average",
        headerName: "Batting Average",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Batting Average"].toFixed(2)}`,
      },
      {
        field: "Batting Position",
        headerName: "Batting Position",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Batting Position"].toFixed()}`,
      },
      {
        field: "Boundary %",
        headerName: "Boundary %",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Boundary %"]}%`,
      },
    ],
    [
      {
        field: "Name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "Team",
        headerName: "Team",
        headerAlign: "left",
        align: "left",
      },
      {
        field: "Batting Style",
        headerName: "Batting Style",
      },
      {
        field: "Innings Batted",
        headerName: "Innings Batted",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Runs",
        headerName: "Runs",
        headerAlign: "center",
        type: Number,
        flex: 1,
        renderCell: ({ row: { Runs } }) => {
          return (
            <Box
              width="60%"
              m="0 auto"
              py={1}
              display="flex"
              justifyContent="center"
              borderRadius="4px"
            >
              {renderProgress({ runs: Math.round(Runs / 10), maximum: 700 })}
            </Box>
          );
        },
      },
      {
        field: "Balls Faced",
        headerName: "Balls Faced",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Strike Rate",
        headerName: "Strike Rate",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Batting Average",
        headerName: "Batting Average",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Batting Average"].toFixed(2)}`,
      },
      {
        field: "Batting Position",
        headerName: "Batting Position",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Boundary %",
        headerName: "Boundary %",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Boundary %"]}%`,
      },
    ],
    [
      {
        field: "Name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "Team",
        headerName: "Team",
        headerAlign: "left",
        align: "left",
      },
      {
        field: "Batting Style",
        headerName: "Batting Style",
      },
      {
        field: "Bowling Style",
        headerName: "Bowling Style",
      },
      {
        field: "Innings Batted",
        headerName: "Innings Batted",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Runs",
        headerName: "Runs",
        headerAlign: "center",
        type: Number,
        flex: 1,
        renderCell: ({ row: { Runs } }) => {
          return (
            <Box
              width="60%"
              m="0 auto"
              py={1}
              display="flex"
              justifyContent="center"
              borderRadius="4px"
            >
              {renderProgress({ runs: Math.round(Runs / 8), maximum: 400 })}
            </Box>
          );
        },
      },
      {
        field: "Avg Balls Faced",
        headerName: "Avg Balls Faced",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Avg Balls Faced"].toFixed(2)}`,
      },
      {
        field: "Strike Rate",
        headerName: "Strike Rate",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Batting Average",
        headerName: "Batting Average",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Batting Average"].toFixed(2)}`,
      },
      {
        field: "Innings Bowled",
        headerName: "Innings Bowled",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      // {
      //   field: "Economy",
      //   headerName: "Economy",
      //   type: Number,
      //   headerAlign: "center",
      //   align: "center",
      // },
      // {
      //   field: "Bowling Strike Rate",
      //   headerName: "Bowling Strike Rate",
      //   type: Number,
      //   headerAlign: "center",
      //   align: "center",
      // },
      // {
      //   field: "Maidens",
      //   headerName: "Maidens",
      //   type: Number,
      //   headerAlign: "center",
      //   align: "center",
      // },
    ],
    [
      {
        field: "Name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      // {
      //   field: "Team",
      //   headerName: "Team",
      //   headerAlign: "left",
      //   align: "left",
      // },
      {
        field: "Batting Style",
        headerName: "Batting Style",
      },
      {
        field: "Bowling Style",
        headerName: "Bowling Style",
      },
      {
        field: "Innings Batted",
        headerName: "Innings Batted",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Runs",
        headerName: "Runs",
        headerAlign: "center",
        type: Number,
        flex: 1,
        renderCell: ({ row: { Runs } }) => {
          return (
            <Box
              width="60%"
              m="0 auto"
              py={1}
              display="flex"
              justifyContent="center"
              borderRadius="4px"
            >
              {renderProgress({ runs: Runs, maximum: 300 })}
            </Box>
          );
        },
      },
      {
        field: "Strike Rate",
        headerName: "Strike Rate",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Batting Average",
        headerName: "Batting Average",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Batting Average"].toFixed(2)}`,
      },
      {
        field: "Innings Bowled",
        headerName: "Innings Bowled",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Wickets",
        headerName: "Wickets",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Balls Bowled",
        headerName: "Balls Bowled",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Economy",
        headerName: "Economy",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Economy"].toFixed(2)}`,
      },
      {
        field: "Bowling Strike Rate",
        headerName: "Bowling Strike Rate",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Maidens",
        headerName: "Maidens",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
    ],
    [
      {
        field: "Name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "Team",
        headerName: "Team",
        headerAlign: "left",
        align: "left",
      },
      {
        field: "Bowling Style",
        headerName: "Bowling Style",
      },
      {
        field: "Innings Bowled",
        headerName: "Innings Bowled",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Balls Bowled",
        headerName: "Balls Bowled",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Runs Conceded",
        headerName: "Runs Conceded",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Wickets",
        headerName: "Wickets",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Economy",
        headerName: "Economy",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Economy"].toFixed(2)}`,
      },
      {
        field: "Bowling Average",
        headerName: "Bowling Average",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Bowling Strike Rate",
        headerName: "Bowling Strike Rate",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Dot Ball %",
        headerName: "Dot Ball %",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Maidens",
        headerName: "Maidens",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
    ],
  ];

  const rows = [openers, middleorders, finishers, allrounders, bowlers];
  const selection = [
    setSelectedOpeners,
    setSelectedMiddleorders,
    setSelectedFinishers,
    setSelectedAllrounders,
    setSselectedBowlers,
  ];

  // console.log("Player Table ", columns[tabIndex]);

  const keys = [{ filed: "id" }];
  return (
    <Box m="20px" borderColor={"gray"} border={1} borderRadius={4} p={3}>
      <Header
        title={titles[tabIndex].title}
        subtitle={titles[tabIndex].subtitle}
      />
      <Box
        m="40px 0 0 0"
        height={"45vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[200],
          },
          "& .MuiDataGrid-columnHeaders": {
            // backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            // backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            // backgroundColor: colors.blueAccent[700],
            display: "none",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          onSelectionModelChange={(selectedId) =>
            handleChangeSelectedPlayer(
              selectedId,
              handleClick,
              selection[tabIndex]
            )
          }
          selectionModel={[
            ...selectedOpeners,
            ...selectedMiddleorders,
            ...selectedFinishers,
            ...selectedAllrounders,
            ...selectedBowlers,
          ]}
          rows={rows[tabIndex]}
          columns={columns[tabIndex]}
          keys={keys}
          components={{ Toolbar: GridToolbar }}
        />
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            You cannot add more than 11 players
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default PlayerTable;
