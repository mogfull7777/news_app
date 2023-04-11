import React, {useEffect, useState} from 'react';
import axios from "axios";
const App = () => {

    // 1. 뉴스 데이터를 담는 그릇 설정.
    const [news, setNews] = useState([])

    //2. 뉴스 정보를 가져오는 함수를 선언. async - await

    const getNews = async () => {
        try {
            // 4. 주소설정
            const add = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-11&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f";

            const res = await axios.get(add)

            console.log("aaaaaaaaaa", res.data.articles)
            setNews(res.data.articles)


        } catch (err) {
            console.log(err)
        }
    }

    // 3. useEffect 무조건 실행되는 함수.

    useEffect(() => {
        getNews()
    }, [])

  return (
      <div>
        <h1>{news.length}</h1>
          {news && news.map(item => (
              <div>
                  <h1>{item.title}</h1>
                  <h2>{item.author}</h2>
              </div>
          ))}
      </div>
  );
};

export default App;
