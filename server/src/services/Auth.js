import jwt from "jsonwebtoken";

const JWT_SECRET = "CNnxhxhhxhggsffxvfgsgsfvx";
const JWT_OPT = {
  issuer: "InStore",
};

const createToken = user => {
  if (!user && !user._id) {
    return null;
  }

  const payLoad = {
    id: user._id,
  };

  return jwt.sign(payLoad, JWT_SECRET, JWT_OPT);
};

const verifyToken = token => {
  return jwt.verify(token, JWT_SECRET, JWT_OPT);
};

const getTokenFromHeaders = req => {
  const token = req.headers.authorization;

  if (token) {
    const arr = token.split(" ");

    if (arr[0] === "Bearer" && arr[1]) {
      try {
        return verifyToken(arr[1]);
      } catch (error) {
        return null;
      }
    }
  }

  return null;
};

export const AuthServices = {
  createToken,
  verifyToken,
  getTokenFromHeaders,
};
