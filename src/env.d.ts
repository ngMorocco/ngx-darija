interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  [key: string]: string;
  //eslint-disable-next-line @typescript-eslint/naming-convention
  readonly NG_APP_ENV: string;
}

