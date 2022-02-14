import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import styled from "styled-components";
import HomeTabSection from "../Home/HomeTabSection";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AddIcon from "@mui/icons-material/Add";
import ReplyIcon from "@mui/icons-material/Reply";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import avater2 from "../../assets/img/avater2.png";

const Container = styled.div`
  border-right: 2px solid gray;
  padding: 20px 0px 0 0px;
  flex: 7;

  position: relation;
  @media (max-width: 768px) {
    display: flex;
    padding: 20px;
  }
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 25.155px;
  color: rgb(255, 255, 255);
  width: inherit;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
`;
const HeaderBar = styled.div`
  background: rgb(153, 77, 107);
  background: linear-gradient(
    90deg,
    rgba(153, 77, 107, 1) 0%,
    rgba(127, 64, 136, 1) 35%,
    rgba(89, 45, 172, 1) 100%
  );
  height: 150px;
`;
const HeaderProfile = styled.div`
  z-index: 10;
  height: 150px;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(153, 77, 107, 1) 0%,
    rgba(127, 64, 136, 1) 35%,
    rgba(89, 45, 172, 1) 100%
  );
  z-index: 10;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  border-radius: 50%;
  width: 150px;
  position: absolute;
  top: 120px;
  border: 1px solid black;
  margin-left: 10px;
  &:hover {
    background-color: red !important;
  }
`;
const ProfileWrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: red;
`;
const ProfileImg = styled.img``;
const ShareProfile = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 5px 20px;
  background-color: inherit;
`;
const DivReplyIcon = styled(ReplyIcon)``;
const ShareWrapper = styled.div`
  padding: 2px 10px;
  border-radius: 5px;
  transform: rotateY(180deg);
  &:hover {
    border: 1px solid rgb(199, 210, 218);
    transition: ease-in-out 2s;
    cursor: pointer;
    box-shadow: 0px 0px 16px -10px white;
    -webkit-box-shadow: 0px 0px 16px -10px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 16px -10px rgba(0, 0, 0, 1);
  }
`;
const AccountInfo = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 50px 15px;
`;
const AccontAddress = styled.div``;
const TopAddress = styled.div`
  color: rgb(255, 255, 255);
  font-size: 30px;
  fill: gray !important;
  font-weight: 700;
`;
const AccountNetworth = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  padding: 0 80px;
  align-items: center;
`;
const AddressDetail = styled.div`
  display: flex;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;
const AddressCopy = styled(ContentCopyIcon)`
  cursor: pointer;
  fill: gray !important;

  margin-left: 5px;
`;
const ButtomAddress = styled.div`
  fill: gray !important;
`;
const AddressLAbel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-right: 5px;
`;
const AccountWallet = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
`;
const AccountfferIcon = styled(LocalOfferIcon)`
  font-size: 12px;
  fill: gray !important;
  width: 18px !important;
  &:hover {
    cursor: pointer;
  }
`;
const AccountAddIcon = styled(AddIcon)`
  fill: gray !important;
  color: red;
`;
//const AccountfferIcon = styled()``;
const AddLabelText = styled.div``;
const FooterIcon = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-right: 5px;
  width: 100%;
  gap: 10px;
`;
const NetWorthHead = styled.div`
  display: -webkit-box;
  flex-direction: column;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  // align-items: center;

  gap: 10px;
`;

const NetWorthSettings = styled(SettingsIcon)`
  font-size: medium !important;
  &:hover {
    cursor: pointer;
  }
`;
const NetWorthArrow = styled(ArrowDropDownIcon)`
  font-size: medium !important;
  &:hover {
    cursor: pointer;
  }
`;
const NetWorthHeadWrapper = styled.div`
  display: flex;
`;
const AmountBalance = styled.div`
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;    
      display: flex;
      width: 100%;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      -webkit-flex-direction: row;
      font-weight: 700;
      font-size:20px;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: left;
      -webkit-align-items: flex-start;
      -webkit-box-align: flex-start;
      -ms-flex-align: flex-start;
      -webkit-align-items: flex-start;
      -webkit-box-align: flex-start;
      -ms-flex-align: flex-start;
      align-items: flex-start;
  }
  `;
const CircleOval1 = styled(FiberManualRecordIcon)`
  font-size: medium !important;
  fill: #5f41c6 !important;
`;
const CircleOval2 = styled(FiberManualRecordIcon)`
  font-size: medium !important;
  fill: #334753 !important;
`;

const InfoDate = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 5px 20px;
  width: 50%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
const FollowersInfo = styled.div`
  padding: 10px 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 0px;
  width: 45%;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
function Home() {
  return (
    <Container>
      <ContainerWrapper>
        <Header>Home</Header>
        <HeaderBar />
        <ProfileWrapper>
          <HeaderProfile>
            <ProfileImg />
          </HeaderProfile>
        </ProfileWrapper>
        <ShareProfile>
          <ShareWrapper>
            <DivReplyIcon />
          </ShareWrapper>
        </ShareProfile>
        <AccountInfo>
          <AccontAddress>
            <TopAddress>0xc128...6eb8</TopAddress>
            <AddressDetail>
              <ButtomAddress>0xc128...6eb8</ButtomAddress>
              <FooterIcon>
                <AddressCopy></AddressCopy>
                <AddressLAbel>
                  {" "}
                  <AccountfferIcon />
                  <AccountAddIcon /> <AddLabelText>Label</AddLabelText>
                </AddressLAbel>
              </FooterIcon>
            </AddressDetail>
          </AccontAddress>
          <AccountNetworth>
            <NetWorthHead>
              <NetWorthHeadWrapper>
                Net Worth <NetWorthSettings />
                <NetWorthArrow />
              </NetWorthHeadWrapper>
              <AmountBalance>$434.22</AmountBalance>
            </NetWorthHead>
            <AccountWallet>
              <div>
                <CircleOval1 />
                -% Wallet{" "}
              </div>
              <div>
                <CircleOval2 />
                -% Other
              </div>
            </AccountWallet>
          </AccountNetworth>
        </AccountInfo>
        <InfoDate>
          <div>Active Since</div>
          <h5>February 2022</h5>
        </InfoDate>
        <FollowersInfo>
          <Following>0 Following</Following>
          <Followers>0 Followers</Followers>
          <Rank>
            <RankIcon /> No rank yet
          </Rank>
        </FollowersInfo>
        <TabSection>
          <HomeTabSection />
        </TabSection>
        <MainFooter>
          <FooterList>
            <li>Feature Request</li>
            <li>Bug Bounties</li>
            <li>Contact Support</li>
            <li>FAQ</li>
            <li>Twitter</li>
            <li>Discord</li>
          </FooterList>
        </MainFooter>
      </ContainerWrapper>
    </Container>
  );
}

const FooterList = styled.ul`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  list-style: none;
  justify-content: space-between;
  gap: 10px;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;
const MainFooter = styled.div`
  padding: 10px 20px;
`;
const TabSection = styled.div``;
const RankIcon = styled(EmojiEventsIcon)`
      -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    background-color: inherit;
    fill: white!important;
    fill: white!important;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: 1.5rem;
}
`;
const Following = styled.div`
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Followers = styled.div`
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Rank = styled.div`
  font-weight: 600;
  background-color: #202a30;
  padding: 2px 5px;
  display: flex;
  margin-left: 5px;
  align-items: center;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export default Home;
