import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const WeatherContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const WeatherInfo = styled.div`
  margin-top: 20px;
`;

const WeatherDescription = styled.p`
  font-size: 18px;
`;

const IndexPage: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const city = "Tokyo"; // 取得する都市名
  const apiKey = "9624dd5751a4d41b77bc8d4a92d93cd1"; // OpenWeatherMapのAPIキー

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ja&units=metric`;
        const response = await axios.get(apiUrl);
        setWeather(response.data);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <WeatherContainer>
      <h1>Weather Information</h1>
      {weather ? (
        <WeatherInfo>
          <p>City: {weather.name}</p>
          <p>Temperature: {weather.main?.temp}°C</p>
          <WeatherDescription>
            Description: {weather.weather[0]?.description}
          </WeatherDescription>
        </WeatherInfo>
      ) : (
        <p>Loading...</p>
      )}
    </WeatherContainer>
  );
};

export default IndexPage;
