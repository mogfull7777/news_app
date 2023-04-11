import React, {useEffect, useState} from 'react';

const App = () => {

    // 1. 뉴스 데이터를 담는 그릇 설정.
    const [news, setNews] = useState([])

    //2. 뉴스 정보를 가져오는 함수를 선언. async - await

    const getNews = async () => {
        try {

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
      </div>
  );
};

export default App;
