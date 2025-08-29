
import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { tooglTrackAuth } from '../common';

export const newTimeEntryStarted = createTrigger({
    auth: tooglTrackAuth,
    name: 'newTimeEntryStarted',
    displayName: 'New Time Entry Started',
    description: 'Fires when a time entry is started and is currently running.',
    props: {},
    sampleData: {},
    type: TriggerStrategy.WEBHOOK,
    async onEnable(context){
        // implement webhook creation logic
    },
    async onDisable(context){
        // implement webhook deletion logic
    },
    async run(context){
        return [context.payload.body]
    }
})
