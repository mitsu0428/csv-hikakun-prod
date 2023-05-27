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
  const [todayWeather, setTodayWeather] = useState<any>(null);
  const [tomorrowWeather, setTomorrowWeather] = useState<any>(null);
  const city = "Tokyo"; // 取得する都市名
  const apiKey = "9624dd5751a4d41b77bc8d4a92d93cd1"; // OpenWeatherMapのAPIキー

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=ja&units=metric`;
        const response = await axios.get(apiUrl);
        const weatherData = response.data.list;

        // 今日の天気情報を取得
        const today = new Date();
        const todayWeather = weatherData.find((data: any) => {
          const dataDate = new Date(data.dt_txt);
          return (
            dataDate.getFullYear() === today.getFullYear() &&
            dataDate.getMonth() === today.getMonth() &&
            dataDate.getDate() === today.getDate()
          );
        });

        // 明日の天気情報を取得
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const tomorrowWeather = weatherData.find((data: any) => {
          const dataDate = new Date(data.dt_txt);
          return (
            dataDate.getFullYear() === tomorrow.getFullYear() &&
            dataDate.getMonth() === tomorrow.getMonth() &&
            dataDate.getDate() === tomorrow.getDate()
          );
        });

        setTodayWeather(todayWeather);
        setTomorrowWeather(tomorrowWeather);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <WeatherContainer>
      <h1>Weather Information</h1>

      {todayWeather ? (
        <>
          <h2>Weather Today</h2>
          <WeatherInfo>
            <p>City: {city}</p>
            <p>Temperature: {todayWeather.main?.temp}°C</p>
            <WeatherDescription>
              Description: {todayWeather.weather[0]?.description}
            </WeatherDescription>
          </WeatherInfo>
        </>
      ) : (
        <p>Loading weather... [today]</p>
      )}

      {tomorrowWeather ? (
        <>
          <h2>Weather Tomorrow</h2>
          <WeatherInfo>
            <p>City: {city}</p>
            <p>Temperature: {tomorrowWeather.main?.temp}°C</p>
            <WeatherDescription>
              Description: {tomorrowWeather.weather[0]?.description}
            </WeatherDescription>
          </WeatherInfo>
        </>
      ) : (
        <p>Loading weather... [tomorrow]</p>
      )}
    </WeatherContainer>
  );
};

export default IndexPage;
