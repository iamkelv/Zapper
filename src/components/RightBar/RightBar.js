import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SettingsIcon from "@mui/icons-material/Settings";
import Card from "./Card";
import Chart from "./Chart";
import Article from "./Article";
const Container = styled.div`
  padding: 20px 0 0 0;
  flex: 3;
  height: 1000px;

  overflow: scroll;
  scrollbar-width: none;
  flex-direction: column;
`;
const Wrapper = styled.div`
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  padding: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Search = styled.div`
  display: -webkit-box;
  border-radius: 10px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  background-color: #202a30;
`;
const SearchIcon1 = styled(SearchIcon)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: #202a30;
`;
const InputField = styled.input`
  padding: 0.5em;
  outline: none;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "white"};
  background: #202a30;
  border: none;
  /* border-radius: 3px; */
  border-bottom: 1px solid gray;
`;

const data = [
  {
    id: 1,
    leftText: "My Bundles",
    rightText: "",
    heading: "No bundles added yet",
    subHeading: "Click on the (+) icon to add a bundle",
  },
  {
    id: 2,
    leftText: "Token Watchlist",
    rightText: "",
    heading: "No bundles added yet",
    subHeading:
      "Search for a token and favourite it to add it to the watchlist",
  },
];
function RightBar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <SearchIcon1 />
          <InputField type="text" placeholder="Search by account token" />
        </Search>
        <WigetWrapper>
          <WigetTitle>Widgets</WigetTitle>
          <WigetIcon>
            <Setting />
            <Arrow1 />
          </WigetIcon>
        </WigetWrapper>
      </Wrapper>

      {data.map((item, index) => {
        return (
          <CardWrapper>
            <Card
              key={item.id}
              heading={item.heading}
              leftTExt={item.leftText}
              rightText={item.rightText}
              icon=""
              subHeading="text"
            />
          </CardWrapper>
        );
      })}
      <ChartWrapper>
        <Chart />
      </ChartWrapper>
      <ArticleWrapper>
        <Article />
      </ArticleWrapper>
    </Container>
  );
}
const ArticleWrapper = styled.div``;
const ChartWrapper = styled.div`
  padding: 10px;
`;
const CardWrapper = styled.div`
  padding: 10px;
`;
const WigetWrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  margin-top: 20px;
`;
const WigetIcon = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
const Setting = styled(SettingsIcon)``;
const Arrow1 = styled(ArrowDropDownIcon)`
  height: 400px;
`;
const WigetTitle = styled.div``;
export default RightBar;
