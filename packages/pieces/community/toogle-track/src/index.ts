import { createPiece } from '@activepieces/pieces-framework';
import { createClient } from './lib/actions/create-client';
import { createProject } from './lib/actions/create-project';
import { createTag } from './lib/actions/create-tag';
import { createTask } from './lib/actions/create-task';
import { createTimeEntry } from './lib/actions/create-time-entry';
import { findClient } from './lib/actions/find-client';
import { findProject } from './lib/actions/find-project';
import { findTag } from './lib/actions/find-tag';
import { findTask } from './lib/actions/find-task';
import { findTimeEntry } from './lib/actions/find-time-entry';
import { findUser } from './lib/actions/find-user';
import { startTimeEntry } from './lib/actions/start-time-entry';
import { stopTimeEntry } from './lib/actions/stop-time-entry';
import { tooglTrackAuth } from './lib/common';
import { newClient } from './lib/triggers/new-client';
import { newProject } from './lib/triggers/new-project';
import { newTag } from './lib/triggers/new-tag';
import { newTask } from './lib/triggers/new-task';
import { newTimeEntry } from './lib/triggers/new-time-entry';
import { newTimeEntryStarted } from './lib/triggers/new-time-entry-started';
import { newWorkspace } from './lib/triggers/new-workspace';

export const tooglTrack = createPiece({
  displayName: 'Toogl Track',
  auth: tooglTrackAuth,
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.activepieces.com/pieces/toogle-track.png',
  authors: ['LuizDMM'],
  actions: [
    createClient,
    createProject,
    createTask,
    createTag,
    createTimeEntry,
    startTimeEntry,
    stopTimeEntry,
    findUser, // TODO
    findProject, // TODO
    findTask, // TODO
    findClient, // TODO
    findTag, // TODO
    findTimeEntry, // TODO
  ],
  triggers: [
    newClient, // TODO
    newWorkspace, // TODO
    newProject, // TODO
    newTask, // TODO
    newTimeEntry, // TODO
    newTimeEntryStarted, // TODO
    newTag, // TODO
  ],
});
