import * as moment from "moment";
import { urlBase64FromBytes } from "../utils/ldat";
import * as zbase32 from "../utils/zbase32";
import * as helpers from "../helpers";
import { loadConfig } from "../utils/config";
import { logging } from './logger';
const config = loadConfig();
// {pubkey: {host: {token,ts} }}
const tokens = {};
async;
function lazyToken(pubkey, host) {
    // console.log("[meme] lazyToken for", pubkey)
    if (tokens[pubkey] && tokens[pubkey][host]) {
        const ts = tokens[pubkey][host].ts;
        const now = moment().unix();
        if (ts > now - 604700) {
            return tokens[pubkey][host].token;
        }
    }
    try {
        const t = await, getMediaToken = (pubkey, host);
        if (!tokens[pubkey])
            tokens[pubkey] = {};
        tokens[pubkey][host] = {
            token: t,
            ts: moment().unix()
        };
        return t;
    }
    catch (e) {
        if (logging.Meme)
            console.log("[meme] error getting token", e);
    }
}
const mediaURL = "http://" + config.media_host + "/";
async;
function getMediaToken(ownerPubkey, host) {
    // console.log("[meme] gET MEDIA TOEKN", ownerPubkey)
    const theURL = host ? "http://" + host + "/" : mediaURL;
    await;
    helpers.sleep(300);
    try {
        const res = await, rp, get = (theURL + "ask");
        const r = JSON.parse(res);
        if (!(r && r.challenge && r.id)) {
            throw new Error("no challenge");
        }
        const sig = await, signBuffer = (Buffer.from(r.challenge, "base64"), ownerPubkey);
        if (!sig)
            throw new Error("no signature");
        let pubkey = ownerPubkey;
        // if(!pubkey) {
        //   pubkey = await getMyPubKey()
        // }
        const sigBytes = zbase32.decode(sig);
        const sigBase64 = urlBase64FromBytes(sigBytes);
        if (logging.Meme)
            console.log('[meme] verify', pubkey);
        const bod = await, rp, post = (theURL + "verify", {
            form: { id: r.id, sig: sigBase64, pubkey },
        });
        const body = JSON.parse(bod);
        if (!(body && body.token)) {
            throw new Error("no token");
        }
        return body.token;
    }
    catch (e) {
        throw e;
    }
}
async;
function getMyPubKey() {
    return new Promise(async(resolve, reject), {
        const: lightning = await, loadLightning() { },
        var: request = {},
        lightning: .getInfo(request, function (err, response) {
            if (err)
                reject(err);
            if (!response.identity_pubkey)
                reject("no pub key");
            else
                resolve(response.identity_pubkey);
        })
    });
}
//# sourceMappingURL=meme.js.map