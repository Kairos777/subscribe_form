import React, { useState, useRef, useEffect } from "react";
import { mockData } from "../../utils/mockData";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Organization } from "../../types/Organization";
import { User } from "../../types/User";
import {
  DropdownWrapper,
  SelectedOrg,
  OrgList,
  OrgItem,
  RadioLabel,
  RadioInput,
} from "./styles";

interface OrganizationDropdownProps {
  setSelectedOrg: React.Dispatch<React.SetStateAction<Organization | null>>;
  setSelectedUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const OrganizationDropdown: React.FC<OrganizationDropdownProps> = ({
  setSelectedOrg,
  setSelectedUsers,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localSelectedOrg, setLocalSelectedOrg] = useState<Organization | null>(
    null,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  //clear selected users on new organization slect
  useEffect(() => {
    if (localSelectedOrg) {
      setSelectedUsers([]);
    }
  }, [localSelectedOrg, setSelectedUsers]);

  const handleOrgClick = (org: Organization) => {
    setLocalSelectedOrg(org);
    setSelectedOrg(org);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper ref={dropdownRef}>
      <SelectedOrg onClick={() => setIsOpen(!isOpen)}>
        {localSelectedOrg ? localSelectedOrg.name : "Select an Organization"}
      </SelectedOrg>
      {isOpen && (
        <OrgList>
          {mockData.organizations.map((org) => (
            <OrgItem key={org.id} onClick={() => handleOrgClick(org)}>
              <RadioInput
                type="radio"
                id={org.id}
                name="organization"
                checked={localSelectedOrg?.id === org.id}
                onChange={() => handleOrgClick(org)}
              />
              <RadioLabel htmlFor={org.id}>{org.name}</RadioLabel>
            </OrgItem>
          ))}
        </OrgList>
      )}
    </DropdownWrapper>
  );
};

export default OrganizationDropdown;
