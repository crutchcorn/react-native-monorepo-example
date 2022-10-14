import { UserMessage } from "../types/message";

export const loadMessages = async () => {
  const messages: UserMessage[] = [
    {
      username: "crutchcorn",
      message: "This is a test, testing to see how this all looks",
      profilePicture: require("../assets/crutchcorn.jpg"),
      date: new Date(),
      id: "1",
    },
    {
      username: "crutchcorn",
      message: "This is a test, testing to see how this all looks",
      profilePicture: require("../assets/crutchcorn.jpg"),
      date: new Date(),
      id: "2",
    },
    {
      username: "crutchcorn",
      message: "This is a test, testing to see how this all looks",
      profilePicture: require("../assets/crutchcorn.jpg"),
      date: new Date(),
      id: "3",
    },
    {
      username: "crutchcorn",
      message: "This is a test, testing to see how this all looks",
      profilePicture: require("../assets/crutchcorn.jpg"),
      date: new Date(),
      id: "4",
    },
    {
      username: "crutchcorn",
      message: "This is a test, testing to see how this all looks",
      profilePicture: require("../assets/crutchcorn.jpg"),
      date: new Date(),
      id: "5",
    },
    {
      username: "crutchcorn",
      message: "This is a test, testing to see how this all looks",
      profilePicture: require("../assets/crutchcorn.jpg"),
      date: new Date(),
      id: "6",
    },
  ];

  return messages;
};

export const storeMessages = async () => {};
