import React, { Component } from 'react';

// Reactstrap components.
import { Container, Row, Col } from 'reactstrap';

// Custom components.
import { Header, MainNavbar, SubHeader, BehaviorList, ErrorList } from '../../components';

// API utilities, helpers, and other assets.
import { DESIRED_CANDIDATE_TRAITS, POSITIVE_BEHAVIORS, NEGATIVE_BEHAVIORS, RED_FLAGS, ERRORS } from '../../utils/constants';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      behaviors: {
        positiveBehaviors: POSITIVE_BEHAVIORS,
        negativeBehaviors: NEGATIVE_BEHAVIORS,
        redFlags: RED_FLAGS
      },
      traits: DESIRED_CANDIDATE_TRAITS,
      errors: ERRORS
    };

    // Bind class methods.
    this.handleTraitClick = this.handleTraitClick.bind(this);
    this.handleBehaviorClick = this.handleBehaviorClick.bind(this);
    this.handleBehaviorRightClick = this.handleBehaviorRightClick.bind(this);
    this.handleErrorClick = this.handleErrorClick.bind(this);
    this.makeReport = this.makeReport.bind(this);
  }

  handleTraitClick(event) {
    const { traits } = this.state;
    const traitName = event.target.getAttribute('data-name');
    if (traitName) {
      const updatedTraits = traits.map((trait) => {
        if (trait.text === traitName) {
          trait.isDone = !trait.isDone;
        }
        return trait;
      });
      this.setState(() => ({ traits: updatedTraits }));
    }
  }

  handleBehaviorClick(event) {
    const { behaviors } = this.state;
    const behaviorButton = event.target;
    const subcategory = behaviorButton.getAttribute('data-sub-category');
    const name = behaviorButton.getAttribute('data-name');

    if (subcategory) {
      const currentBehaviors = behaviors[subcategory];
      const updatedBehaviors = currentBehaviors.map((behavior) => {
        if (behavior.text === name) {
          behavior.count += 1;
        }
        return behavior;
      });

      behaviors[subcategory] = updatedBehaviors;
      this.setState(() => ({ behaviors }));
    }
  }

  handleBehaviorRightClick(event) {
    event.preventDefault();

    const { behaviors } = this.state;
    const behaviorButton = event.target;
    const subcategory = behaviorButton.getAttribute('data-sub-category');
    const name = behaviorButton.getAttribute('data-name');

    if (subcategory) {
      const currentBehaviors = behaviors[subcategory];
      const updatedBehaviors = currentBehaviors.map((behavior) => {
        if (behavior.text === name) {
          behavior.count -= 1;
          if (behavior.count < 0) behavior.count = 0;
        }
        return behavior;
      });

      behaviors[subcategory] = updatedBehaviors;
      this.setState(() => ({ behaviors }));
    }
  }

  handleErrorClick(event) {
    const { errors } = this.state;
    const errorName = event.target.getAttribute('data-name');
    if (errorName) {
      const updatedErrors = errors.map((error) => {
        if (error.text === errorName) {
          error.isDone = !error.isDone;
        }
        return error;
      });
      this.setState(() => ({ errors: updatedErrors }));
    }
  }

  makeReport() {
    const { behaviors, errors, traits } = this.state;
    let trait;
    const observedTraits = [];
    for (let key in traits) {
      if (traits.hasOwnProperty(key)) {
        trait = traits[key];
        if (trait.isDone) observedTraits.push(trait);
      }
    }

    let error;
    const fixedErrors = [];
    for (let key in errors) {
      if (errors.hasOwnProperty(key)) {
        error = errors[key];
        if (error.isDone) fixedErrors.push(error);
      }
    }

    let behaviorsList;
    const observedBehaviors = [];
    for (let key in behaviors) {
      if (behaviors.hasOwnProperty(key)) {
        behaviorsList = behaviors[key];
        observedBehaviors[key] = [];
        let behavior;
        for (let innerKey in behaviorsList) {
          if (behaviorsList.hasOwnProperty(innerKey)) {
            behavior = behaviorsList[innerKey];
            if (behavior.count >= 1) observedBehaviors[key].push(behavior);
          }
        }
      }
    }

    return ({ observedTraits, observedBehaviors, fixedErrors });
  }

  render() {
    const { behaviors, traits, errors } = this.state;
    const { positiveBehaviors, negativeBehaviors, redFlags } = behaviors;

    return (
      <Container fluid className="p-0 app">
        <Header>
          <MainNavbar makeReport={this.makeReport} />
          <SubHeader
            traits={traits}
            handleTraitClick={this.handleTraitClick}
          />
        </Header>

        <Container fluid>
          <Row>
            <Col
              xs="12" sm="6" md="5"
              className="px-0 py-3"
            >
              <h4 className="text-uppercase">positive points</h4>
              <BehaviorList
                color="success"
                subcategory="positiveBehaviors"
                behaviors={positiveBehaviors}
                handleClick={this.handleBehaviorClick}
                handleRightClick={this.handleBehaviorRightClick}
              />
            </Col>
            <Col
              xs="12" sm="6" md="4"
              className="px-0 py-3"
            >
              <h5 className="text-uppercase">negative points</h5>
              <BehaviorList
                color="warning"
                subcategory="negativeBehaviors"
                behaviors={negativeBehaviors}
                handleClick={this.handleBehaviorClick}
                handleRightClick={this.handleBehaviorRightClick}
              />
            </Col>
            <Col
              xs="12" sm="12" md="3"
              className="px-0 py-3"
            >
              <div className="d-flex flex-md-column flex-wrap flex-sm-nowrap">
                <div className="flex-fill pb-4 pt-sm-0 flags-section">
                  <h6 className="text-uppercase">red flags</h6>
                  <BehaviorList
                    color="danger"
                    subcategory="redFlags"
                    behaviors={redFlags}
                    handleClick={this.handleBehaviorClick}
                    handleRightClick={this.handleBehaviorRightClick}
                  />
                </div>
                <div className="flex-fill errors-section">
                  <h6 className="text-uppercase">error summary</h6>
                  <ErrorList
                    errors={errors}
                    handleClick={this.handleErrorClick}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Home;
