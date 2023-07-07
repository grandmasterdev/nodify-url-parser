import * as url from "url";
import * as querystring from "querystring";

/**
 * 
 * @param inputUrl 
 * @returns ParseUrl
 */
export const parseUrl = (inputUrl: string) => {
  const parsedUrl = new url.URL(inputUrl);

  const {
    host,
    protocol,
    username,
    password,
    pathname: path,
    port,
    search,
  } = parsedUrl;

  const output = {
    host,
    path,
    port,
    protocol,
    username,
    password,
    query: querystring.parse(search.substring(1)),
  };

  return cleanEmptyProps(output);
};

/**
 * 
 * @param obj 
 * @returns ParseUrl
 */
const cleanEmptyProps = <T>(obj: ParseUrl | T) => {
  if (!obj) {
    return {};
  }

  const keys = Object.keys(obj);

  keys.forEach((key) => {
    if (obj[key as keyof typeof obj] === "") {
      delete obj[key as keyof typeof obj];
    }
    if (typeof obj[key as keyof typeof obj] === "object") {
      cleanEmptyProps(obj[key as keyof typeof obj] as Record<string, unknown>);
    }
  });

  return obj;
};

export type ParseUrl = {
  host: string;
  path: string;
  port: string;
  protocol: string;
  username: string;
  password: string;
};
