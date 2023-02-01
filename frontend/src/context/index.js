import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  // const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [selectedOpeners, setSelectedOpeners] = useState([]);
  const [selectedMiddleorders, setSelectedMiddleorders] = useState([]);
  const [selectedFinishers, setSelectedFinishers] = useState([]);
  const [selectedAllrounders, setSelectedAllrounders] = useState([]);
  const [selectedBowlers, setSselectedBowlers] = useState([]);

  const [tabIndex, setTabIndex] = useState(0);

  const [openers, setOpeners] = useState([]);
  const [middleorders, setMiddleorders] = useState([]);
  const [finishers, setFinishers] = useState([]);
  const [allrounders, setAllrounders] = useState([]);
  const [bowlers, setBowlers] = useState([]);

  const handleChangeSelectedPlayer = (
    selectedIds,
    handleClick,
    setSelection
  ) => {
    // console.log()
    // const selectedIdsSet = new Set([...selectedIds, ...selectedPlayers.map(player => player.id)]);
    console.log(selectedIds);
    setSelection(() => selectedIds);

    if (
      selectedOpeners.length +
        selectedMiddleorders.length +
        selectedFinishers.length +
        selectedAllrounders.length +
        selectedBowlers.length >
      11
    ) {
      handleClick();
      return;
    }

    // const selectedIdsSet = new Set([
    //   ...selectedOpeners,
    //   ...selectedMiddleorders,
    //   ...selectedFinishers,
    //   ...selectedAllrounders,
    //   ...selectedBowlers,
    // ]);

    // console.log(selectedIdsSet);

    // const allPlayers = [
    //   ...openers,
    //   ...middleorders,
    //   ...finishers,
    //   ...allrounders,
    //   ...bowlers,
    // ];

    // setSelectedPlayers(() =>
    //   allPlayers.filter((player) => selectedIdsSet.has(player.id))
    // );
  };

  const getOpeners = async () => {
    if (openers.length > 0) return;
    const { data } = await axios.get("/openers");
    setOpeners(data);
  };

  const getMiddleorder = async () => {
    if (middleorders.length > 0) return;
    const { data } = await axios.get("/middleorder");
    setMiddleorders(data);
  };

  const getFinishers = async () => {
    if (finishers.length > 0) return;
    const { data } = await axios.get("/finishers");
    setFinishers(data);
  };

  const getAllrounders = async () => {
    if (allrounders.length > 0) return;
    const { data } = await axios.get("/allrounder");
    setAllrounders(data);
  };

  const getBowlers = async () => {
    if (bowlers.length > 0) return;
    const { data } = await axios.get("/bowlers");
    setBowlers(data);
  };

  useEffect(() => {
    switch (tabIndex) {
      case 0:
        getOpeners();
        break;

      case 1:
        getMiddleorder();
        break;
      case 2:
        getFinishers();
        break;
      case 3:
        getAllrounders();
        break;
      case 4:
        getBowlers();
        break;

      default:
        break;
    }
  }, [tabIndex]);

  return (
    <AppContext.Provider
      value={{
        handleChangeSelectedPlayer,
        tabIndex,
        setTabIndex,
        openers,
        middleorders,
        finishers,
        allrounders,
        bowlers,
        selectedOpeners,
        selectedMiddleorders,
        selectedFinishers,
        selectedAllrounders,
        selectedBowlers,
        setSelectedOpeners,
        setSelectedMiddleorders,
        setSelectedFinishers,
        setSelectedAllrounders,
        setSselectedBowlers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
