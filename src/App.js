import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
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
      <Container>
          <Row>
              {news && news.map(item => (
                  <Col className={'mt-3'}>
                      <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={item.urlToImage} />
                          <Card.Body>
                              <Card.Title>{item.title.slice(0, 15)}</Card.Title>
                              <Card.Text>
                                  {item.description.slice(0, 120)}
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
              ))}
          </Row>
      </Container>
  );
};

export default App;
