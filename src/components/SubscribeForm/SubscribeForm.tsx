import React from "react";
import Button from "../Button";
import OrganizationDropdown from "../OrganizationDropdown";
import UserDropdown from "../UserDropdown";
import { useNavigate } from "react-router-dom";
import { Organization } from "../../types/Organization";
import { User } from "../../types/User";
import { FormWrapper } from "./styles";

const SubscribeForm: React.FC = () => {
  const [selectedOrg, setSelectedOrg] = React.useState<Organization | null>(
    null,
  );
  const [selectedUsers, setSelectedUsers] = React.useState<User[]>([]);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedOrg && selectedUsers.length > 0) {
      const subscription = {
        organization: selectedOrg.name,
        users: selectedUsers,
      };
      localStorage.setItem("subscription", JSON.stringify(subscription));
      navigate("/");
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <OrganizationDropdown
          setSelectedOrg={setSelectedOrg}
          setSelectedUsers={setSelectedUsers}
        />
        {selectedOrg && (
          <UserDropdown
            selectedOrg={selectedOrg.id}
            selectedUsers={selectedUsers}
            setSelectedUsers={setSelectedUsers}
          />
        )}
        <Button disabled={!selectedOrg || selectedUsers.length === 0} fullWidth>
          Submit
        </Button>
      </form>
    </FormWrapper>
  );
};

export default SubscribeForm;
