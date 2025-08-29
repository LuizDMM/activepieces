import z from 'zod';

export const createProject = {
  workspaceId: z.number().int().positive(),
  active: z.boolean(),
  auto_estimates: z.boolean().optional(),
  billable: z.boolean().optional(),
  cid: z.number().int().positive().optional(),
  client_id: z.number().int().positive().optional(),
  color: z.string(),
  currency: z.string().optional(),
  end_date: z.string().datetime({ offset: true }).optional(),
  estimated_hours: z.number().int().positive().optional(),
  external_reference: z.string().optional(),
  fixed_fee: z.number().positive().optional(),
  is_private: z.boolean(),
  is_shared: z.boolean(),
  name: z.string(),
  rate: z.number().positive().optional(),
  rate_change_mode: z
    .enum(['start-today', 'override-current', 'override-all'])
    .optional(),
  recurring: z.boolean().optional(),
  recurring_parameters: z.object({}).optional(),
  start_date: z.string().datetime({ offset: true }).optional(),
  template: z.boolean().optional(),
  template_id: z.number().int().positive().optional(),
};

export const createTask = {
  workspaceId: z.number().int().positive(),
  projectId: z.number().int().positive(),
  active: z.boolean(),
  estimated_seconds: z.number().int().positive().optional(),
  external_reference: z.string().optional(),
  name: z.string(),
  user_id: z.number().int().positive().optional(),
};

export const createTag = {
  workspaceId: z.number().int().positive(),
  name: z.string(),
};

export const createTimeEntry = {
  workspaceId: z.number().int().positive(),
  billable: z.boolean().optional(),
  created_with: z.string(),
  description: z.string().optional(),
  duration: z.number(),
  expense_ids: z.array(z.number().int().positive()).optional(),
  pid: z.number().int().positive().optional(),
  project_id: z.number().int().positive().optional(),
  shared_with_users: z.array(z.number().int().positive()).optional(),
  start: z.string().datetime({ offset: false }),
  start_date: z.string().datetime({ offset: true }).optional(),
  stop: z.string().datetime({ offset: false }).optional(),
  tags: z.array(z.string()).optional(),
  task_id: z.number().int().positive().optional(),
  tid: z.number().int().positive().optional(),
  uid: z.number().int().positive().optional(),
  user_id: z.number().int().positive().optional(),
  wid: z.number().int().positive().optional(),
};

export const startTimeEntry = {
  workspaceId: z.number().int().positive(),
  timeEntryId: z.number().int().positive(),
};

export const stopTimeEntry = {
  workspaceId: z.number().int().positive(),
  timeEntryId: z.number().int().positive(),
};
