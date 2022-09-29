import React, { useEffect, useState } from 'react';
import 'react-clock/dist/Clock.css';
import * as moment from 'moment-timezone'
import { Row, Col } from 'react-bootstrap';
import AnalogClock from './components/AnalogClock';

function WorldClock() {
  const [local, setLocal] = useState(moment().format('HH:mm:ss'));
  const [los, setLos] = useState(moment().tz('America/Los_Angeles').format('HH:mm:ss'));
  const [denver, setDenver] = useState(moment().tz('America/Denver').format('HH:mm:ss'));
  const [chicago, setChicago] = useState(moment().tz('America/Chicago').format('HH:mm:ss'));
  const [newYork, setNewYork] = useState(moment().tz('America/New_York').format('HH:mm:ss'));
  const [saoPaulo, setSaoPaulo] = useState(moment().tz('America/Sao_Paulo').format('HH:mm:ss'));
  const [london, setLondon] = useState(moment().tz('Europe/London').format('HH:mm:ss'));
  const [paris, setParis] = useState(moment().tz('Europe/Paris').format('HH:mm:ss'));
  const [bangkok, setBangkok] = useState(moment().tz('Asia/Bangkok').format('HH:mm:ss'));
  const [moscow, setMoscow] = useState(moment().tz('Europe/Moscow').format('HH:mm:ss'));
  const [shanghai, setShanghai] = useState(moment().tz('Asia/Shanghai').format('HH:mm:ss'));
  const [tokyo, setTokyo] = useState(moment().tz('Asia/Tokyo').format('HH:mm:ss'));

  useEffect(() => {
    function switchFaceColor(time, elId) {
      const element = document.getElementById(elId)
      if (element) {
        const face = element.children[1].children[0]
        const hourHand = element.children[1].children[1].children[0]
        const minuteHand = element.children[1].children[2].children[0]
        const secondHand = element.children[1].children[3].children[0]
        const clockMark = element.children[1].children[0]
        if (time > '06:00:00' && time < '18:00:00') {
          face.classList.add('day-clock')
        } else {
          face.classList.add('night-clock');
          hourHand.classList.add('night-clock');
          minuteHand.classList.add('night-clock');
          secondHand.classList.add('night-clock');
          clockMark.children[4].children[0].classList.add('night-clock')
          let i = 0
          let j = 0
          while (i < clockMark.children.length) {
            while (j < clockMark.children[i].children.length) {
              clockMark.children[i].children[j].classList.add('night-clock');
              j++;
            }
            j = 0
            i++;
          }
        }
      }
    }
    const Local = setInterval(() => setLocal(moment().format('HH:mm:ss')), 1000);
    const LosAngeles = setInterval(() => setLos(moment().tz('America/Los_Angeles').format('HH:mm:ss')), 1000);
    const Denver = setInterval(() => setDenver(moment().tz('America/Denver').format('HH:mm:ss')), 1000);
    const Chicago = setInterval(() => setChicago(moment().tz('America/Chicago').format('HH:mm:ss')), 1000);
    const NewYork = setInterval(() => setNewYork(moment().tz('America/New_York').format('HH:mm:ss')), 1000);
    const SaoPaulo = setInterval(() => setSaoPaulo(moment().tz('America/Sao_Paulo').format('HH:mm:ss')), 1000);
    const London = setInterval(() => setLondon(moment().tz('Europe/London').format('HH:mm:ss')), 1000);
    const Paris = setInterval(() => setParis(moment().tz('Europe/Paris').format('HH:mm:ss')), 1000);
    const Moscow = setInterval(() => setMoscow(moment().tz('Europe/Moscow').format('HH:mm:ss')), 1000);
    const Bangkok = setInterval(() => setBangkok(moment().tz('Asia/Bangkok').format('HH:mm:ss')), 1000);
    const Shanghai = setInterval(() => setShanghai(moment().tz('Asia/Shanghai').format('HH:mm:ss')), 1000);
    const Tokyo = setInterval(() => setTokyo(moment().tz('Asia/Tokyo').format('HH:mm:ss')), 1000);

    switchFaceColor(moment().format('HH:mm:ss'), 'local-clock')
    switchFaceColor(moment().tz('America/Los_Angeles').format('HH:mm:ss'), 'los-clock')
    switchFaceColor(moment().tz('America/Denver').format('HH:mm:ss'), 'denver-clock')
    switchFaceColor(moment().tz('America/Chicago').format('HH:mm:ss'), 'chicago-clock')
    switchFaceColor(moment().tz('America/New_York').format('HH:mm:ss'), 'new-york-clock')
    switchFaceColor(moment().tz('America/Sao_Paulo').format('HH:mm:ss'), 'sao-paulo-clock')
    switchFaceColor(moment().tz('Europe/London').format('HH:mm:ss'), 'london-clock')
    switchFaceColor(moment().tz('Europe/Paris').format('HH:mm:ss'), 'paris-clock')
    switchFaceColor(moment().tz('Europe/Moscow').format('HH:mm:ss'), 'moscow-clock')
    switchFaceColor(moment().tz('Asia/Bangkok').format('HH:mm:ss'), 'bangkok-clock')
    switchFaceColor(moment().tz('Asia/Shanghai').format('HH:mm:ss'), 'shanghai-clock')
    switchFaceColor(moment().tz('Asia/Tokyo').format('HH:mm:ss'), 'tokyo-clock')

    return () => {
      clearInterval(Local);
      clearInterval(LosAngeles);
      clearInterval(Denver);
      clearInterval(Chicago);
      clearInterval(NewYork);
      clearInterval(SaoPaulo);
      clearInterval(London);
      clearInterval(Paris);
      clearInterval(Moscow);
      clearInterval(Bangkok);
      clearInterval(Shanghai);
      clearInterval(Tokyo);
    };
  }, []);

  return (
    <Row>
      <Col lg={3} md={4} sm={6}>
        <AnalogClock
          title='Local'
          id='local-clock'
          value={local}
        />
      </Col>
      <Col lg={3} md={4} sm={6}>
        <AnalogClock
          title='Los Angeles'
          id='los-clock'
          value={los}
        />
      </Col>
      <Col lg={3} md={4} sm={6}>
        <AnalogClock
          title='Denver'
          id='denver-clock'
          value={denver}
        />
      </Col>
      <Col lg={3} md={4} sm={6}>
        <AnalogClock
          title='Chicago'
          id='chicago-clock'
          value={chicago}
        />
      </Col>
      <Col lg={3} md={4} sm={6}>
        <AnalogClock
          title='New York'
          id='new-york-clock'
          value={newYork}
        />
      </Col>
      <Col lg={3} md={4} sm={6}>
        <AnalogClock
          title='Sao Paulo'
          id='sao-paulo-clock'
          value={saoPaulo}
        />
      </Col>
      <Col lg={3} md={4} sm={6}>
        <AnalogClock
          title='London'
          id='london-clock'
          value={london}
        />
      </Col>
      <Col lg={3} md={4} sm={6}>
        <AnalogClock
          title='Paris'
          id='paris-clock'
          value={paris}
        />
      </Col>
      <Col lg={3} md={4} sm={6}>
        <AnalogClock
          title='Moscow'
          id='moscow-clock'
          value={moscow}
        />
      </Col>
      <Col lg={3} md={4} sm={6}>
        <AnalogClock
          title='Bangkok'
          id='bangkok-clock'
          value={bangkok}
        />
      </Col>
      <Col lg={3} md={4} sm={6}>
        <AnalogClock
          title='Shanghai'
          id='shanghai-clock'
          value={shanghai}
        />
      </Col>
      <Col lg={3} md={4} sm={6}>
        <AnalogClock
          title='Tokyo'
          id='tokyo-clock'
          value={tokyo}
        />
      </Col>
    </Row>
  );
}

export default WorldClock;

// Wed Sep 28 2022 17:05:04 GMT-0400 (Eastern Daylight Time)