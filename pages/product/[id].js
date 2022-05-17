import {
  Col,
  Container,
  Figure,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";

function Product({ data }) {
  // Render data...
  console.log(data);

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
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt={data.title}
              src={data.images[data.images.length - 1]}
            />
            <Figure.Caption>
              <a href={`/data/${data.id}`}>{data.title}</a>
            </Figure.Caption>
          </Figure>
        </Container>
      </main>

      <footer>Footer</footer>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps({ params }) {
  // Fetch data from external API
  console.log(params);
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Product;
