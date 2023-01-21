type WeatherModel = {
  month: number,
  day: number,
  max: number,
  min: number,
};

type TemperatureData = {
  day: number;
  temperature: number;
};

type RawData = {
  month: number;
  day: number;
  temperature: number;
};

type DataByMonth = {
  month: number;
  data: TemperatureData[];
};

export {
  WeatherModel,
  TemperatureData,
  RawData,
  DataByMonth,
};
