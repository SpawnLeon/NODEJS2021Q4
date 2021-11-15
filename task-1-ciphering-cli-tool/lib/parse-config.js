export default (config) => {
  const result = config.match(/(C[0|1])*(R[0|1])*(A(?!\d))*/g);
  const fixedResult = result.filter((el) => el.length);

  if (fixedResult.length === 0) {
    console.error('Not valid configuration.');
    process.exit(-1);
  }

  return fixedResult;
};
