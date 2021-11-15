
import { ObjectUtils } from 'blazing';
import {setPrivilegesEnum} from 'voila2-runtime-ng';

import {DemoPrivileges} from '../pages/voila2sample-ms-demo-fe/privilege.enum';


export function buildPrivilegesEnum() {
  const privileges = ObjectUtils.merge(
    DemoPrivileges,
  )
  setPrivilegesEnum(privileges);
}
