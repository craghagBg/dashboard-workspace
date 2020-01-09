import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

const Select = ({ chartsData }) => {
  const changeHandler = () => {};
  const pairNames = chartsData.map(chart => chart.title);

  return (
    <Form.Row>
      <Form.Group as={Col}>
        <Form.Label>Ceate Alert On:</Form.Label>
        <Form.Control as="select" onChange={changeHandler}>
          {pairNames.map((pair, key) => {
            return (
              <option key={key} value={pair}>
                {pair}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Value</Form.Label>
        <Form.Control />
      </Form.Group>
    </Form.Row>
  );
};

Select.propTypes = {
  chartsData: PropTypes.array.isRequired
};

export default Select;
