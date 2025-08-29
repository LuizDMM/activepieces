
import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { tooglTrackAuth } from '../common';

export const newTask = createTrigger({
    auth: tooglTrackAuth,
    name: 'newTask',
    displayName: 'New Task',
    description: 'Fires when a new task is created.',
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
