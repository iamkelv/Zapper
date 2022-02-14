import { style } from "@mui/system";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GridViewIcon from "@mui/icons-material/GridView";
import CommitIcon from "@mui/icons-material/Commit";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import styled from "styled-components";
const TabWrapper = styled.div`
  padding: 5px 20px;
  height: 300px;
  border: 1px solid gray;
`;
const GridWrapper = styled.div`
  padding: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const Grid = styled.div``;
const Grid1 = styled(SplitscreenIcon)``;
const Grid2 = styled(GridViewIcon)``;
const GridPrice = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 120px;
  margin-left: 5px;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
const GridArrow = styled.div`
  display: flex;
  font-size: 12px !important;
`;
const ArrowIcon = styled(ArrowForwardIosIcon)`
  display: flex;
  font-size: 12px;
  height: 12px !important;
`;
const GridArrowDropDownIcon = styled(ArrowDropDownIcon)``;
const Network = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 120px;
  margin-left: 5px;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
const Share = styled(CommitIcon)`
  display: flex;
  font-size: 12px;
  height: 12px !important;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const TapHead = styled.div`
  font-weight: 700;
`;

export default function App() {
  return (
    <TabWrapper>
      <Tabs>
        <TabList>
          <TapHead>
            <Tab>Portfolio</Tab>
            <Tab>NFTs</Tab>
            <Tab>History</Tab>
          </TapHead>
        </TabList>

        <TabPanel>
          <GridWrapper>
            <Wrapper>
              <Grid>
                <Grid1 />
                <Grid2 />
              </Grid>
              <GridPrice>
                {" "}
                <GridArrow>
                  <ArrowIcon />
                </GridArrow>
                $0.01 <GridArrowDropDownIcon />
              </GridPrice>
            </Wrapper>
            <Network>
              <Share />
              Network <GridArrowDropDownIcon />
            </Network>
          </GridWrapper>

          <ProfileMenu>
            <DropHeader>Only Show Balances Above</DropHeader>
          </ProfileMenu>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </TabWrapper>
  );
}

const InputAmount = styled.input`
  heigh: 30px;
`;
const ProfileMenu = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  flex-direction: row;
  background-color: #141a1e;
  display: flex;
  width: 250px;
  height: 95px;

  justify-content: cent;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 0px 16px -10px whitesmoke;
  -webkit-box-shadow: 0px 0px 16px -10px whitesmoke;
  -moz-box-shadow: 0px 0px 16px -10px whitesmoke;
`;

const DropHeader = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  justify-content: center;
  width: inherit;
`;
