import { Col, Container, Row } from "react-bootstrap";

export default function RecipeHeader({ defaultName, defaultDescription, setDescription, setName, setImg }) {

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  return (
    <Container className="p-5 pb-3">
      <Row>
        <Col>
          <Row>
            <h4 className="text-center">Recipe Name</h4>
            <input
              type="Text"
              value={defaultName} // Use defaultName directly here
              onChange={handleNameChange}
            />
            <br />
            <h4 className="text-center">Description</h4>
            <textarea
              className="col-12"
              value={defaultDescription} // Use defaultDescription directly here
              onChange={handleDescriptionChange}
            ></textarea>
          </Row>
        </Col>
        <Col>
          <img
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fresources.trifocal.eu.com%2Fwp-content%2Fuploads%2F2018%2F06%2Ftemp-logo-img.png&tbnid=VxYczA8ctxDy1M&vet=12ahUKEwjD5dST0ZmAAxVIFN4AHeleAwEQMygAegUIARDFAQ..i&imgrefurl=https%3A%2F%2Fresources.trifocal.eu.com%2Fhomepage%2Ftemp-logo-img%2F&docid=5q8K5uvpq3Ot0M&w=250&h=254&q=temp%20img&ved=2ahUKEwjD5dST0ZmAAxVIFN4AHeleAwEQMygAegUIARDFAQ"
            alt="Recipe Image, Not yet implemented"
          />
        </Col>
      </Row>
    </Container>
  );
}
