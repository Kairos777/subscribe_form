import styled from "styled-components";

export const DropdownWrapper = styled.div`
  max-height: 200px;
  width: 250px;
  position: relative;
  margin-bottom: 15px;
`;
export const SelectedUsers = styled.div`
  padding: 9px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  padding: 9px;
  width: 100%;
  margin-bottom: 10px;
`;

export const UserList = styled.ul`
  list-style: none;
  padding: 10px;
  margin: -10px 0 0;
  position: absolute;
  z-index: 1;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-top: 0;
`;

export const UserItem = styled.li`
  margin-bottom: 5px;

  label {
    cursor: pointer;
  }

  input {
    margin-right: 10px;
  }
`;

export const Highlighted = styled.span`
  background-color: yellow;
`;
