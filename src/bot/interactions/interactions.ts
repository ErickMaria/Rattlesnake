import { EnvConfig } from "../../utils/environment";
const { createMessageAdapter } = require('@slack/interactive-messages');

export const slackInteractions = createMessageAdapter(EnvConfig.get()['SLACK_SIGNING_SECRET']);

slackInteractions.action('welcome_agree_button', (payload: any, respond: any) => {
    // `payload` is an object that describes the interaction
    console.log(`The user ${payload.user.name} in team ${payload.team.domain} pressed a button`);
});