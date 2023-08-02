import styled from "styled-components";

export const BottomBarContainerWeb = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-top: 2px solid ${(props) => props.theme.background_secondary};
  background: ${(props) => props.theme.background_primary};
  padding: 8px;
`;
