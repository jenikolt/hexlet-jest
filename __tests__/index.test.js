import reverse from '../src/index';
import { retNewArray } from '../src/components/funcForTest';

test ('reverse', () => {
	expect(reverse('hello')).toEqual('olleh');
	expect(reverse('')).toEqual('');
});

test ('array test', () => {
	expect(retNewArray([1,2,3])).not.toEqual([1,2,3,5]);
});

