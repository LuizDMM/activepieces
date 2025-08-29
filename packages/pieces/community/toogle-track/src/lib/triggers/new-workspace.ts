
import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
export const newWorkspace = createTrigger({
    // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
    name: 'newWorkspace',
    displayName: 'New Workspace',
    description: 'Fires when a new workspace is created.',
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