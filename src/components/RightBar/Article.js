import { style } from "@mui/system";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import styled from "styled-components";
import {
  LineChart,
  Line,
  AreaChart,
  Legend,
  linearGradient,
  stop,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
const Container = styled.div``;
const CardWrap = styled.div`
  height: 350px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  background-color: #1a2227;
`;
const CardHead = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  background-color: #1a2227;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled(CardHead)`
  font-weight: 700;
  color: white;
  border-bottom: 1px solid gray;
  width: 100%;
  padding: 10px 0 5px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardContent = styled.div`
  padding: 5px;
  background-color: #141a1e;
  margin-top: 20px;

  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;
const Head = styled.div``;
const ChartSection = styled.div`
  width: 200px;
`;
const data = [
  {
    name: "",
    buy: 4000,
    sell: 2400,
    amt: 2400,
  },
  {
    name: "",
    buy: 3000,
    sell: 1398,
    amt: 2210,
  },
  {
    name: "",
    buy: 2000,
    sell: 9800,
    amt: 2290,
  },
  {
    name: "",
    buy: 2780,
    sell: 3908,
    amt: 2000,
  },
  {
    name: "",
    buy: 1890,
    sell: 4800,
    amt: 2181,
  },
];
function Article(props) {
  return (
    <Container>
      <CardWrap>
        <CardHead>
          <Title>Zapper Learn - Recent articles</Title>
        </CardHead>
        <CardContent>
          <ListArticle>
            {datanews.map((item, index) => {
              return (
                <List>
                  <img src={item.img} alt="image" />
                  <p>{item.news}</p>
                  <p>{item.time}</p>
                </List>
              );
            })}
          </ListArticle>
        </CardContent>
      </CardWrap>
    </Container>
  );
}
export default Article;

const datanews = [
  {
    id: 1,
    img: { LocalFireDepartmentIcon },
    news: "What are Automated Market Makers?",
    time: "5 min. read",
  },
  {
    id: 2,
    img: "sdsd",
    news: "DEX 101: What is a Decentralized Exchange?",
    time: "5 min. read",
  },
  {
    id: 3,
    img: "sdsd",
    news: "Introduction to Bridges",
    time: "5 min. read",
  },
];
const ListArticle = styled.div``;
const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  cursor: pointer;
`;
const LineChartWrappper = styled(LineChart)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  mix-width: 100px;
  width: 200px;
`;
const Divider = styled(Title)`
  border-bottom: none;
  font-weight: 700;
  color: white;
  /* border-bottom: 1px solid gray; */
  width: 100%;
  padding: 10px 0 5px 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
