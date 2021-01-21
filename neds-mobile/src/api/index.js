import axios from "axios";
import { getStandardisedRaceData } from "./mapper";

export const getNextRaces = async (count = 45) => {
  const url = `https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=${count}`;
  try {
    const { data } = await axios.get(url);
    return getStandardisedRaceData(data.data);
  } catch (e) {
    throw e;
  }
};
