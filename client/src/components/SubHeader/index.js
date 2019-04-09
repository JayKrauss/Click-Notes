import React from 'react';

// Reactstrap components.
import { Container, Button, ButtonGroup } from 'reactstrap';

// Font Awesome Icons.
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Custom components.
import { CandidateInfo } from './sub-components';

export default function SubHeader(props) {
  const { traits, handleTraitClick } = props;
  const desiredTraitsButtons = traits.map((trait) => (
    <Button
      key={trait.id}
      outline={!trait.isDone}
      size="sm"
      color={trait.isDone === true ? 'success' : 'light'}
      data-category="traits"
      data-name={trait.text}
      onClick={handleTraitClick}
      className="position-relative w-25 px-3 rounded-0 text-truncate text-capitalize trait-button"
    >
      {trait.isDone && (
        <FontAwesomeIcon
          icon={trait.isDone === true ? faCheck : faTimes}
          fixedWidth
          size="lg"
          style={{ left: 0, top: 0 }}
          className="position-absolute no-pointer-events"
        />
      )}
      <span className="d-inline-block no-pointer-events">
        {trait.text}
      </span>
    </Button>
  ));

  // TODO: Replace "undefined in CandidateInfo props to actual candidate info."
  return (
    <Container fluid className="d-flex flex-column">
      <CandidateInfo candidate={undefined} />

      <div className="d-flex justify-content-center flex-wrap flex-md-nowrap py-4">
        <div className="d-flex flex-wrap flex-grow-1 shadow">
          {desiredTraitsButtons}
        </div>
        <div className="d-flex flex-fill justify-content-around w-25 px-5 px-md-3 pt-3 py-md-0">
          <Button
            disabled
            color="dark"
            className="mr-1 rounded-circle text-capitalize shadow-lg round-button"
          >
            round 1
          </Button>
          <Button
            disabled
            color="dark"
            className="ml-1 rounded-circle text-capitalize-lg shadow round-button"
          >
            round 2
          </Button>
        </div>
        <ButtonGroup
          vertical
          className="flex-fill w-25 px-0 pl-sm-3 pt-3 py-md-0 border-left border-light outcome-button-group"
        >
          <Button
            disabled
            size="lg"
            color="success"
            className="text-uppercase font-weight-bolder pass-button"
          >
            pass
          </Button>
          <ButtonGroup size="sm">
            <Button
              disabled
              color="warning"
              className="text-capitalize substitute-button"
            >
              substitute
            </Button>
            <Button
              disabled
              color="danger"
              className="text-capitalize fail-button"
            >
              fail
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </div>
    </Container>
  );
}
