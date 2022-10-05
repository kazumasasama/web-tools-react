import { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import DictEng from './components/DictEng';
import DictHistory from './components/DictHistory';
import axios from 'axios';

function Dictionary() {
  const [keyword, setKeyword] = useState('')
  const [definitions, setDefinitions] = useState([])
  const [history, setHistory] = useState([])
  const [synonyms, setSynonyms] = useState([])
  const [pronunciation, setPronunciation] = useState()

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
      const results = res.data.results;
      setDefinitions(results);
      setHistory(history.concat(
        {
          title: keyword,
          definitions: results,
        }
      ))
      setSynonyms(results[0].synonyms)
      setPronunciation(res.data.pronunciation.all)
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
          synonyms={synonyms}
          pronunciation={pronunciation}
        />
      </Col>
      <Col sm={6}>
        <DictHistory
          history={history}
          capitalize={capitalize}
        />
        {/* {history.length > 0 ? <DictHistory history={history} capitalize={capitalize}/> : ''} */}
      </Col>
    </Row>
  )
}

export default Dictionary;