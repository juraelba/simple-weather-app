import React from "react";
import styled from "styled-components";
import { Select } from "antd";
import { CityData, resData } from "../../../common/Type/types";

const { Option } = Select;

interface WeatherDisplayProps {
  apiData: resData;
  defaultValue: CityData[];
  setApiId: Function;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  setApiId,
  apiData,
  defaultValue,
}) => {

  const handleChange = (value: number[]) => {
    setApiId(value);
  };

  return (
    <Wrapper>
      <Select
        mode="multiple"
        allowClear
        style={{
          width: "100%",
        }}
        placeholder="Please select"
        defaultValue={[defaultValue[0].id]}
        onChange={handleChange}
      >
        {apiData.map((item: CityData) => {
          return (
            <Option key={item.id} value={item.id}>
              {item.name}
            </Option>
          );
        })}
      </Select>
    </Wrapper>
  );
};

export default WeatherDisplay;

const Wrapper = styled.div`
  margin: 30px;
`;
