import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const {
    getAllUsers,
} = require('../components/Scheduler');


describe('Getting all Users from the database', function() {

    it('should return an array of objects', () => {

        const result = getAllUsers; 
        const expectedObject = Object;

        // Assertion library
        expect(result).toContain(expectedObject);
    });
});





