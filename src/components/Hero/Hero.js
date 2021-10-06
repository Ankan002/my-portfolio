import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        I am Ankan Bhattacharya currently pursuing Diploma in Computer Science Engineering. With knowledge of Web Development, Mobile Development and intermediate Data Structures and Algorithm, I am here to contribute my 100% focus to an app that has the potential to define the future.
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;