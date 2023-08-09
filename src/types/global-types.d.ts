interface IRequestOptions {
  headers: {
    [name: string]: string;
  };
};

interface IKeyboardEvent {
  key: string;
}

interface IProtectedRouteProps {
  [name: string]: any;
}