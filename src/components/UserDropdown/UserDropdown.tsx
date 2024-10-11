import React, { useState, useRef, useMemo } from "react";
import { mockData } from "../../utils/mockData";
import useOutsideClick from "../../hooks/useOutsideClick";
import { FixedSizeList as List } from "react-window";
import { User } from "../../types/User";
import {
  DropdownWrapper,
  SelectedUsers,
  SearchInput,
  UserList,
  UserItem,
  Highlighted,
} from "./styles";

interface UserDropdownProps {
  selectedOrg: string | null;
  setSelectedUsers: React.Dispatch<React.SetStateAction<User[]>>;
  selectedUsers: User[];
}

const UserDropdown: React.FC<UserDropdownProps> = ({
  selectedOrg,
  setSelectedUsers,
  selectedUsers,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [filteredAndSearchedUsers, setFilteredAndSearchedUsers] = useState<
    User[]
  >([]);

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  useMemo(() => {
    const filteredUsers = mockData.users.filter(
      (user: User) => user.organizationId === selectedOrg,
    );

    const searchedUsers = filteredUsers.filter((user: User) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return fullName.includes(searchQuery.toLowerCase());
    });

    setFilteredAndSearchedUsers(searchedUsers);
  }, [selectedOrg, searchQuery]);

  const handleUserChange = (user: User) => {
    setSelectedUsers((prev) => {
      const alreadyInArray = prev.some((elem) => elem.id === user.id);
      return alreadyInArray
        ? prev.filter(({ id }) => id !== user.id)
        : [...prev, user];
    });
  };

  const renderUser = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const user = filteredAndSearchedUsers[index];
    return (
      <UserItem key={user.id} style={style}>
        <label>
          <input
            type="checkbox"
            checked={selectedUsers.some((elem) => elem.id === user.id)}
            onChange={() => handleUserChange(user)}
          />
          {highlightSearchTerm(
            `${user.firstName} ${user.lastName}`,
            searchQuery,
          )}
        </label>
      </UserItem>
    );
  };

  return (
    <DropdownWrapper ref={dropdownRef}>
      <SelectedUsers onClick={() => setIsOpen(!isOpen)}>
        {selectedUsers.length
          ? `${selectedUsers.length} selected`
          : "Select users"}
      </SelectedUsers>
      {isOpen && (
        <>
          <SearchInput
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <UserList>
            <List //render_optimization by virtualize list approach
              height={200}
              itemCount={filteredAndSearchedUsers.length}
              itemSize={25}
              width={"100%"}
            >
              {renderUser}
            </List>
          </UserList>
        </>
      )}
    </DropdownWrapper>
  );
};

const highlightSearchTerm = (text: string, term: string) => {
  if (!term) return text;

  const parts = text.split(new RegExp(`(${term})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === term.toLowerCase() ? (
      <Highlighted key={index}>{part}</Highlighted>
    ) : (
      part
    ),
  );
};

export default UserDropdown;
