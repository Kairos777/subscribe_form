import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { HomeContainer, HomeWrapper } from "./styles";
import { User } from "../../types/User";

interface Subscription {
  organization: string;
  users: User[];
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  let subscription: Subscription | null = null;

  const storedSubscription = localStorage.getItem("subscription");
  if (storedSubscription) {
    try {
      subscription = JSON.parse(storedSubscription) as Subscription;
    } catch (error) {
      console.error("Error parsing subscription:", error);
    }
  }

  return (
    <HomeWrapper>
      <h3>Home page</h3>
      <HomeContainer>
        {subscription ? (
          <div>
            <p>Organisation selected: {subscription.organization}</p>
            <p>
              Users selected:{" "}
              {subscription.users
                .map((user) => `${user.firstName} ${user.lastName}`)
                .join(", ")}
            </p>
            <p>Subscribed!</p>
          </div>
        ) : (
          <>
            <h1>Welcome</h1>
            <Button onClick={() => navigate("/subscribe")}>
              Go to Subscribe
            </Button>
          </>
        )}
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
