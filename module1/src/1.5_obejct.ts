//Reference Type --> Object

const user: {
  readonly University: "AIUB"; // type --> literal types && read only property , can not reassign new value
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isStudent: boolean;
} = {
  University: "AIUB",
  firstName: "rakibul",
  lastName: "islam",
  isStudent: true,
};
