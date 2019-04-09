import React from 'react';

// Reactstrap components.
import { Container, Button, Badge } from 'reactstrap';

export default function BehaviorList(props) {
  const { behaviors, color, subcategory, handleClick, handleRightClick } = props;

  return (
    <Container className="d-flex flex-wrap justify-content-center p-0">
      {behaviors.map((behavior) => (
        <Button
          key={behavior.id}
          outline
          size="sm"
          color={color}
          data-category="behaviors"
          data-sub-category={subcategory}
          data-name={behavior.text}
          onClick={handleClick}
          onContextMenu={handleRightClick}
          className="position-relative w-25 m-1 text-capitalize text-wrap text-truncate rounded-lg shadow behavior-button"
        >
          {behavior.text}
          <Badge
            color="transparent"
            style={{right: 1}}
            className="position-absolute p-0 font-large text-muted"
          >
            {behavior.count}
          </Badge>
        </Button>
      ))}
    </Container>
  );
}
