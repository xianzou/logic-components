// 通过 is 控制其显示或隐藏
/*
    <Show is={bool}>
    <Text>show me</Text>
    </Show>
*/

import { useEffect } from 'react';
import { isFunction } from './utils';

export const Show = ({ is, children, render }) => {
    
    useEffect(() => {
        const needUpdate = isFunction(is) ? is() : is;

        if (!needUpdate){
            return null;
        }
    }, [is]);

    return isFunction(children) ? children() : isFunction(render) ? render() : children;
};

