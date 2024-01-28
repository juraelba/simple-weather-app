import React from "react";
import { Table } from "antd";
import styled from "styled-components";
import { resData } from "../../../common/Type/types"; 

interface WeatherDisplayProps {
  resData: resData;
  isLoading: boolean;
}

const WeatherList:  React.FC<WeatherDisplayProps> = ({
  resData,
  isLoading,
}) => {
  const columns = [
    {
      title: "City",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Temperature",
      dataIndex: "temp",
      key: "temp",
      sorter: (a: any, b: any) => a?.main?.temp - b?.main?.temp,
      render: (_: any, data: any) => {
        return <span>{data?.main?.temp}</span>;
      },
    },
    {
      title: "Wind speed",
      dataIndex: "speed",
      key: "speed",
      sorter: (a: any, b: any) => a?.wind?.speed - b?.wind?.speed,
      render: (_: any, data: any) => {
        return <span>{data?.wind?.speed}</span>;
      },
    },
    {
      title: "Weather",
      dataIndex: "weather",
      key: "weather",
      render: (_: any, data: any) => {
        return <span>{data?.weather?.[0]?.description}</span>;
      },
    },
  ];

  return (
    <Wrapper>
      <div className="table-container">
        <Table dataSource={resData} columns={columns} loading={isLoading} />
      </div>
    </Wrapper>
  );
};

export default WeatherList;

const Wrapper = styled.div`
  margin: 0px 30px;
`;
