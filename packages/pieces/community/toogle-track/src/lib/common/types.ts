interface authenticationParams {
  auth: {
    username: string;
    password: string;
  };
}

export interface createClientParams extends authenticationParams {
  workspaceId: number;
  clientData: {
    external_reference?: string;
    name: string;
    notes?: string;
  };
}

export interface createProjectParams extends authenticationParams {
  workspaceId: number;
  projectData: {
    active: boolean;
    auto_estimates?: boolean;
    billable?: boolean;
    cid?: number; // Client ID, legacy
    client_id?: number; // Client ID
    client_name?: string;
    color: string;
    currency?: string;
    end_date?: string;
    estimated_hours?: number;
    external_reference?: string;
    fixed_fee?: number;
    is_private: boolean;
    is_shared: boolean;
    name: string;
    rate?: number;
    rate_change_mode?: 'start-today' | 'override-current' | 'override-all';
    recurring?: boolean;
    recurring_parameters?: object;
    start_date: string;
    template?: boolean;
    template_id?: number;
  };
}

export interface createTaskParams extends authenticationParams {
  workspaceId: number;
  projectId: number;
  taskData: {
    active: boolean;
    estimated_seconds?: number;
    external_reference?: string;
    name: string;
    user_id?: number;
  };
}

export interface createTagParams extends authenticationParams {
  workspaceId: number;
  name: string;
}

export interface createTimeEntryParams extends authenticationParams {
  workspaceId: number;
  timeEntryData: {
    billable?: boolean;
    created_with: string;
    description?: string;
    duration: number;
    expense_ids?: number[];
    pid?: number; // Project ID (Legacy)
    project_id?: number;
    shared_with_user_ids?: number[];
    start: string;
    start_date?: string;
    stop?: string;
    tags?: string[];
    task_id?: number;
    tid?: number; // Task ID (legacy)
    uid?: number; // User ID (legacy)
    user_id?: number;
    wid?: number; // Workspace ID (legacy)
    workspace_id: number;
  };
}

export interface startTimeEntryParams extends authenticationParams {
  workspaceId: number;
  timeEntryId: number;
}

export interface stopTimeEntryParams extends authenticationParams {
  workspaceId: number;
  timeEntryId: number;
}

export interface findUserParams extends authenticationParams {
  organizationId: number;
  workspaceId: number;
  name?: string;
  search?: string;
}
