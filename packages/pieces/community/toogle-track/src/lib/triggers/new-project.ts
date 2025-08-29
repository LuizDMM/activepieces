
import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { tooglTrackAuth } from '../common';

export const newProject = createTrigger({
    auth: tooglTrackAuth,
    name: 'newProject',
    displayName: 'New Project',
    description: 'Fires when a new project is added.',
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
