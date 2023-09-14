class Utils {

    loadFixtureData = fixturePath => require(`../fixtures/${fixturePath}`);

    /**
     * @description Load test users data
     * @returns {{JSON}}
     */
    getTestStringData = () => this.loadFixtureData('strings.json');
}

export default Utils;
