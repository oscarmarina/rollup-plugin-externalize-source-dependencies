export default externalizeSourceDependencies;
/**
 * https://rollupjs.org/plugin-development/#resolveid
 * @param {Array<string>} sources
 */
declare function externalizeSourceDependencies(sources: Array<string>): {
    name: string;
    /**
     * @param {string} source
     */
    resolveId(source: string): {
        id: string;
        external: boolean;
    };
};
