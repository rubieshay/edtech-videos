export const apiURL = "https://take-home-assessment-423502.uc.r.appspot.com/api";

// regex allows for any amount of alphabetical strings separated by underscores, and is forced into lowercase
export const usernameRegex = /^(?:[a-zA-Z]*_)+[a-zA-Z]+$/;
export const usernameAllowedCharacters = /^[a-zA-Z_]+$/;

export enum NavPage {login, learn, contentStudio};