
import { loadConfig } from "../utils/config";
const config = loadConfig();

const mediaURL = config.media_host_protocol + "://" + config.media_host + "/";

export const getMemeUrl = (host?: string) => {
    const theURL = host ? config.media_host_protocol + "://" + host + "/" : mediaURL;
    console.log("getMemeUrl", theURL);
    return theURL;
}