import dayjs from "dayjs";

// Functions for standardising FE data values to easily accommodate schema changes in BE

const categories = {
  "9daef0d7-bf3c-4f50-921d-8e818c60fe61": "greyhound",
  "161d9be2-e909-4326-8c2c-35ed71fb460b": "harness",
  "4a2788f8-e825-4d36-9894-efd4baf1cfae": "horse",
};

export const getStandardisedRaceData = (serverData) => {
  if (serverData) {
    const summaries = serverData["race_summaries"];
    return (
      Object.keys(summaries)
        // standardise schema
        .map((id) => {
          const value = summaries[id];
          const startTime = dayjs.unix(value["advertised_start"].seconds);
          const meetingName = value["meeting_name"];
          const raceNumber = value["race_number"];
          const category = categories[value["category_id"]];
          return {
            startTime,
            meetingName,
            raceNumber,
            category: category || "unknown",
          };
        })
        // filter out unknown values
        .filter((item) => item.category !== "unknown")
        // sort to ascending
        .sort((a, b) => {
          return a.startTime - b.startTime;
        })
    );
  }
  return [];
};
