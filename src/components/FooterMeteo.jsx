import { Col, Row, Container } from "react-bootstrap";

const FooterMeteo = () => {
  return (
    <Container fluid>
      <footer className="bg-info rounded p-2">
        <Row>
          <Col xs={12} md={6}>
            <h5>Previsioni meteo per le regioni italiane</h5>
            <Row>
              <Col xs={12} lg={4}>
                <p>Piemonte</p>
                <p>Liguria</p>
                <p>Trentino Alto Adige</p>
                <p>Emilia Romagna</p>
                <p>Friuli Venezia Giulia</p>
                <p>Umbria</p>
                <p>Campania</p>
                <p>Molise</p>
                <p>Basilicata</p>
                <p>Sicilia</p>
              </Col>
              <Col xs={12} lg={6}>
                <p>Valle d'Aosta</p>
                <p>Lombardia</p>
                <p>Veneto</p>
                <p>Marche</p>
                <p>Toscana</p>
                <p>Lazio</p>
                <p>Abruzzo</p>
                <p>Puglia</p>
                <p>Calabria</p>
                <p>Sardegna</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <h5>Previsioni meteo per le città italiane</h5>
            <Row>
              <Col xs={12} lg={4}>
                <p>Torino</p>
                <p>Genova</p>
                <p>Trento</p>
                <p>Trieste</p>
                <p>Ancona</p>
                <p>Perugia</p>
                <p>Napoli</p>
                <p>Campobasso</p>
                <p>Potenza</p>
                <p>Palermo</p>
              </Col>
              <Col xs={12} lg={6}>
                <p>Aosta</p>
                <p>Milano</p>
                <p>Venezia</p>
                <p>Bologna</p>
                <p>Firenze</p>
                <p>Roma</p>
                <p>L'Acquila</p>
                <p>Bari</p>
                <p>Catanzaro</p>
                <p>Cagliari</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default FooterMeteo;
