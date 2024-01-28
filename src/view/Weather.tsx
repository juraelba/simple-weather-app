import React, { useState, useEffect } from "react";
import { Button } from "antd";
import axios from "axios";
import styled from "styled-components";
import WeatherDisplay from "../components/pageSection/weather/WeatherDisplay";
import WeatherList from "../components/pageSection/weather/WeatherList";
import { apiData } from "../common/apiData/NL-city-data";
import { CityData, resData } from "../common/Type/types";

const Weather: React.FC = () => {
  const [apiId, setApiId] = useState<number[] | null>(null);
  const [resData, setResData] = useState<resData>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const defaultValue: CityData[] = apiData.filter((item) => {
    return item.name === "Amsterdam";
  });

  const loadWheatherDetails = (apiId_: number[] | null) => {
    setIsloading(true);
    axios(
      `https://api.openweathermap.org/data/2.5/group?id=${apiId_}&appid=4bcb36b65a133c9e168dec0b9c709f65&units=metric`
    )
      .then((res) => {
        setIsloading(false);
        setResData(res.data.list);
      })
      .catch((err) => {
        setIsloading(false);
        console.log(err);
      });
  };

  const handleClick = () => {
    loadWheatherDetails(apiId);
  };

  useEffect(() => {
    setApiId([defaultValue[0].id]);
  }, []);

  return (
    <Wrapper>
      <WeatherDisplay
        setApiId={setApiId}
        defaultValue={defaultValue}
        apiData={apiData}
      />
      <div className="submit-btn">
        <Button type="primary" onClick={handleClick}>
          Show Whether
        </Button>
      </div>
      {resData && <WeatherList resData={resData} isLoading={isLoading} />}
    </Wrapper>
  );
};

export default Weather;

const Wrapper = styled.div`
  margin: 30px;
  .submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
`;
