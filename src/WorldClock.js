import React, { useEffect, useState } from 'react';
import 'react-clock/dist/Clock.css';
import * as moment from 'moment-timezone'
import { Row, Col } from 'react-bootstrap';
import AnalogClock from './components/AnalogClock';
import SunCalc from 'suncalc'

function WorldClock() {

  const getCurrentLocation = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    };

  const LocalTimes = SunCalc.getTimes(moment(), 51.5, -0.1)
  const LosTimes = SunCalc.getTimes(moment(), 34.05, -118.24)
  const DenverTimes = SunCalc.getTimes(moment(), 39.74, -104.99)
  const ChicagoTimes = SunCalc.getTimes(moment(), 41.88, -87.62)
  const NewYorkTimes = SunCalc.getTimes(moment(), 40.71, -74.00)
  const SaoPauloTimes = SunCalc.getTimes(moment(), -23.53, -46.62)
  const LondonTimes = SunCalc.getTimes(moment(), 51.5, -0.1)
  const ParisTimes = SunCalc.getTimes(moment(), 48.85, 2.35)
  const MoscowTimes = SunCalc.getTimes(moment(), 55.75, 37.61)
  const ShanghaiTimes = SunCalc.getTimes(moment(), 31.22, 121.46)
  const BangkokTimes = SunCalc.getTimes(moment(), 13.73, 100.52)
  const TokyoTimes = SunCalc.getTimes(moment(), 35.65, 139.83)

  const [local, setLocal] = useState(
    {
      dateTime: moment().format(),
      time: moment().format('HH:mm:ss'),
      sunrise: moment(LocalTimes.sunrise).format(),
      sunriseSTR: moment(LocalTimes.sunrise).format('HH:mm'),
      sunriseEnd: moment(LocalTimes.sunriseEnd).format(),
      sunsetStart: moment(LocalTimes.sunsetStart).format(),
      sunset: moment(LocalTimes.sunset).format(),
      sunsetSTR: moment(LocalTimes.sunset).format('HH:mm')
    }
  );

  const [los, setLos] = useState(
    {
      dateTime: moment().tz('America/Los_Angeles').format(),
      time: moment().tz('America/Los_Angeles').format('HH:mm:ss'),
      sunrise: moment(LosTimes.sunrise).tz('America/Los_Angeles').format(),
      sunriseSTR: moment(LosTimes.sunrise).tz('America/Los_Angeles').format('HH:mm'),
      sunriseEnd: moment(LosTimes.sunriseEnd).tz('America/Los_Angeles').format(),
      sunsetStart: moment(LosTimes.sunsetStart).tz('America/Los_Angeles').format(),
      sunset: moment(LosTimes.sunset).tz('America/Los_Angeles').format(),
      sunsetSTR: moment(LosTimes.sunset).tz('America/Los_Angeles').format('HH:mm')
    }
  );

  
  const [denver, setDenver] = useState(
    {
      dateTime: moment().tz('America/Denver').format(),
      time: moment().tz('America/Denver').format('HH:mm:ss'),
      sunrise: moment(DenverTimes.sunrise).tz('America/Denver').format(),
      sunriseSTR: moment(DenverTimes.sunrise).tz('America/Denver').format('HH:mm'),
      sunriseEnd: moment(DenverTimes.sunriseEnd).tz('America/Denver').format(),
      sunsetStart: moment(DenverTimes.sunsetStart).tz('America/Denver').format(),
      sunset: moment(DenverTimes.sunset).tz('America/Denver').format(),
      sunsetSTR: moment(DenverTimes.sunset).tz('America/Denver').format('HH:mm')
    }
  );
  const [chicago, setChicago] = useState(
    {
      dateTime: moment().tz('America/Chicago').format(),
      time: moment().tz('America/Chicago').format('HH:mm:ss'),
      sunrise: moment(ChicagoTimes.sunrise).tz('America/Chicago').format(),
      sunriseSTR: moment(ChicagoTimes.sunrise).tz('America/Chicago').format('HH:mm'),
      sunriseEnd: moment(ChicagoTimes.sunriseEnd).tz('America/Chicago').format(),
      sunsetStart: moment(ChicagoTimes.sunsetStart).tz('America/Chicago').format(),
      sunset: moment(ChicagoTimes.sunset).tz('America/Chicago').format(),
      sunsetSTR: moment(ChicagoTimes.sunset).tz('America/Chicago').format('HH:mm')
    }
  );
  const [newYork, setNewYork] = useState(
    {
      dateTime: moment().tz('America/New_York').format(),
      time: moment().tz('America/New_York').format('HH:mm:ss'),
      sunrise: moment(NewYorkTimes.sunrise).tz('America/New_York').format(),
      sunriseSTR: moment(NewYorkTimes.sunrise).tz('America/New_York').format('HH:mm'),
      sunriseEnd: moment(NewYorkTimes.sunriseEnd).tz('America/New_York').format(),
      sunsetStart: moment(NewYorkTimes.sunsetStart).tz('America/New_York').format(),
      sunset: moment(NewYorkTimes.sunset).tz('America/New_York').format(),
      sunsetSTR: moment(NewYorkTimes.sunset).tz('America/New_York').format('HH:mm')
    }
  );
  const [saoPaulo, setSaoPaulo] = useState(
    {
      dateTime: moment().tz('America/Sao_Paulo').format(),
      time: moment().tz('America/Sao_Paulo').format('HH:mm:ss'),
      sunrise: moment(SaoPauloTimes.sunrise).tz('America/Sao_Paulo').format(),
      sunriseSTR: moment(SaoPauloTimes.sunrise).tz('America/Sao_Paulo').format('HH:mm'),
      sunriseEnd: moment(SaoPauloTimes.sunriseEnd).tz('America/Sao_Paulo').format(),
      sunsetStart: moment(SaoPauloTimes.sunsetStart).tz('America/Sao_Paulo').format(),
      sunset: moment(SaoPauloTimes.sunset).tz('America/Sao_Paulo').format(),
      sunsetSTR: moment(SaoPauloTimes.sunset).tz('America/Sao_Paulo').format('HH:mm')
    }
  );
  const [london, setLondon] = useState(
    {
      dateTime: moment().tz('Europe/London').format(),
      time: moment().tz('Europe/London').format('HH:mm:ss'),
      sunrise: moment(LondonTimes.sunrise).tz('Europe/London').format(),
      sunriseSTR: moment(LondonTimes.sunrise).tz('Europe/London').format('HH:mm'),
      sunriseEnd: moment(LondonTimes.sunriseEnd).tz('Europe/London').format(),
      sunsetStart: moment(LondonTimes.sunsetStart).tz('Europe/London').format(),
      sunset: moment(LondonTimes.sunset).tz('Europe/London').format(),
      sunsetSTR: moment(LondonTimes.sunset).tz('Europe/London').format('HH:mm')
    }
  );
  const [paris, setParis] = useState(
    {
      dateTime: moment().tz('Europe/Paris').format(),
      time: moment().tz('Europe/Paris').format('HH:mm:ss'),
      sunrise: moment(ParisTimes.sunrise).tz('Europe/Paris').format(),
      sunriseSTR: moment(ParisTimes.sunrise).tz('Europe/Paris').format('HH:mm'),
      sunriseEnd: moment(ParisTimes.sunriseEnd).tz('Europe/Paris').format(),
      sunsetStart: moment(ParisTimes.sunsetStart).tz('Europe/Paris').format(),
      sunset: moment(ParisTimes.sunset).tz('Europe/Paris').format(),
      sunsetSTR: moment(ParisTimes.sunset).tz('Europe/Paris').format('HH:mm')
    }
  );

  const [moscow, setMoscow] = useState(
    {
      dateTime: moment().tz('Europe/Moscow').format(),
      time: moment().tz('Europe/Moscow').format('HH:mm:ss'),
      sunrise: moment(MoscowTimes.sunrise).tz('Europe/Moscow').format(),
      sunriseSTR: moment(MoscowTimes.sunrise).tz('Europe/Moscow').format('HH:mm'),
      sunriseEnd: moment(MoscowTimes.sunriseEnd).tz('Europe/Moscow').format(),
      sunsetStart: moment(MoscowTimes.sunsetStart).tz('Europe/Moscow').format(),
      sunset: moment(MoscowTimes.sunset).tz('Europe/Moscow').format(),
      sunsetSTR: moment(MoscowTimes.sunset).tz('Europe/Moscow').format('HH:mm')
    }
   );
  const [bangkok, setBangkok] = useState(
    {
      dateTime: moment().tz('Asia/Bangkok').format(),
      time: moment().tz('Asia/Bangkok').format('HH:mm:ss'),
      sunrise: moment(BangkokTimes.sunrise).tz('Asia/Bangkok').format(),
      sunriseSTR: moment(BangkokTimes.sunrise).tz('Asia/Bangkok').format('HH:mm'),
      sunriseEnd: moment(BangkokTimes.sunriseEnd).tz('Asia/Bangkok').format(),
      sunsetStart: moment(BangkokTimes.sunsetStart).tz('Asia/Bangkok').format(),
      sunset: moment(BangkokTimes.sunset).tz('Asia/Bangkok').format(),
      sunsetSTR: moment(BangkokTimes.sunset).tz('Asia/Bangkok').format('HH:mm')
    }
  );
  const [shanghai, setShanghai] = useState(
    {
      dateTime: moment().tz('Asia/Shanghai').format(),
      time: moment().tz('Asia/Shanghai').format('HH:mm:ss'),
      sunrise: moment(ShanghaiTimes.sunrise).tz('Asia/Shanghai').format(),
      sunriseSTR: moment(ShanghaiTimes.sunrise).tz('Asia/Shanghai').format('HH:mm'),
      sunriseEnd: moment(ShanghaiTimes.sunriseEnd).tz('Asia/Shanghai').format(),
      sunsetStart: moment(ShanghaiTimes.sunsetStart).tz('Asia/Shanghai').format(),
      sunset: moment(ShanghaiTimes.sunset).tz('Asia/Shanghai').format(),
      sunsetSTR: moment(ShanghaiTimes.sunset).tz('Asia/Shanghai').format('HH:mm')
    }
  );
  const [tokyo, setTokyo] = useState(
    {
      dateTime: moment().tz('Asia/Tokyo').format(),
      time: moment().tz('Asia/Tokyo').format('HH:mm:ss'),
      sunrise: moment(TokyoTimes.sunrise).tz('Asia/Tokyo').format(),
      sunriseSTR: moment(TokyoTimes.sunrise).tz('Asia/Tokyo').format('HH:mm'),
      sunriseEnd: moment(TokyoTimes.sunriseEnd).tz('Asia/Tokyo').format(),
      sunsetStart: moment(TokyoTimes.sunsetStart).tz('Asia/Tokyo').format(),
      sunset: moment(TokyoTimes.sunset).tz('Asia/Tokyo').format(),
      sunsetSTR: moment(TokyoTimes.sunset).tz('Asia/Tokyo').format('HH:mm')
    }
  );

  useEffect(() => {
    let LocalTimes

    if (!alert('We would like to use your device location.')) {
      getCurrentLocation()
      .then((res)=> {
        LocalTimes = SunCalc.getTimes(moment(), res.coords.latitude, res.coords.longitude)
      })
      .catch(err => {
        alert(err);
      })
    }
    const LosTimes = SunCalc.getTimes(moment(), 34.05, -118.24)
    const DenverTimes = SunCalc.getTimes(moment(), 39.74, -104.99)
    const ChicagoTimes = SunCalc.getTimes(moment(), 41.88, -87.62)
    const NewYorkTimes = SunCalc.getTimes(moment(), 40.71, -74.00)
    const SaoPauloTimes = SunCalc.getTimes(moment(), -23.53, -46.62)
    const LondonTimes = SunCalc.getTimes(moment(), 51.5, -0.1)
    const ParisTimes = SunCalc.getTimes(moment(), 48.85, 2.35)
    const MoscowTimes = SunCalc.getTimes(moment(), 55.75, 37.61)
    const ShanghaiTimes = SunCalc.getTimes(moment(), 31.22, 121.46)
    const BangkokTimes = SunCalc.getTimes(moment(), 13.73, 100.52)
    const TokyoTimes = SunCalc.getTimes(moment(), 35.65, 139.83)

    function switchFaceColor(elId, city) {
      const element = document.getElementById(elId)
      if (element) {
        const face = element.children[1].children[0]
        const hourHand = element.children[1].children[1].children[0]
        const minuteHand = element.children[1].children[2].children[0]
        const secondHand = element.children[1].children[3].children[0]
        const clockMark = element.children[1].children[0]
        if (city.dateTime > city.sunrise && city.dateTime < city.sunset) {
          if (city.dateTime < city.sunriseEnd) {
            face.classList.add('sunrise-clock')
          } else {
            face.classList.add('day-clock')
          }
        } else {
          if (city.dateTime > city.sunsetStart && city.dateTime < city.sunset) {
            face.classList.add('sunset-clock')
          } else {
            face.classList.add('night-clock')
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
    }

    const Local = setInterval(() => setLocal(
      {
        dateTime: moment().format(),
        time: moment().format('HH:mm:ss'),
        sunrise: moment(LocalTimes.sunrise).format(),
        sunriseSTR: moment(LocalTimes.sunrise).format('HH:mm'),
        sunriseEnd: moment(LocalTimes.sunriseEnd).format(),
        sunsetStart: moment(LocalTimes.sunsetStart).format(),
        sunset: moment(LocalTimes.sunset).format(),
        sunsetSTR: moment(LocalTimes.sunset).format('HH:mm')
      },
      switchFaceColor('local-clock', local)
    ), 1000);

    const LosAngeles = setInterval(() => setLos(
      {
        dateTime: moment().tz('America/Los_Angeles').format(),
        time: moment().tz('America/Los_Angeles').format('HH:mm:ss'),
        sunrise: moment(LosTimes.sunrise).tz('America/Los_Angeles').format(),
        sunriseSTR: moment(LosTimes.sunrise).tz('America/Los_Angeles').format('HH:mm'),
        sunriseEnd: moment(LosTimes.sunriseEnd).tz('America/Los_Angeles').format(),
        sunsetStart: moment(LosTimes.sunsetStart).tz('America/Los_Angeles').format(),
        sunset: moment(LosTimes.sunset).tz('America/Los_Angeles').format(),
        sunsetSTR: moment(LosTimes.sunset).tz('America/Los_Angeles').format('HH:mm')
      },
      switchFaceColor('los-clock', los)
    ), 1000);
    const Denver = setInterval(() => setDenver(
      {
        dateTime: moment().tz('America/Denver').format(),
        time: moment().tz('America/Denver').format('HH:mm:ss'),
        sunrise: moment(DenverTimes.sunrise).tz('America/Denver').format(),
        sunriseSTR: moment(DenverTimes.sunrise).tz('America/Denver').format('HH:mm'),
        sunriseEnd: moment(DenverTimes.sunriseEnd).tz('America/Denver').format(),
        sunsetStart: moment(DenverTimes.sunsetStart).tz('America/Denver').format(),
        sunset: moment(DenverTimes.sunset).tz('America/Denver').format(),
        sunsetSTR: moment(DenverTimes.sunset).tz('America/Denver').format('HH:mm')
      },
      switchFaceColor('denver-clock', denver)
    ), 1000);
    const Chicago = setInterval(() => setChicago(
      {
        dateTime: moment().tz('America/Chicago').format(),
        time: moment().tz('America/Chicago').format('HH:mm:ss'),
        sunrise: moment(ChicagoTimes.sunrise).tz('America/Chicago').format(),
        sunriseSTR: moment(ChicagoTimes.sunrise).tz('America/Chicago').format('HH:mm'),
        sunriseEnd: moment(ChicagoTimes.sunriseEnd).tz('America/Chicago').format(),
        sunsetStart: moment(ChicagoTimes.sunsetStart).tz('America/Chicago').format(),
        sunset: moment(ChicagoTimes.sunset).tz('America/Chicago').format(),
        sunsetSTR: moment(ChicagoTimes.sunset).tz('America/Chicago').format('HH:mm')
      },
      switchFaceColor('chicago-clock', chicago)
    ), 1000);
    const NewYork = setInterval(() => setNewYork(
      {
        dateTime: moment().tz('America/New_York').format(),
        time: moment().tz('America/New_York').format('HH:mm:ss'),
        sunrise: moment(NewYorkTimes.sunrise).tz('America/New_York').format(),
        sunriseSTR: moment(NewYorkTimes.sunrise).tz('America/New_York').format('HH:mm'),
        sunriseEnd: moment(NewYorkTimes.sunriseEnd).tz('America/New_York').format(),
        sunsetStart: moment(NewYorkTimes.sunsetStart).tz('America/New_York').format(),
        sunset: moment(NewYorkTimes.sunset).tz('America/New_York').format(),
        sunsetSTR: moment(NewYorkTimes.sunset).tz('America/New_York').format('HH:mm')
      },
      switchFaceColor('new-york-clock', newYork)
    ), 1000);
    const SaoPaulo = setInterval(() => setSaoPaulo(
      {
        dateTime: moment().tz('America/Sao_Paulo').format(),
        time: moment().tz('America/Sao_Paulo').format('HH:mm:ss'),
        sunrise: moment(SaoPauloTimes.sunrise).tz('America/Sao_Paulo').format(),
        sunriseSTR: moment(SaoPauloTimes.sunrise).tz('America/Sao_Paulo').format('HH:mm'),
        sunriseEnd: moment(SaoPauloTimes.sunriseEnd).tz('America/Sao_Paulo').format(),
        sunsetStart: moment(SaoPauloTimes.sunsetStart).tz('America/Sao_Paulo').format(),
        sunset: moment(SaoPauloTimes.sunset).tz('America/Sao_Paulo').format(),
        sunsetSTR: moment(SaoPauloTimes.sunset).tz('America/Sao_Paulo').format('HH:mm')
      },
      switchFaceColor('sao-paulo-clock', saoPaulo)
    ), 1000);
    const London = setInterval(() => setLondon(
      {
        dateTime: moment().tz('Europe/London').format(),
        time: moment().tz('Europe/London').format('HH:mm:ss'),
        sunrise: moment(LondonTimes.sunrise).tz('Europe/London').format(),
        sunriseSTR: moment(LondonTimes.sunrise).tz('Europe/London').format('HH:mm'),
        sunriseEnd: moment(LondonTimes.sunriseEnd).tz('Europe/London').format(),
        sunsetStart: moment(LondonTimes.sunsetStart).tz('Europe/London').format(),
        sunset: moment(LondonTimes.sunset).tz('Europe/London').format(),
        sunsetSTR: moment(LondonTimes.sunset).tz('Europe/London').format('HH:mm')
      },
      switchFaceColor('london-clock', london)
      ), 1000);

    const Paris = setInterval(() => setParis(
      {
        dateTime: moment().tz('Europe/Paris').format(),
        time: moment().tz('Europe/Paris').format('HH:mm:ss'),
        sunrise: moment(ParisTimes.sunrise).tz('Europe/Paris').format(),
        sunriseSTR: moment(ParisTimes.sunrise).tz('Europe/Paris').format('HH:mm'),
        sunriseEnd: moment(ParisTimes.sunriseEnd).tz('Europe/Paris').format(),
        sunsetStart: moment(ParisTimes.sunsetStart).tz('Europe/Paris').format(),
        sunset: moment(ParisTimes.sunset).tz('Europe/Paris').format(),
        sunsetSTR: moment(ParisTimes.sunset).tz('Europe/Paris').format('HH:mm')
      },
      switchFaceColor('paris-clock', paris)
    ), 1000);

    const Moscow = setInterval(() => setMoscow(
      {
        dateTime: moment().tz('Europe/Moscow').format(),
        time: moment().tz('Europe/Moscow').format('HH:mm:ss'),
        sunrise: moment(MoscowTimes.sunrise).tz('Europe/Moscow').format(),
        sunriseSTR: moment(MoscowTimes.sunrise).tz('Europe/Moscow').format('HH:mm'),
        sunriseEnd: moment(MoscowTimes.sunriseEnd).tz('Europe/Moscow').format(),
        sunsetStart: moment(MoscowTimes.sunsetStart).tz('Europe/Moscow').format(),
        sunset: moment(MoscowTimes.sunset).tz('Europe/Moscow').format(),
        sunsetSTR: moment(MoscowTimes.sunset).tz('Europe/Moscow').format('HH:mm')
      },
      switchFaceColor('moscow-clock', moscow)
    ), 1000);
    const Bangkok = setInterval(() => setBangkok(
      {
        dateTime: moment().tz('Asia/Bangkok').format(),
        time: moment().tz('Asia/Bangkok').format('HH:mm:ss'),
        sunrise: moment(BangkokTimes.sunrise).tz('Asia/Bangkok').format(),
        sunriseSTR: moment(BangkokTimes.sunrise).tz('Asia/Bangkok').format('HH:mm'),
        sunriseEnd: moment(BangkokTimes.sunriseEnd).tz('Asia/Bangkok').format(),
        sunsetStart: moment(BangkokTimes.sunsetStart).tz('Asia/Bangkok').format(),
        sunset: moment(BangkokTimes.sunset).tz('Asia/Bangkok').format(),
        sunsetSTR: moment(BangkokTimes.sunset).tz('Asia/Bangkok').format('HH:mm')
      },
      switchFaceColor('bangkok-clock', bangkok)
    ), 1000);
    const Shanghai = setInterval(() => setShanghai(
      {
        dateTime: moment().tz('Asia/Shanghai').format(),
        time: moment().tz('Asia/Shanghai').format('HH:mm:ss'),
        sunrise: moment(ShanghaiTimes.sunrise).tz('Asia/Shanghai').format(),
        sunriseSTR: moment(ShanghaiTimes.sunrise).tz('Asia/Shanghai').format('HH:mm'),
        sunriseEnd: moment(ShanghaiTimes.sunriseEnd).tz('Asia/Shanghai').format(),
        sunsetStart: moment(ShanghaiTimes.sunsetStart).tz('Asia/Shanghai').format(),
        sunset: moment(ShanghaiTimes.sunset).tz('Asia/Shanghai').format(),
        sunsetSTR: moment(ShanghaiTimes.sunset).tz('Asia/Shanghai').format('HH:mm')
      },
      switchFaceColor('shanghai-clock', shanghai)
    ), 1000);
    const Tokyo = setInterval(() => setTokyo(
      {
        dateTime: moment().tz('Asia/Tokyo').format(),
        time: moment().tz('Asia/Tokyo').format('HH:mm:ss'),
        sunrise: moment(TokyoTimes.sunrise).tz('Asia/Tokyo').format(),
        sunriseSTR: moment(TokyoTimes.sunrise).tz('Asia/Tokyo').format('HH:mm'),
        sunriseEnd: moment(TokyoTimes.sunriseEnd).tz('Asia/Tokyo').format(),
        sunsetStart: moment(TokyoTimes.sunsetStart).tz('Asia/Tokyo').format(),
        sunset: moment(TokyoTimes.sunset).tz('Asia/Tokyo').format(),
        sunsetSTR: moment(TokyoTimes.sunset).tz('Asia/Tokyo').format('HH:mm')
      },
      switchFaceColor('tokyo-clock', tokyo)
    ), 1000);

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
