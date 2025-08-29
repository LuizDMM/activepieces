
import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { tooglTrackAuth } from '../common';

export const newTag = createTrigger({
    auth: tooglTrackAuth,
    name: 'newTag',
    displayName: 'New Tag',
    description: 'Triggers when a new tag is created',
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
