import React from 'react';
import styled from 'styled-components';

import config from '../../content/meta/config';
import DevIcon from '../DevIcon';

const DevIconContainer = styled.div`
  margin: auto 0.5rem;
  padding: .25rem;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.8);
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;
  grid-template-areas:
    'text icons'
    'text icons'
    'text icons'
    'text icons';
`;

const SkillHeading = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.8);
`;

const getDevIcons = skills =>
  skills.map(skill => (
    <DevIconContainer title={skill.type} key={skill.icon}>
      <DevIcon iconName={skill.icon} />
    </DevIconContainer>
  ));

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const getSkillSection = (skillLevel, skills) =>
  skills.length > 0
    ? [
        <SkillHeading key={skillLevel}>
          {capitalizeFirstLetter(skillLevel)}
        </SkillHeading>,
        <IconsContainer key={Math.random()}>
          {getDevIcons(skills)}
        </IconsContainer>,
      ]
    : null;

const SKILLS = ['expert', 'advanced', 'intermediate', 'elementary'];

export default () => {
  return (
    <SkillsContainer>
      {SKILLS.map(skill =>
        getSkillSection(skill, config.skills.filter(s => s.level === skill))
      )}
    </SkillsContainer>
  );
};
