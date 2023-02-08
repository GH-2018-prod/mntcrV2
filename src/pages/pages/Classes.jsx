import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Classes = () => {
    return (
        <>
            <header> <Header /></header>
            <main>
                <Container>
                    <Row className='text-center m-5'>
                        <Col>
                            <h1>
                                Escoja sus clases dependiendo de su necesidad
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>
                                Clases nivel 1
                            </h2>
                            <p>
                                ioasifioiasio oisaioj ioi oioasio doi iooisaidof oiiasoidfo in ooioi oosnadofnsai
                                joifsoiadfjioasiod
                                samnofdoais ioasifioiasio
                                asfdin aoisdiofsa
                                miasoidfioasmio
                                oaspfodpasopos
                            </p>
                            <Figure>
                                <Figure.Image
                                    width={'100%'}
                                    height={'auto'}
                                    alt="171x180"
                                    src="./img/header1-1200x600.png"
                                />
                                <Figure.Caption>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </Figure.Caption>
                            </Figure>

                        </Col>
                        <Col>
                            <h2>
                                Clases nivel 2
                            </h2>
                            <p>
                                ioasifioiasio oisaioj ioi oioasio doi iooisaidof oiiasoidfo in ooioi oosnadofnsai
                                joifsoiadfjioasiod
                                samnofdoais ioasifioiasio
                                asfdin aoisdiofsa
                                miasoidfioasmio
                                oaspfodpasopos
                            </p>
                            <Figure>
                                <Figure.Image
                                    width={'100%'}
                                    height={'auto'}
                                    alt="171x180"
                                    src="./img/header1-1200x600.png"
                                />
                                <Figure.Caption>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>
                                YES WATSOEVER
                            </h1>
                            <p>
                                ioasifioiasio oisaioj ioi oioasio doi iooisaidof oiiasoidfo in ooioi oosnadofnsai
                                joifsoiadfjioasiod
                                samnofdoais ioasifioiasio
                                asfdin aoisdiofsa
                                miasoidfioasmio
                                oaspfodpasopos
                            </p>
                            <Figure>
                                <Figure.Image
                                    width={'100%'}
                                    height={'auto'}
                                    alt="171x180"
                                    src="./img/header1-1200x600.png"
                                />
                                <Figure.Caption>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </Figure.Caption>
                            </Figure>

                        </Col>
                        <Col>
                            <h1>
                                OK OK OK GUAATTEVVER
                            </h1>
                            <p>
                                ioasifioiasio oisaioj ioi oioasio doi iooisaidof oiiasoidfo in ooioi oosnadofnsai
                                joifsoiadfjioasiod
                                samnofdoais ioasifioiasio
                                asfdin aoisdiofsa
                                miasoidfioasmio
                                oaspfodpasopos
                            </p>
                            <Figure>
                                <Figure.Image
                                    width={'100%'}
                                    height={'auto'}
                                    alt="171x180"
                                    src="./img/header1-1200x600.png"
                                />
                                <Figure.Caption>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                    <Row className='text-center m-5'>
                        <Col>
                            <Figure.Image
                                width={'100%'}
                                height={'auto'}
                                alt="171x180"
                                src="./img/calendar.png"
                            />

                        </Col>
                    </Row>
                </Container>
            </main>
            <footer><Footer /></footer>
        </>
    )
}
