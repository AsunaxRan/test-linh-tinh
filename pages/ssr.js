import {
  Col,
  Container,
  Figure,
  Nav,
  Navbar,
  NavDropdown,
  Pagination,
  Row,
} from "react-bootstrap";

export default function Ssr(props) {
  const { products } = props;
  console.log(products);

  return (
    <div className="wrapper">
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <Container>
          <Row>
            {products.map((product) => (
              <Col lg="2" key={product.id}>
                <Figure>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt={product.title}
                    src={product.images[product.images.length - 1]}
                  />
                  <Figure.Caption>
                    <a href={`/product/${product.id}`}>{product.title}</a>
                  </Figure.Caption>
                </Figure>
              </Col>
            ))}
          </Row>
          <Row>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Row>
        </Container>
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://dummyjson.com/products`);
  const { products } = await res.json();

  return { props: { products } };
}
