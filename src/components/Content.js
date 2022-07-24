import styled from "styled-components";

const StyledContent = styled.header`
  border: 1px solid gray;
  display: flex;
  min-height: calc(100vh - 236px);
  align-items: center;
  justify-content: center;
`;

function Content() {
  return (
    <StyledContent data-testid='content'>
      Awesome content...
    </StyledContent>
  );
}

export default Content;
