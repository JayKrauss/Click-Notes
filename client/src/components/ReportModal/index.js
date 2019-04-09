import React, { Component } from 'react';

// Reactstrap components.
import {
  Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem
} from 'reactstrap';

// Font Awesome Icons.
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ReportModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      report: {
        observedTraits: [],
        observedBehaviors: [],
        fixedErrors: []
      }
    };

    // Bind class methods.
    this.toggle = this.toggle.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleOpen() {
    const { makeReport } = this.props;
    const report = makeReport();
    this.setState(() => ({ report }));
  }

  render() {
    const { observedTraits, observedBehaviors, fixedErrors } = this.state.report;

    return (
      <div>
        <Button
          color="link"
          onClick={this.toggle}
          className="flex-fill text-center text-uppercase text-white-50 font-italic dropdown-item nav-sub-item"
        >
          report
        </Button>
        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          onOpened={this.handleOpen}
          className="mw-100 mx-5 report-modal">
          <ModalHeader
            tag="h4"
            toggle={this.toggle}
            className="bg-primary text-capitalize text-white-50 shadow"
          >
            interview report
          </ModalHeader>
          <ModalBody className="pb-0 shadow-sm text-center">
            <div className="mx-auto w-50">
              <h5 className="text-capitalize">observed traits</h5>
              <div className="d-flex justify-content-center flex-wrap text-capitalize">
                {observedTraits.length === 0 && (
                  <p>no data</p>
                )}
                {observedTraits.map((trait) => (
                  <span key={trait.index} className="w-25 text-capitalize font-weight-bold">
                    {trait.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="my-4 pb-3">
              <h5 className="text-capitalize">observed behaviors</h5>
              <div className="d-flex flex-wrap justify-content-around text-capitalize text-center">
                <div className="flex-fill border-right border-dark report-section">
                  <p className="mb-0 font-weight-bold report-sub-heading">positive</p>
                  {observedBehaviors.positiveBehaviors && observedBehaviors.positiveBehaviors.length === 0 && (
                    <p>no data</p>
                  )}
                  <ListGroup flush className="flex-wrap mx-3 mh-100">
                    {observedBehaviors.positiveBehaviors && observedBehaviors.positiveBehaviors.map((behavior) => (
                      <ListGroupItem key={behavior.id} className="p-0 text-left">
                        <Badge color="transparent" className="font-large text-muted">
                          {behavior.count}
                        </Badge>
                        <span className="d-inline-block">
                          {behavior.text}
                        </span>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </div>
                <div className="flex-fill report-section">
                  <p className="mb-0 font-weight-bold report-sub-heading">negative</p>
                  {observedBehaviors.negativeBehaviors && observedBehaviors.negativeBehaviors.length === 0 && (
                    <p>no data</p>
                  )}
                  <ListGroup flush className="flex-wrap mx-3 mh-100">
                    {observedBehaviors.negativeBehaviors && observedBehaviors.negativeBehaviors.map((behavior) => (
                      <ListGroupItem key={behavior.id} className="p-0 text-capitalize text-left">
                        <Badge color="transparent" className="font-large text-muted">
                          {behavior.count}
                        </Badge>
                        <span className="d-inline-block">
                          {behavior.text}
                        </span>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </div>

            <div className="my-3 pb-3">
              <div className="d-flex flex-wrap justify-content-around text-capitalize text-center">
                <div className="flex-fill pb-3 border-right border-dark report-section-bottom">
                  <p className="mb-0 font-weight-bold report-sub-heading">red flags</p>
                  {observedBehaviors.redFlags && observedBehaviors.redFlags.length === 0 && (
                    <p>no data</p>
                  )}
                  <ListGroup flush className="flex-wrap mx-3 mh-100">
                    {observedBehaviors.redFlags && observedBehaviors.redFlags.map((behavior) => (
                      <ListGroupItem key={behavior.id} className="p-0 text-capitalize text-left">
                        <Badge color="transparent" className="font-large text-muted">
                          {behavior.count}
                        </Badge>
                        <span className="d-inline-block">
                          {behavior.text}
                        </span>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </div>
                <div className="flex-fill pb-3 report-section-bottom">
                  <p className="mb-0 font-weight-bold report-sub-heading">errors</p>
                  {fixedErrors.length === 0 && (
                    <p>no data</p>
                  )}
                  <ListGroup flush className="flex-wrap mx-3 mh-100">
                    {fixedErrors.map((error) => (
                      <ListGroupItem key={error.id} className="p-0 text-left">
                        <span className="d-inline-block">
                          {error.text}
                        </span>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="align-items-end py-1">
            <Button
              disabled
              color="primary"
              onClick={this.toggle}
              className="shadow"
            >
              <FontAwesomeIcon size="lg" icon={faCopy} />
            </Button>
            <Button
              color="link"
              onClick={this.toggle}
              className="text-capitalize"
            >
              close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
