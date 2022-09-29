import { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import DictEng from './components/DictEng';
import DictHistory from './components/DictHistory';
import axios from 'axios';

function Dictionary() {
  const [keyword, setKeyword] = useState('')
  const [definitions, setDefinitions] = useState([])
  const [history, setHistory] = useState([])

  function getWords() {
    const options = {
      method: 'GET',
      url: `https://wordsapiv1.p.rapidapi.com/words/${keyword}`,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_WORDS_API,
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    };

    axios.request(options)
    .then((res)=> {
      setDefinitions(res.data.results);
      setHistory(history.concat(
        {
          title: keyword,
          definitions: res.data.results,
        }
      ))
      console.log(history)
    })
    .catch(function (error) {
      console.error(error);
    });
  }

  function capitalize(str) {
    if (typeof str !== 'string' || !str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <Row>
      <Col sm={6} className="shadow-5">
        <DictEng
          keyword={keyword}
          definitions={definitions}
          setKeyword={setKeyword}
          setHistory={setHistory}
          getWords={getWords}
          capitalize={capitalize}
        />
      </Col>
      <Col sm={6}>
        {history.length > 0 ? <DictHistory
          history={history}
        /> : ''
        }
      </Col>
    </Row>
  )
}

export default Dictionary;