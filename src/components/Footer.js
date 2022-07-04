import styled from "styled-components";

function Footer() {
  const Footer = styled.footer`
    display: flex;
    height: 118px;
    align-items: center;
    justify-content: center;
    background-color: #333;
    color: white;
  `;

  const Message = styled.p`
    font-style: italic;
    font-size: 14px;
  `;

  return (
    <Footer data-testid="footer">
      <Message>
        Ecommerce created during Wizeline's Academy React Bootcamp
      </Message>
    </Footer>
  );
}

export default Footer;
