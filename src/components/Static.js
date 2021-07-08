// 静态渲染组件。内部必须是一个函数。接收 shouldUpdate 属性。
/*
    <Static
        shouldUpdate={bool}
    >
        <Text>{Date.now()}</Text>
    </Static>
 */
// 只有当 shouldUpdate 为 true 时，内部才会被更新，否则永远都不会被更新。在一些特定场景下的交互非常有用
import { memo } from 'react';
import { isFunction } from './utils';

export const shouldUpdate = ({ shouldUpdate: preShouldUpdate }, { shouldUpdate: nextShouldUpdate }) => {
    
    const preNeedUpdate = isFunction(preShouldUpdate) ? preShouldUpdate() : preShouldUpdate;
    const nextNeedUpdate = isFunction(nextShouldUpdate) ? nextShouldUpdate() : nextShouldUpdate;

    return preNeedUpdate === nextNeedUpdate;
};


export const Static = memo(({ render, children }) => {
    
    return isFunction(children) ? children() : isFunction(render) ? render() : children;
}, shouldUpdate);

