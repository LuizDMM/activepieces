
import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { tooglTrackAuth } from '../common';

export const newTimeEntry = createTrigger({
    auth: tooglTrackAuth,
    name: 'newTimeEntry',
    displayName: 'New Time Entry',
    description: 'Fires when a new time entry is added (with optional project/task filter).',
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
