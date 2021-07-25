import React, { memo } from 'react';
import {
  Card, CardBody, CardTitle, CardText, CardGroup,CardSubtitle,
} from 'reactstrap'

function WeatherForecastRecords({ forecast, apiIconPath, days, months }) {

  let resultantRecords = forecast && forecast.map((item,k) => {
    return {
      dateTimstamp: item.dt,
      temperature: item.main.temp,
      highestTemp: item.main.temp_max,
      lowestTemp: item.main.temp_min,
      pressure: item.main.pressure,
      humidity: item.main.humidity,
      main: item.weather[0].main,
      icon: apiIconPath + item.weather[0].icon + '.png',
      clouds: item.clouds.all,
      wind: item.wind.speed,
      month: parseInt(item.dt_txt.slice(5, 7)),
      date: parseInt(item.dt_txt.slice(8, 10)),
      hour: item.dt_txt.slice(11, 13) * 1
    }
  })

  let finalForeCastRecords = [];
  resultantRecords.map((item,i) => {
    if (i==0 || (i>0 && ((item.date != resultantRecords[i-1].date) || (item.month != resultantRecords[i-1].month)))) {
      finalForeCastRecords.push(item);
    }
  })

  return (
    <>
      <CardGroup className="mt-4">
        {
          finalForeCastRecords.map((item) => (
            <Card key={item.dateTimstamp}>
              <CardBody>
                <CardTitle tag="h5">{months[(item.month-1)]} {item.date} </CardTitle>
                <CardSubtitle><small><img top width="50px" src={item.icon} alt="Card image cap" /> {item.main} <span className="text-muted">({item.temperature}°)</span></small></CardSubtitle>
                <hr/>
                <CardText className="mb-2">High: <span className="text-muted">{item.highestTemp}°</span></CardText>
                <CardText className="mb-2">Low: <span className="text-muted">{item.lowestTemp}°</span></CardText>
                <CardText className="mb-2">Pressure: <span className="text-muted">{item.pressure}</span></CardText>
                <CardText className="mb-2">Humidity: <span className="text-muted">{item.humidity}</span></CardText>
                <CardText className="mb-2">Wind Speed: <span className="text-muted">{item.temperature} mph</span></CardText>
              </CardBody>
            </Card>
          ))
        }
      </CardGroup>
    </>
  );
}

export default memo(WeatherForecastRecords);
