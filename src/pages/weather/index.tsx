import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import HeaderWeather from "./layout/layout";
import SeoSettings from "../components/utils/SeoSettings";

const IndexPage: React.FC = () => {
  const [todayWeather, setTodayWeather] = useState<any>(null);
  const [tomorrowWeather, setTomorrowWeather] = useState<any>(null);
  const [today, setToday] = useState<any>(null);
  const [tomorrow, setTomorrow] = useState<any>(null);

  const city = "Tokyo"; // 取得する都市名
  const apiKey =
    process.env.NEXT_PUBLIC_WEATHER_API_KEY ||
    "9624dd5751a4d41b77bc8d4a92d93cd1";

  useEffect(() => {
    const fetchWeather = async () => {
      setToday(new Date().toLocaleDateString("ja-JP"));

      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setTomorrow(tomorrow.toLocaleDateString("ja-JP"));
      try {
        // ローカルストレージから天気データを取得
        const storedWeatherData = localStorage.getItem("weatherData");
        if (storedWeatherData) {
          const { todayWeather, tomorrowWeather } =
            JSON.parse(storedWeatherData);
          setWeatherData(todayWeather, tomorrowWeather);
        } else {
          const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=ja&units=metric`;
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

          setWeatherData(todayWeather, tomorrowWeather);

          // 天気データをローカルストレージに保存
          localStorage.setItem(
            "weatherData",
            JSON.stringify({ todayWeather, tomorrowWeather })
          );
        }
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  const setWeatherData = (todayWeather: any, tomorrowWeather: any) => {
    setTodayWeather(todayWeather);
    setTomorrowWeather(tomorrowWeather);
  };
  return (
    <BasicContainer>
      <SeoSettings
        pageTitle={"天気比較ツール"}
        pageDescription={
          "天気を比較する具体的な使い方・事例などを紹介しています。簡単に差分を抽出し、結果を得ることができます。"
        }
        pagePath={"https://hikakuchan.jp/weather"}
        pageImg={"https://hikakuchan.jp/weather"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <HeaderWeather />
      <h1>Weather Information</h1>
      {todayWeather ? (
        <>
          <BasicSubTitle>Weather Today</BasicSubTitle>
          <BasicSubContainer>
            <BasicText>今日の日付 {today}</BasicText>
            <BasicText>エリア: {city}</BasicText>
            <BasicText>気温: {todayWeather.main?.temp}°C</BasicText>
            <BasicText>説明: {todayWeather.weather[0]?.description}</BasicText>
          </BasicSubContainer>
        </>
      ) : (
        <BasicText>Loading weather... [today]</BasicText>
      )}

      {tomorrowWeather ? (
        <>
          <BasicSubTitle>Weather Tomorrow</BasicSubTitle>
          <BasicSubContainer>
            <BasicText>明日の日付 {tomorrow}</BasicText>
            <BasicText>エリア: {city}</BasicText>
            <BasicText>気温: {tomorrowWeather.main?.temp}°C</BasicText>
            <BasicText>
              説明: {tomorrowWeather.weather[0]?.description}
            </BasicText>
          </BasicSubContainer>
        </>
      ) : (
        <BasicText>Loading weather... [tomorrow]</BasicText>
      )}
    </BasicContainer>
  );
};

export default IndexPage;

const BasicContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  margin-top: 1rem; /* Update: Add box-shadow and background-color */
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const BasicSubContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 2rem; /* Update: Add border and padding */
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 2rem;
`;

const BasicSubTitle = styled.h2`
  position: relative;
  padding: 1.5rem 1rem;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 600px;
    height: 10px;
    content: "";
    background-image: -webkit-repeating-linear-gradient(
      135deg,
      #000,
      #000 1px,
      transparent 2px,
      transparent 5px
    );
    background-image: repeating-linear-gradient(
      -45deg,
      #000,
      #000 1px,
      transparent 2px,
      transparent 5px
    );
    background-size: 7px 7px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
`;

const BasicText = styled.span`
  font-size: 1rem;
  line-height: 1.5;
`;
