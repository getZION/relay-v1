import { success, failure } from "../utils/res";
async;
function requestExternalTokens(req, res) {
    if (!req.owner)
        return failure(res, "no owner");
    const pubkey = req.owner.publicKey;
    try {
        const memeToken = await, meme, getMediaToken = (pubkey);
        const tribesToken = await, tribes, genSignedTimestamp = (pubkey);
        if (!memeToken || !tribesToken) {
            return failure(res, 'failed to generate token');
        }
        const result = {
            memeToken,
            tribesToken,
            alias: req.owner.alias,
            photoUrl: req.owner.photoUrl,
            routeHint: req.owner.routeHint,
            contactKey: req.owner.contactKey,
        };
        success(res, result);
    }
    catch (e) {
        failure(res, e);
    }
}
//# sourceMappingURL=auth.js.map