import styled from "styled-components";

function Content() {
  const Content = styled.header`
    border: 1px solid gray;
    display: flex;
    min-height: calc(100vh - 236px);
    align-items: center;
    justify-content: center;
  `;

  return (
    <Content data-testid='content'>
      Awesome content...
    </Content>
  );
}

export default Content;
