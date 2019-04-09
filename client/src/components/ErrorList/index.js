import React from 'react';

// Reactstrap components.
import { ListGroup, ListGroupItem } from 'reactstrap';

// Font Awesome Icons.
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ErrorList(props) {
  const { errors, handleClick } = props;

  return (
    <ListGroup
      flush
      className="text-justify mx-3 mx-md-1"
    >
      {errors.map((error) => (
        <ListGroupItem
          action
          key={error.id}
          tag="button"
          color={error.isDone ? 'success' : 'warning'}
          data-category="errors"
          data-name={error.text}
          onClick={handleClick}
          className="py-0 px-2 text-capitalize error-button"
        >
          <FontAwesomeIcon
            size="lg"
            icon={error.isDone ? faCheckSquare : faSquare}
            className="mr-2"
          />
          {error.text}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
