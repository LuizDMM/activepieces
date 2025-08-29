import {
  AuthenticationType,
  httpClient,
  HttpMethod,
} from '@activepieces/pieces-common';
import { PieceAuth } from '@activepieces/pieces-framework';
import {
  createClientParams,
  createProjectParams,
  createTagParams,
  createTaskParams,
  createTimeEntryParams,
  findUserParams,
  startTimeEntryParams,
  stopTimeEntryParams,
} from './types';

import * as properties from './properties';
import * as schemas from './schemas';

export const tooglTrackAuth = PieceAuth.BasicAuth({
  description: 'Use an email and Password or your api key.',
  required: true,
  username: {
    displayName: 'Email or API Key',
    description: 'Enter your email or API key.',
  },
  password: {
    displayName: 'Password',
    description:
      'Enter your password or the value "api_token" if you\'re using your API key.',
  },
});

export const tooglTrackCommon = {
  // API Details
  baseUrl: 'https://api.track.toggl.com/api',
  baseHeaders: {
    'Content-type': 'application/json',
  },
  endpoints: {
    createClient: (workspaceId: number) =>
      `${tooglTrackCommon.baseUrl}/v9/workspaces/${workspaceId}/clients`,
    createProject: (workspaceId: number) =>
      `${tooglTrackCommon.baseUrl}/v9/workspaces/${workspaceId}/projects`,
    createTask: (workspaceId: number, projectId: number) =>
      `${tooglTrackCommon.baseUrl}/v9/workspaces/${workspaceId}/projects/${projectId}/tasks`,
    createTag: (workspaceId: number) =>
      `${tooglTrackCommon.baseUrl}/v9/workspaces/${workspaceId}/tags`,
    createTimeEntry: (workspaceId: number) =>
      `${tooglTrackCommon.baseUrl}/v9/workspaces/${workspaceId}/time_entries`,
    startTimeEntry: (workspaceId: number, timeEntryId: number) =>
      `${tooglTrackCommon.baseUrl}/v9/workspaces/${workspaceId}/time_entries/${timeEntryId}`,
    stopTimeEntry: (workspaceId: number, timeEntryId: number) =>
      `${tooglTrackCommon.baseUrl}/v9/workspaces/${workspaceId}/time_entries/${timeEntryId}/stop`,
    findUser: (organizationId: number, workspaceId: number) =>
      `${tooglTrackCommon.baseUrl}/v9/organizations/${organizationId}/workspaces/${workspaceId}/workspace_users`,
  },

  // Properties
  createClientProperties: properties.createClient,
  createProjectProperties: properties.createProject,
  createTaskProperties: properties.createTask,
  createTagProperties: properties.createTag,
  createTimeEntryProperties: properties.createTimeEntry,
  startTimeEntryProperties: properties.startTimeEntry,
  stopTimeEntryProperties: properties.stopTimeEntry,

  // Zod Schemas
  createProjectSchema: schemas.createProject,
  createTaskSchema: schemas.createTask,
  createTagSchema: schemas.createTag,
  createTimeEntrySchema: schemas.createTimeEntry,
  startTimeEntrySchema: schemas.startTimeEntry,
  stopTimeEntrySchema: schemas.stopTimeEntry,

  // Methods
  createClient: async ({
    auth,
    workspaceId,
    clientData,
  }: createClientParams) => {
    return await httpClient.sendRequest({
      method: HttpMethod.POST,
      url: tooglTrackCommon.endpoints.createClient(workspaceId),
      headers: {
        ...tooglTrackCommon.baseHeaders,
      },
      authentication: {
        type: AuthenticationType.BASIC,
        username: auth.username,
        password: auth.password,
      },
      body: clientData,
    });
  },
  createProject: async ({
    auth,
    workspaceId,
    projectData,
  }: createProjectParams) => {
    return await httpClient.sendRequest({
      method: HttpMethod.POST,
      url: tooglTrackCommon.endpoints.createProject(workspaceId),
      headers: {
        ...tooglTrackCommon.baseHeaders,
      },
      authentication: {
        type: AuthenticationType.BASIC,
        username: auth.username,
        password: auth.password,
      },
      body: projectData,
    });
  },
  createTask: async ({
    auth,
    workspaceId,
    projectId,
    taskData,
  }: createTaskParams) => {
    return await httpClient.sendRequest({
      method: HttpMethod.POST,
      url: tooglTrackCommon.endpoints.createTask(workspaceId, projectId),
      headers: {
        ...tooglTrackCommon.baseHeaders,
      },
      authentication: {
        type: AuthenticationType.BASIC,
        username: auth.username,
        password: auth.password,
      },
      body: taskData,
    });
  },
  createTag: async ({ auth, workspaceId, name }: createTagParams) => {
    return await httpClient.sendRequest({
      method: HttpMethod.POST,
      url: tooglTrackCommon.endpoints.createTag(workspaceId),
      headers: {
        ...tooglTrackCommon.baseHeaders,
      },
      authentication: {
        type: AuthenticationType.BASIC,
        username: auth.username,
        password: auth.password,
      },
      body: { name },
    });
  },
  createTimeEntry: async ({
    auth,
    workspaceId,
    timeEntryData,
  }: createTimeEntryParams) => {
    return await httpClient.sendRequest({
      method: HttpMethod.POST,
      url: tooglTrackCommon.endpoints.createTimeEntry(workspaceId),
      headers: {
        ...tooglTrackCommon.baseHeaders,
      },
      authentication: {
        type: AuthenticationType.BASIC,
        username: auth.username,
        password: auth.password,
      },
      body: timeEntryData,
    });
  },
  startTimeEntry: async ({
    auth,
    workspaceId,
    timeEntryId,
  }: startTimeEntryParams) => {
    return await httpClient.sendRequest({
      method: HttpMethod.PUT,
      url: tooglTrackCommon.endpoints.startTimeEntry(workspaceId, timeEntryId),
      headers: {
        ...tooglTrackCommon.baseHeaders,
      },
      authentication: {
        type: AuthenticationType.BASIC,
        username: auth.username,
        password: auth.password,
      },
      body: { start: new Date().toISOString() },
    });
  },
  stopTimeEntry: async ({
    auth,
    workspaceId,
    timeEntryId,
  }: stopTimeEntryParams) => {
    return await httpClient.sendRequest({
      method: HttpMethod.PATCH,
      url: tooglTrackCommon.endpoints.stopTimeEntry(workspaceId, timeEntryId),
      headers: {
        ...tooglTrackCommon.baseHeaders,
      },
      authentication: {
        type: AuthenticationType.BASIC,
        username: auth.username,
        password: auth.password,
      },
    });
  },
  findUser: async ({ auth, organizationId, workspaceId, name, search }: findUserParams) => {
    const queryParams: Record<string, string> = {};
    if (name !== undefined) queryParams['name'] = name;
    if (search !== undefined) queryParams['search'] = search;
    return await httpClient.sendRequest({
      method: HttpMethod.GET,
      url: tooglTrackCommon.endpoints.findUser(organizationId, workspaceId),
      headers: {
        ...tooglTrackCommon.baseHeaders,
      },
      authentication: {
        type: AuthenticationType.BASIC,
        username: auth.username,
        password: auth.password,
      },
      queryParams
    });
  },
};
