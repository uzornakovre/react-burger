interface IRequestHeaders {
  [name: string]: string;
}

interface IRequestOptions {
  headers: IRequestHeaders;
};

interface IProtectedRouteProps {
  [name: string]: any;
}