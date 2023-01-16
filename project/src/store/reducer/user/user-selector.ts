import { User } from '../../../types/user';
import { State } from '../../../types/state';
import { Namespace, AuthorizationStatus } from '../../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[Namespace.User].authorizationStatus;
export const getUser = (state: State): User | null => state[Namespace.User].user;
