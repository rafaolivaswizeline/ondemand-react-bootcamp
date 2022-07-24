import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  height: 118px;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: white;
  padding: 0 20px;
`;

const StyledMessage = styled.p`
  font-style: italic;
  font-size: 14px;
`;

function Footer() {
  return (
    <StyledFooter data-testid="footer">
      <StyledMessage>
        Ecommerce created during Wizeline's Academy React Bootcamp
      </StyledMessage>
    </StyledFooter>
  );
}

export default Footer;
