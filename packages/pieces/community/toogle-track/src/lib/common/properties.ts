import { Property } from '@activepieces/pieces-framework';

export const createClient = {
  workspaceId: Property.Number({
    displayName: 'Workspace ID',
    required: true,
  }),
  externalReference: Property.ShortText({
    displayName: 'External Reference',
    required: false,
  }),
  name: Property.ShortText({
    displayName: 'Client Name',
    required: true,
  }),
  notes: Property.ShortText({
    displayName: 'Client Notes',
    required: false,
  }),
};

export const createProject = {
  workspaceId: Property.Number({
    displayName: 'Workspace ID',
    required: true,
  }),
  active: Property.Checkbox({
    displayName: 'Is active?',
    description: 'Whether the project is active or archived.',
    defaultValue: true,
    required: true,
  }),
  auto_estimates: Property.Checkbox({
    displayName: 'Enable Auto Estimates',
    description:
      'Whether estimates are based on task hours, optional, premium feature.',
    required: false,
  }),
  billable: Property.Checkbox({
    displayName: 'Is Billable?',
    description:
      'Whether the project is set as billable, optional, premium feature',
    required: false,
  }),
  cid: Property.Number({
    displayName: 'Client ID Legacy',
    description: 'Client ID, legacy.',
    required: false,
  }),
  client_id: Property.Number({
    displayName: 'Client ID',
    description: 'Client ID, optional.',
    required: false,
  }),
  color: Property.ShortText({ displayName: 'Project Color', required: true }),
  currency: Property.ShortText({
    displayName: 'Project Currency',
    description: 'Project currency, optional, premium feature.',
    required: false,
  }),
  end_date: Property.DateTime({
    displayName: 'End Date',
    description: 'End date of a project timeframe',
    required: false,
  }),
  estimated_hours: Property.Number({
    displayName: 'Estimated Hours',
    description: 'Estimated hours, optional, premium feature',
    required: false,
  }),
  external_reference: Property.ShortText({
    displayName: 'External Reference',
    required: false,
  }),
  fixed_fee: Property.Number({
    displayName: 'Fixed Fee',
    description: 'Project fixed fee, optional, premium feature',
    required: false,
  }),
  is_private: Property.Checkbox({
    displayName: 'Is Private?',
    description: 'Whether the project is private or not',
    required: true,
    defaultValue: true,
  }),
  is_shared: Property.Checkbox({
    displayName: 'Is Shared?',
    description: 'Whether the project is shared or not',
    required: true,
    defaultValue: false,
  }),
  name: Property.ShortText({
    displayName: 'Project Name',
    required: true,
  }),
  rate: Property.Number({
    displayName: 'Project Rate',
    description: 'Hourly rate, optional, premium feature',
    required: false,
  }),
  rate_change_mode: Property.StaticDropdown({
    displayName: 'Rate Change Mode',
    description: `Rate change mode, optional, premium feature.
        Can be "start-today", "override-current", "override-all"`,
    required: false,
    options: {
      placeholder: 'Select one',
      options: [
        { label: 'Start Today', value: 'start-today' },
        { label: 'Override Current', value: 'override-current' },
        { label: 'Override All', value: 'override-all' },
      ],
    },
  }),
  recurring: Property.Checkbox({
    displayName: 'Is Recurring?',
    description: 'Project is recurring, optional, premium feature',
    required: false,
  }),
  recurring_parameters: Property.Object({
    displayName: 'Recurring Parameters',
    description: 'Project recurring parameters, optional, premium feature',
    required: false,
  }),
  start_date: Property.DateTime({
    displayName: 'Start Date',
    description: 'Start date of a project timeframe',
    required: true,
  }),
  template: Property.Checkbox({
    displayName: 'Is Template?',
    description: 'Project is template, optional, premium feature',
    required: false,
  }),
  template_id: Property.Number({
    displayName: 'Template ID',
    description: 'Template ID, optional',
    required: false,
  }),
};

export const createTask = {
  workspaceId: Property.Number({
    displayName: 'Workspace ID',
    description: 'Numeric ID of the workspace',
    required: true,
  }),
  projectId: Property.Number({
    displayName: 'Project ID',
    description: 'Numeric ID of the project',
    required: true,
  }),
  active: Property.Checkbox({
    displayName: 'Is Active?',
    description: 'Use false to mark the task as done',
    required: true,
    defaultValue: true,
  }),
  estimated_seconds: Property.Number({
    displayName: 'Estimated Seconds',
    description: 'Task estimation in seconds',
    required: false,
  }),
  external_reference: Property.ShortText({
    displayName: 'External Reference',
    description: 'Task external reference',
    required: false,
  }),
  name: Property.ShortText({
    displayName: 'Task Name',
    required: true,
  }),
  user_id: Property.Number({
    displayName: 'User ID',
    description: 'Creator ID, if omitted, will use requester user ID',
    required: false,
  }),
};

export const createTag = {
  workspaceId: Property.Number({
    displayName: 'Workspace ID',
    description: 'Numeric ID of the workspace.',
    required: true,
  }),
  name: Property.ShortText({
    displayName: 'Tag Name',
    required: true,
  }),
};

export const createTimeEntry = {
  workspaceId: Property.Number({
    displayName: 'Workspace ID',
    description: 'Numeric ID of the workspace.',
    required: true,
  }),
  billable: Property.Checkbox({
    displayName: 'Is Billable?',
    description:
      'Whether the time entry is marked as billable, optional, default false.',
    required: false,
  }),
  created_with: Property.ShortText({
    displayName: 'Created With',
    description: `Must be provided when creating a time entry and should identify the
      service/application used to create it.`,
    required: true,
    defaultValue: 'activepieces',
  }),
  description: Property.ShortText({
    displayName: 'Description',
    description: 'Time entry description, optional.',
    required: false,
  }),
  duration: Property.Number({
    displayName: 'Duration',
    description:
      'Time entry duration. For running entries should be negative, preferable -1',
    required: true,
  }),
  expense_ids: Property.Array({
    displayName: 'Expense IDs',
    description: 'Array of associated expense IDs.',
    required: false,
  }),
  pid: Property.Number({
    displayName: 'Project ID (legacy)',
    description: 'Project ID, legacy field.',
    required: false,
  }),
  project_id: Property.Number({
    displayName: 'Project ID',
    description: 'Project ID, optional.',
    required: false,
  }),
  shared_with_users: Property.Array({
    displayName: 'Shared With User IDs',
    description: 'List of user IDs to share this time entry with.',
    required: false,
  }),
  start: Property.DateTime({
    displayName: 'Start Time',
    description: 'Start time in UTC, required for creation.',
    required: true,
  }),
  start_date: Property.DateTime({
    displayName: 'Start Date',
    description: `If provided during creation, the date part will take precedence over the
      date part of "start".`,
    required: false,
  }),
  stop: Property.DateTime({
    displayName: 'Stop Time',
    description: `Stop time in UTC, can be omitted if it's still running or created with
        "duration". If "stop" and "duration" are provided, values must be consistent
        (start + duration == stop)`,
    required: false,
  }),
  tags: Property.Array({
    displayName: 'Tags',
    description: `Names of tags to add/remove. If name does not exist as tag, one will be created
      automatically.`,
    required: false,
  }),
  task_id: Property.Number({
    displayName: 'Task ID',
    description: 'Task ID, optional.',
    required: false,
  }),
  tid: Property.Number({
    displayName: 'Task ID (legacy)',
    required: false,
  }), // Task ID (legacy)
  uid: Property.Number({
    displayName: 'User ID (legacy)',
    description: 'Time Entry creator ID, legacy field',
    required: false,
  }), // User ID (legacy)
  user_id: Property.Number({
    displayName: 'User ID',
    description: 'Time Entry creator ID, if omitted will use the requester user ID',
    required: false,
  }),
  wid: Property.Number({
    displayName: 'Workspace ID (legacy)',
    required: false,
  }), // Workspace ID (legacy)
};

export const startTimeEntry = {
    workspaceId: Property.Number({
        displayName: 'Workspace ID',
        description: 'Numeric ID of the workspace.',
        required: true,
    }),
    timeEntryId: Property.Number({
        displayName: 'Time Entry ID',
        description: 'Numeric ID of the time entry.',
        required: true,
    }),
}

export const stopTimeEntry = {
    workspaceId: Property.Number({
        displayName: 'Workspace ID',
        description: 'Numeric ID of the workspace.',
        required: true,
    }),
    timeEntryId: Property.Number({
        displayName: 'Time Entry ID',
        description: 'Numeric ID of the time entry.',
        required: true,
    }),
};
