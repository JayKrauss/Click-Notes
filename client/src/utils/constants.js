const MAIN_NAV_ITEMS = [
  { id: 0, text: 'calendar', location: '#' },
  { id: 1, text: 'script', location: '#' },
  { id: 2, text: 'follow-up', location: '#' },
  { id: 3, text: 'more', items: [
    { id: 4, text: 'sop', location: '#' },
    { id: 5, text: 'checklist', location: '#' },
    { id: 6, text: 'reschedule', location: '#' },
    { id: 7, text: 'report', location: '#' }
  ]}
];

const DESIRED_CANDIDATE_TRAITS = [
  { id: 0, text: 'personable', isDone: false },
  { id: 1, text: 'passionate', isDone: false },
  { id: 2, text: 'prepared', isDone: false },
  { id: 3, text: 'professional', isDone: false },
  { id: 4, text: 'knowledgeable', isDone: false },
  { id: 5, text: 'engaged', isDone: false },
  { id: 6, text: 'coachable', isDone: false },
  { id: 7, text: 'comprehensible', isDone: false }
];

const POSITIVE_BEHAVIORS = [
  { id: 9, text: 'empathized', count: 0 },
  { id: 10, text: 'encouraged', count: 0 },
  { id: 11, text: 'validated', count: 0 },
  { id: 0, text: 'asked goal', count: 0 },
  { id: 1, text: 'opened console', count: 0 },
  { id: 2, text: 'used search', count: 0 },
  { id: 8, text: 'leading question', count: 0 },
  { id: 15, text: 'explain it back', count: 0 },
  { id: 14, text: 'offered follow-up', count: 0 },
  { id: 3, text: 'checked understanding', count: 0 },
  { id: 4, text: 'student read error', count: 0 },
  { id: 5, text: 'student explained error', count: 0 },
  { id: 6, text: 'quality explanation', count: 0 },
  { id: 7, text: 'explained resource', count: 0 },
  { id: 12, text: 'compared own code', count: 0 },
  { id: 13, text: 'compared online code', count: 0 },
  { id: 16, text: 'tips, tricks, & wisdom', count: 0 },
  { id: 17, text: 'mentioned formatting', count: 0 },
  { id: 20, text: 'adapted', count: 0 }
];

const NEGATIVE_BEHAVIORS = [
  { id: 14, text: 'apathetic', count: 0 },
  { id: 0, text: 'discouraging', count: 0 },
  { id: 15, text: 'disinterested', count: 0 },
  { id: 12, text: 'profanity', count: 0 },
  { id: 4, text: 'fumble', count: 0 },
  { id: 7, text: 'false info', count: 0 },
  { id: 17, text: 'minor silence', count: 0 },
  { id: 1, text: 'too complex', count: 0 },
  { id: 3, text: 'rabbit hole', count: 0 },
  { id: 9, text: 'read error', count: 0 },
  { id: 11, text: 'explained error', count: 0 },
  { id: 10, text: 'error location', count: 0 },
  { id: 13, text: 'not using console', count: 0 },
  { id: 5, text: 'wrong change', count: 0 },
  { id: 6, text: 'extra formatting', count: 0 },
  { id: 8, text: 'confusion ignored', count: 0 },
  { id: 16, text: 'self-doubt ignored', count: 0 },
  { id: 2, text: 'i\'m confused', count: 0 }
];

const RED_FLAGS = [
  { id: 0, text: 'CDN', count: 0 },
  { id: 1, text: 'silences', count: 0 },
  { id: 3, text: 'answers', count: 0 },
  { id: 2, text: 'responses', count: 0 },
  { id: 4, text: 'changes', count: 0 },
  { id: 5, text: 'other', count: 0 }
];

const ERRORS = [
  { id: 0, text: 'jquery CDN', isDone: false },
  { id: 1, text: 'CDN order', isDone: false },
  { id: 2, text: 'alert syntax', isDone: false },
  { id: 3, text: 'bling - doc.ready()', isDone: false },
  { id: 4, text: 'bling - button.on()', isDone: false },
  { id: 5, text: 'event delegation', isDone: false },
  { id: 6, text: 'poor formatting', isDone: false },
  { id: 7, text: 'missing semicolons', isDone: false }
];

export {
  MAIN_NAV_ITEMS, DESIRED_CANDIDATE_TRAITS, POSITIVE_BEHAVIORS,
  NEGATIVE_BEHAVIORS, RED_FLAGS, ERRORS
};

export default {
  MAIN_NAV_ITEMS, DESIRED_CANDIDATE_TRAITS, POSITIVE_BEHAVIORS,
  NEGATIVE_BEHAVIORS, RED_FLAGS, ERRORS
};
