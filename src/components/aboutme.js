import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import Work from './components/buttons'

function About() {
  return (
    <Work>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>About Me</Accordion.Header>
        <Accordion.Body>
          <ul id="buttonsList">
            <li>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</span></p>
                <button>Edit</button>
                <button>Remove</button>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Interests</Accordion.Header>
        <Accordion.Body>
        <ul id="buttonsList">
            <li>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</span></p>
                <button>Edit</button>
                <button>Remove</button>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Goals</Accordion.Header>
        <Accordion.Body>
        <ul id="buttonsList">
            <li>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</span></p>
                <button>Edit</button>
                <button>Remove</button>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Work>
  );
};

export default About;