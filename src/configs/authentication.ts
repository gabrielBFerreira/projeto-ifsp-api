const userTypes = ['admin', 'client'];
type UserType = typeof userTypes[number];

type IAuthenticationConfig = {
  [key in UserType]: {
    jwt: {
      secret: string;
      expiresIn: number;
    };
    refreshToken: {
      expiresIn: number;
    };
  };
};

const authenticationConfig: IAuthenticationConfig = {
  admin: {
    jwt: {
      secret: process.env.JWT_SECRET || 'jwt_default',
      expiresIn: 15,
    },
    refreshToken: {
      expiresIn: 15,
    },
  },
  client: {
    jwt: {
      secret: process.env.JWT_SECRET || 'jwt_default',
      expiresIn: 30,
    },
    refreshToken: {
      expiresIn: 30,
    },
  },
};

export { authenticationConfig };
