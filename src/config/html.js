import { QUESTION_TYPES } from "../constants";
import { ALL_DEV } from './partials/all-dev';

export const HTML = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'HTML Tags',
    description: [
      'Candidate has a strong understanding of all common HTML tags.',
      'Candidate is aware of the purpose of each HTML tag and how to use them.',
      'Candidate is aware of tag deprecation and which tags are no longer best practice.',
      'Candidate is familiar with relevant properties for each HTML tag.',
    ],
    weight: 1,
    id: 'tags',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Form Validation',
    description: [
      'Candidate is able to build an interactive form that is able to accept user data and validate it against expected return.',
      'Candidate has a strong knowledge in regards to form security, prevent such threats as injection and other methods of interacting with a form maliciously.',
    ],
    weight: 1,
    id: 'form-validation',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Accessibility',
    description: [
      'Is familiar with how to manipulate tab index.',
      'Is aware of all accessibility tags and properties.',
      'Understands accessibility standards and what is required to meet various levels of compliance.',
    ],
    weight: 1, 
    id: 'accessibility',
  },
  ...ALL_DEV,
];
