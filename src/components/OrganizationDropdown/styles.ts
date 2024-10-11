import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  width: 250px;
  margin-bottom: 15px;
`;

export const SelectedOrg = styled.div`
  padding: 9px;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const OrgList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 1;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-top: 0;
  max-height: 200px;
  overflow-y: auto;
`;

export const OrgItem = styled.li`
  padding: 9px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s ease; 
  &:hover {
    background-color: #f1f1f1;
    transition: background 0s;
  }
`;

export const RadioInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
`;
