enum State {
  loading,
  done,
  error,
}

type GlobalApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
}

type UserApiStatus1 = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
}

type UserApiStatus2 = {
  getUser: GlobalApiStatus['getUser'];
  paginateUsers: GlobalApiStatus['paginateUsers'];
  banUser: GlobalApiStatus['banUser'];
}

type UserApiStatus3 = {
  [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k]
}

type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'paginateUsers' | 'banUser'>;
type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;

type AllKeys = keyof GlobalApiStatus;
const key: AllKeys = 'getUser';

type KeyOfUserApiStatus1 = {
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}

type KeyOfUserApiStatus2 = {
  [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
}

type KeyOfUserApiStatus3 = {
  [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
}

interface LoadingStatus {
  type: 'loading';
  data: string[];
}

interface ErrorStatus {
  type: 'error';
  message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;
type StatusType = FetchStatus['type'];