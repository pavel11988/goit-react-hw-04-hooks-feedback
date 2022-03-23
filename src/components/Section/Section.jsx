import React from 'react';
import PropTypes from 'prop-types';

import { SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <section>
      <SectionTitle> {title} </SectionTitle>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
