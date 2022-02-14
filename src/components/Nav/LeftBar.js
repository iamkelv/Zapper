import React, { useState } from "react";
import eth from "../../assets/img/eth.png";
import btc from "../../assets/img/btc.png";
import styled from "styled-components";
import zapper from "../../assets/img/zapper.png";
import usa from "../../assets/img/usa.png";
import avater from "../../assets/img/avater.png";
import HomeIcon from "@mui/icons-material/Home";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsIcon from "@mui/icons-material/Settings";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ThemeSwitch from "./Switch";
const Container = styled.div`
  border-right: 2px solid gray;
  padding: 20px 20px 0 0;
  justify:content:flex-start;
  flex: 2;
  display:flex;
  flex-direction:column;
   @media (max-width: 768px) {
    display: none;
    padding:20px;
  }
  
`;
const Header = styled.div``;
const SidebarBrand = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`;
const DropdownAccount = styled.div`
  padding: 10px 10px;
  margin-top: 50px;
  display: flex;
  &:hover {
    border-radius: 5px;
    cursor: pointer;
    opacity: 0.6;
  }
`;
const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const LogoText = styled.div`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 24px;
`;
const Avater = styled.img`
  margin-right: 20px;
  border-radius: 50%;
`;

const QuestWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;
const Quest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0px 10px;
  font-size: 12px !important;
  font-weight: normal;
  background-color: rgb(32, 42, 48);
  &:hover {
    background-color: gray;
  }
`;

const Card = styled(Quest)`
  background-color: rgb(32, 42, 48);
`;
const CoinAddress = styled.div`
  background-color: rgb(32, 42, 48);
  &:hover {
    background-color: rgb(32, 42, 48);
  }
`;
const QuestIcon = styled(EmojiEventsOutlinedIcon)`
  background-color: inherit;
`;
const QuestText = styled.span`
  background-color: inherit;
`;

const RewardCard = styled(CardGiftcardOutlinedIcon)`
  background-color: inherit;
`;
const GiftText = styled.span`
  background-color: inherit;
`;
const ArrowDropDown = styled(ArrowDropDownIcon)``;
function LeftBar() {
  //const [showcoin, setShowcoin] = useState(false);
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState(false);

  return (
    <Container>
      <Header>
        <SidebarBrand>
          <Logo src={zapper} alt="logo" />
          <LogoText>zapper</LogoText>
        </SidebarBrand>
        <DropdownAccount>
          <Avater src={avater} alt="" />
          <CoinAddress>
            <div>0xc1..26eb8</div>
            <div>
              <div>0xc1..26eb8</div>
            </div>
          </CoinAddress>
          <div>
            <ArrowDropDown />
          </div>
        </DropdownAccount>
        <QuestWrapper>
          <Quest>
            <QuestIcon />
            <QuestText>Quest</QuestText>
          </Quest>
          <Card>
            <RewardCard />
            <GiftText>Reward</GiftText>
          </Card>
        </QuestWrapper>
      </Header>
      <MenuWrapper>
        <Menu>
          <List>
            {" "}
            <span>
              <HomeIcon />
            </span>{" "}
            Home
          </List>
          <List>
            {" "}
            <span>
              <CompareArrowsIcon />
            </span>{" "}
            Exchange
          </List>
          <List>
            <span>
              <BookmarkIcon />
            </span>
            Bridge
          </List>
          <List>
            <span>
              <BookmarkIcon />
            </span>
            Pool
          </List>
          <List>
            {" "}
            <span>
              <SendAndArchiveIcon />
            </span>{" "}
            Save
          </List>
          <List>
            {" "}
            <span>
              <BookmarkIcon />
            </span>{" "}
            Address Book
          </List>
          <List>
            {" "}
            <span>
              <MoreHorizIcon />
            </span>{" "}
            More
          </List>
        </Menu>
      </MenuWrapper>
      <LeftFooter>
        <SettingTitle>
          <SettingsIcon /> Settings
        </SettingTitle>
        <CoinMenu show={show} onClick={() => setShow(!show)}>
          <MenuHead>Select Network</MenuHead>
          <Cols>
            <FirstCol>
              {coinsData.map((item, index) => {
                return (
                  <li key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </FirstCol>
            <SecondCol>
              {coinsData.map((item, index) => {
                return (
                  <li key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </SecondCol>
          </Cols>
        </CoinMenu>
        <Ethereum onClick={() => setShow(!show)}>
          <EthImage src={eth} alt="" /> Ethereum <UpArrow />
        </Ethereum>
        <CountryMenu country={country} onClick={() => setCountry(!country)}>
          <CountrCol1>
            {countryData.map((item, index) => {
              return (
                <li key={item.id}>
                  <img src={item.img} alt="country logo" />{" "}
                  <span>{item.title}</span>
                </li>
              );
            })}
          </CountrCol1>
          <CountrCol2>
            {" "}
            {countryData.map((item, index) => {
              return (
                <li key={item.id}>
                  <img src={item.img} alt="country logo" />{" "}
                  <span>{item.title}</span>
                </li>
              );
            })}
          </CountrCol2>
          <CountrCol3>
            {" "}
            {countryData.map((item, index) => {
              return (
                <li key={item.id}>
                  <img src={item.img} alt="country logo" />{" "}
                  <span>{item.title}</span>
                </li>
              );
            })}
          </CountrCol3>
          <CountrCol4>
            {" "}
            {countryData.map((item, index) => {
              return (
                <li key={item.id}>
                  <img src={item.img} alt="country logo" />{" "}
                  <span>{item.title}</span>
                </li>
              );
            })}
          </CountrCol4>
        </CountryMenu>
        <Country onClick={() => setCountry(!country)}>
          <Currency>
            <CurrencyICon src={usa} alt="usa"></CurrencyICon> USD{" "}
            <ArrowDropUpIcon />
          </Currency>{" "}
          <ThemeSwitch />{" "}
        </Country>
      </LeftFooter>
    </Container>
  );
}
export default LeftBar;
const countryData = [
  { id: 1, img: usa, title: "USD" },
  { id: 2, img: usa, title: "CAD" },
  { id: 3, img: usa, title: "MXN" },
  { id: 4, img: usa, title: "BRL" },
  { id: 5, img: usa, title: "AUD" },
];
const coinsData = [
  { id: 1, img: btc, title: "Btc" },
  { id: 2, img: btc, title: "Eth" },
  { id: 3, img: btc, title: "Shib" },
  { id: 4, img: btc, title: "Alt" },
  { id: 5, img: btc, title: "Doge" },
];
const CountrCol1 = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  list-style: none;
  display: flex;

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    font-weight: 700;
    border-radius: 5px;
    padding: 7px 15px;
    &:hover {
      cursor: pointer;
      background-color: #1a2227;
    }
  }

  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;
const CountrCol2 = styled(CountrCol1)``;
const CountrCol3 = styled(CountrCol1)``;
const CountrCol4 = styled(CountrCol1)``;
const CountryMenu = styled.div`
    height: 300px;
    padding:20px;
    position: absolute;
    display:${(props) => (props.country ? "flex" : "none")};
    justify-content:space-between;
    
    flex-direction:column;
    background-color: gray;
    z-index: 15;
    width: 500px;
    bottom: 150px;
    margin-bottom: -110px;
    border-radius: 10px;
    transition: transform 0.3s ease-in;
    background-color: #141A1E;
     box-shadow: 0px 0px 16px -10px whitesmoke;
    -webkit-box-shadow: 0px 0px 16px -10px whitesmoke;
    -moz-box-shadow:0px 0px 16px -10px whitesmoke;
}
`;
const CoinMenu = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  transition: transform 0.3s ease-in;
  background-color: #141a1e;
  height: 400px;
  width: 400px;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
  z-index: 12;
  margin: -370px 0 0 0;
  box-shadow: 0px 0px 16px -10px whitesmoke;
  -webkit-box-shadow: 0px 0px 16px -10px whitesmoke;
  -moz-box-shadow: 0px 0px 16px -10px whitesmoke;
`;
const FirstCol = styled.ul`
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 10px;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      background-color: grey;
    }
    img {
      background-color: inherit;
      width: 30px;
      height: 30px;
    }
    span {
      background-color: inherit;
      font-weight: 700;
      font-size: 20px;
    }
  }
`;
const SecondCol = styled(FirstCol)``;
const Cols = styled.div`
  display: flex;
  flex-direction: row;
`;
// const MenuHead = styled.div``;
const MenuHead = styled.div`
  display: flex;

  transition: transform 0.3s ease-in;
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
`;
const Country = styled.div`
  display: flex;
  gap: 30px;
`;

const CurrencyOptions = styled.div`
  display-direction: column;
  //display: ${(props) => (props.show ? "block" : "none")};
  background-color: rgb(20, 26, 30);
  transition: transform 0.3s ease-in;
  width: 500px;
  margin: 0 0 50px 0;
  height: 300px;
  z-index: 6;
  border: 2px solid gray;
  box-shadow: 0px 0px 16px -10px white;
  -webkit-box-shadow: 0px 0px 16px -10px white;
  -moz-box-shadow: 0px 0px 16px -10px white;
  position: absolute;
  margin-top: -200px;
  border-radius: 6px;
`;

const CoinOptions = styled.div`
  display-direction: column;
  //display: ${(props) => (props.show ? "block" : "none")};
  background-color: rgb(20, 26, 30);
  width: 500px;
  height: 500px;
  z-index: 6;
  marg
  border: 2px solid gray;
  box-shadow: 0px 0px 16px -10px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 0px 0px 16px -10px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 16px -10px rgba(0, 0, 0, 1);
  position: absolute;
  margin-top: -420px;
  border-radius: 6px;
`;
const OptionColA = styled.div`
  display: flex;
  display-direction: column;
`;
const OptionColB = styled.div`
  display: flex;
  display-direction: column;
`;
const CurrencyICon = styled.img`
  display: flex;
  aling-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 5px;
  justify-content: space-between;
`;

const Currency = styled.div`
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  border: 1px solid gray;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const UpArrow = styled(ArrowDropUpIcon)`
  background-color: inherit;
`;
const Ethereum = styled.div`
  display: flex;
  cursor: pointer;
  padding: 15px 10px;
  align-items: center;
  border-radius: 10px;
  justify-content: space-between;
  gap: 10px;
  &:hover {
    background-color: grey;
    opacity: 0.6;
    transition: ease-in-out 0.3s;
  }
`;

const EthImage = styled.img`
  width: 30px;
  height: 30px;
  background-color: #617fea;
  padding: 5px;
  border-radius: 50%;
  align-items: center;
`;

const LeftFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  position: relative;
  justify-content: space-between;
`;

const MenuWrapper = styled.div`
  display: flex;
`;
const Menu = styled.ul`
  margin-top: 50px;
  list-style: none;
  display: flex;
  width: 100% !important;
  flex-direction: column;
  gap: 20px;
`;
const List = styled.li`
  display: flex;
  cursor: pointer;
  width: 100% !important;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

const SettingTitle = styled(List)`
  font-size: 18px;
`;
