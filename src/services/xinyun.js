import request from '../utils/request/request';
// import { getPid, getStoreId } from '../utils/env';

export const keyOrMenu = (pid, storeId) =>
    request('/api3/interlayer/base/transfer/keyOrMenu', {
        method: 'POST',
        data: { pid, storeId },
    });

