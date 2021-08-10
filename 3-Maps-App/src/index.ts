import {User} from './User'
import {Company} from './Company'
import {CustomMap} from './CustomMap'

declare var google: any;

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addUserMarker(user);


