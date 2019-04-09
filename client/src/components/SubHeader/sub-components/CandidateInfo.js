import React from 'react';

export default function CandidateInfo(props) {
  const { candidate } = props;

  // NOTE: This shouldn't be needed after calendar integration.
  // Make a placeholder candidate if one does not exist.
  let candidateInfo = candidate;
  if (!candidateInfo) {
    candidateInfo = {
      name: 'candidate name',
      interviewType: 'type',
      university: 'name of university'
    };
  }

  return (
    <div className="d-flex justify-content-around flex-wrap flex-md-nowrap">
      <h3
        className="flex-grow-1 flex-md-grow-0 w-50 px-md-5 mb-0 text-capitalize text-truncate text-left"
      >
        {candidateInfo.name}
      </h3>
      <span className="mx-4 text-uppercase">
        {candidateInfo.interviewType}
      </span>
      <span className="flex-grow-1 text-capitalize text-truncate">
        {candidateInfo.university}
      </span>
    </div>
  );
}
