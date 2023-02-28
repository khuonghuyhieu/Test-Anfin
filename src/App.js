import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import img1 from "./assets/img/_Graphics@2x.png";
import img2 from "./assets/img/Component.png";
import img3 from "./assets/img/icon.png";
import img4 from "./assets/img/_Pattern2.png";

const img = [
  {
    id: 0,
    item: img1,
  },
  {
    id: 1,
    item: img2,
  },
  {
    id: 2,
    item: img3,
  },
];

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://63b7ce3d4f17e3a931dcf827.mockapi.io/api/anfin/product1/anfin"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index} className="body">
            <div className="header">
              <div className="title">{item.title}</div>
              <div className="sub-title">{item.excerpt}</div>
            </div>
            <div className="content">
              {item?.data?.map((item, index) => {
                console.log(index);
                return (
                  <div key={index} className="item-box">
                    <div className="container-box">
                      {img?.map((item) => {
                        if (item?.id === index) {
                          return <img src={item.item} alt="" />;
                        }
                      })}
                      <div className="content-title">{item.title}</div>
                      <div className="content-subTitle">{item.excerpt}</div>
                    </div>
                    <div className="box-footer">
                      <hr />
                      <div className="date-time">{item.date}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="icon">
              <img src={img4} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
