interface IRequestHeaders {
  [name: string]: string;
}

interface IRequestOptions {
  headers: IRequestHeaders;
};

interface IKeyboardEvent {
  key: string;
}

interface IProtectedRouteProps {
  [name: string]: any;
}