// 通过 is 控制其显示或隐藏
/*
    <Show is={bool}>
    <Text>show me</Text>
    </Show>
*/

import { isFunction } from './utils';

export const Show = ({ is, children, render }) => {
    
    const needUpdate = isFunction(is) ? is() : is;
    
    if(!needUpdate){
        return null;
    }
    return isFunction(children) ? children() : isFunction(render) ? render() : children;
};

