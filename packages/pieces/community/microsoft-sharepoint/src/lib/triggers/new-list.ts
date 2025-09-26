
import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
export const newList = createTrigger({
    // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
    name: 'newList',
    displayName: 'New List',
    description: 'Fires when a new list is created in a site.',
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