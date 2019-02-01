import { EnvConfig } from "../../utils/environment";

const { createEventAdapter } = require('@slack/events-api');
export const slackEvents = createEventAdapter(EnvConfig.get()['SLACK_SIGNING_SECRET']);

slackEvents.on('message', (event: any) => {
    console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
});

slackEvents.on('error', console.error);