import Container from 'components/Container';
import { StyledSection } from './Section.styled';

function Section({ title, children }) {
  return (
    <StyledSection>
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    </StyledSection>
  );
}

export default Section;
