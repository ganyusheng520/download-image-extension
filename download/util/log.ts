const LOG_BACKGROUND = '#111111DD';
const LOG_PREFIX_COLOR = '#E4D00A';
const LOG_SUFFIX = {
  INFO: '#26D907',
  WARNING: '#E4D00A',
  ERROR: '#D1191C',
};

function log(suffix: keyof typeof LOG_SUFFIX, ...data: any[]) {
  /* eslint-disable max-len */
  /* eslint-disable no-console */
  const func = suffix === 'ERROR' ? console.error
    : suffix === 'WARNING'  ? console.warn : console.log;
  /* eslint-enable no-console */
  func(
    `%cDebugLog%c${suffix}`,
    `color: ${LOG_PREFIX_COLOR}; background: ${LOG_BACKGROUND}; padding: 0.25rem; border-radius: 0.25rem;`,
    `color: ${LOG_SUFFIX[suffix]}; background: ${LOG_BACKGROUND}; padding: 0.25rem; border-radius: 0.25rem; margin-left: 0.25rem;`,
    ...data,
  );
  /* eslint-enable max-len */
}

function info (...data: any[]) {
  log('INFO', ...data);
}
function warn (...data: any[]) {
  log('WARNING', ...data);
}
function error (...data: any[]) {
  log('ERROR', ...data);
}

const Log = {
  info,
  warn,
  error,
};

export default Log;
