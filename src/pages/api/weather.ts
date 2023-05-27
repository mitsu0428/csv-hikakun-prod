export const getWeather = async (city: string, apiKey: string) => {
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ja&units=metric`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};
