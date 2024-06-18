export type AsyncDelay = (delayMillis: number) => Promise<any>;

export type CheckAndConvertDebugObject = (
  debug: object,
  debugMaxCount: number
) => object;

export type CheckUnsupportedParams = ({
  params,
  defaultParams,
  onUnsupportedParams,
  logger,
}: {
  params: object;
  defaultParams: object;
  onUnsupportedParams?: ({
    unsupportedParams,
  }: {
    unsupportedParams: object;
  }) => void;
  logger: PackageLoggerInstance;
}) => {};

export type CountObjectProperties = (
  obj: object,
  { maxCount }: { maxCount: number }
) => number;

export type GetDate = ({ minusDays }: { minusDays: number }) => string;

export type IsObject = (obj: object) => boolean;

export type PackageLoggerInstance = {
  log: (this: void, ...data: any[]) => void | undefined;
  error: (this: void, ...data: any[]) => void | undefined;
  warn: (this: void, ...data: any[]) => void | undefined;
};

export type PackageLogger = ({
  enableLogging,
  logPrefix,
}?: {
  enableLogging?: boolean;
  logPrefix?: string;
}) => PackageLoggerInstance;

export type SafeStringify = (source: object) => string;
