import { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { FaTemperatureLow } from "react-icons/fa";
import { SiWindicss } from "react-icons/si";
import { WiHumidity } from "react-icons/wi";
import { BsClouds } from "react-icons/bs";

class RomaPrev extends Component {
  state = {
    weather: {},
    isLoading: true,
    hasError: false,
    errorMessage: ""
  };

  fetchPasiano = async () => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=41.8919300&lon=12.5113300&appid=6544dfed3a1c8285be517043f87cd08c&units=metric"
      );

      if (response.ok) {
        const data = await response.json();

        this.setState({
          weather: data,
          isLoading: false
        });
        console.log(this.state.weather);
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: `Error loading content. ERROR: ${response.status}`
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
        errorMessage: `FATAL ERROR: ${error.message}`
      });
    }
  };

  componentDidMount = () => {
    this.fetchPasiano();
  };

  render() {
    const { weather, isLoading, hasError, errorMessage } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (hasError) {
      return <div>{errorMessage}</div>;
    }

    return (
      <div
        className="bg-secondary bg-opacity-25 rounded border border-dark-subtle my-4 mx-auto"
        style={{ width: "50%" }}
      >
        <Row className="d-flex align-items-center">
          <Col xs={12} md={6} className="d-flex align-items-center flex-column">
            <h2>
              {weather.name} ({weather.sys.country})
            </h2>
            <p>
              <FaTemperatureLow className="text-danger" /> {weather.main.temp}°C
            </p>
            <p>
              <BsClouds /> {weather.weather[0].description}
            </p>
            <p>
              <WiHumidity className="text-primary fs-3" /> {weather.main.humidity}%
            </p>
            <p>
              <SiWindicss className="text-primary" /> {weather.wind.speed} km/h
            </p>
          </Col>
          <Col xs={12} md={6} className="text-end p-0">
            <Image
              src="https://www.turismo.it/typo3temp/pics/cd66c58b1d.jpg"
              style={{ width: "320px", aspectRatio: "1/0.8" }}
              className="rounded"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default RomaPrev;