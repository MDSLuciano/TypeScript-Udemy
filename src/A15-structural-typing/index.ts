type VerifyUser = (user: User, sentValue: User) => boolean;

type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUser = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Luciano', password: '123456' };
const sentUser = { username: 'Luciano', password: '123456' };
const loggendIn = verifyUser(bdUser, sentUser);
console.log(loggendIn);
