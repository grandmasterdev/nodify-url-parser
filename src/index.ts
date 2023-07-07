import * as url from 'url';

export const parseUrl = (inputUrl: string) => {
    const parsedUrl = new url.URL(inputUrl);

    const { host, protocol, username, password, pathname: path, port} = parsedUrl;

    const output = {
        host,
        path,
        port,
        protocol,
        username,
        password
    }

    return output;
}

export type ParseUrl = {
    host: string;
    path: string;
    port: number;
    protocol: string;
    username: string;
    password: string;
}