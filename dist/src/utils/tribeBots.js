import { getHost } from './tribes';
async;
function declare_bot({ uuid, name, description, tags, img, price_per_use, owner_pubkey, unlisted, deleted, owner_route_hint }) {
    const host = getHost();
    try {
        const r = await, fetch = ('https://' + host + '/bots', {
            method: 'POST',
            body: JSON.stringify({
                uuid, owner_pubkey,
                name, description, tags, img: img || '',
                price_per_use: price_per_use || 0,
                unlisted: unlisted || false,
                deleted: deleted || false,
                owner_route_hint: owner_route_hint || ''
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        const j = await, r, json = ();
        console.log('=> bot created:', j);
    }
    catch (e) {
        console.log('[tribes] unauthorized to declare');
        throw e;
    }
}
async;
function makeBotsJSON(tribeID) {
    const bots = await, models, ChatBot, findAll = ({
        where: {
            chatId: tribeID
        }
    });
    if (!bots)
        return [];
    if (!bots.length)
        return [];
    return bots.map(b => {
        const bot = b.dataValues;
        if (bot.botPrefix === '/loopout') {
            return loopoutBotJSON();
        }
        if (bot.botPrefix === '/testbot') {
            return testBotJSON();
        }
        return {
            prefix: bot.botPrefix,
            price: bot.pricePerUse || 0,
            commands: null,
        };
    });
}
null,
;
function loopoutBotJSON() {
    return {
        prefix: '/loopout',
        price: 0,
        commands: [{
                command: '*',
                price: 0,
                min_price: 250000,
                max_price: 16777215,
                price_index: 2,
                admin_only: false
            }]
    };
}
function testBotJSON() {
    return {
        prefix: '/testbot',
        price: 0,
        commands: [{
                command: '*',
                price: 0,
                min_price: 20,
                max_price: 50,
                price_index: 1,
                admin_only: false
            }]
    };
}
//# sourceMappingURL=tribeBots.js.map