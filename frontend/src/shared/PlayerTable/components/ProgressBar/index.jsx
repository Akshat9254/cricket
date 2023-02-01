import { createStyles, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import React from "react";

const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        border: `1px solid ${theme.palette.divider}`,
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: 26,
        borderRadius: 2,
      },
      value: {
        position: "absolute",
        lineHeight: "24px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        color: "#fff",
      },
      bar: {
        height: "100%",
        "&.low": {
          backgroundColor: "#D9CB1A",
        },
        "&.medium": {
          backgroundColor: "#D9CB1A",
        },
        "&.high": {
          backgroundColor: "#D9CB1A",
        },
      },
    }),
  { defaultTheme }
);

const ProgressBar = React.memo(function ProgressBar(props) {
  const { runs, maximum } = props;
  const runsInPercent = (runs / maximum) * 100;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.value}>{runs}</div>
      <div
        className={clsx(classes.bar, {
          low: runsInPercent < 30,
          medium: runsInPercent >= 30 && runsInPercent <= 70,
          high: runsInPercent > 70,
        })}
        style={{ maxWidth: `${runsInPercent}%` }}
      />
    </div>
  );
});
const renderProgress = ({ runs, maximum }) => {
  return <ProgressBar runs={runs} maximum={maximum} />;
};

export default renderProgress;
