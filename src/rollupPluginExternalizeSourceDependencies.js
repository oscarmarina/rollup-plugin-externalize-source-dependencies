/**
 * https://rollupjs.org/plugin-development/#resolveid
 * @param {Array<string>} sources
 */
const externalizeSourceDependencies = (sources) => ({
  name: 'externalize-source-dependencies',
  /**
   * @param {string} source
   */
  resolveId(source) {
    if (sources.includes(source)) {
      return {
        id: source,
        external: true,
      };
    }
    return null;
  },
});

export default externalizeSourceDependencies;
