import { LogLevel } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: '083a7996-d80f-4323-b294-23b9008132e7',
    authority: 'https://login.microsoftonline.com/ea3033f5-f488-48e0-ab17-b07a87e18085',
    redirectUri: 'http://localhost:3000',
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            console.log(message);
            return;
        }
      },
    },
  },
};


export const loginRequest = {
    scopes: ['User.Read'],
  };