// 准备渲染组件。当遇到一些异步，或动态变化时，你可能希望用一个 loading 效果返回给用户。Prepare 组件用于实现该目的
/* <Prepare
    isReady={bool}
    loading={<Text>loading</Text>}
    render={() =>
        <Text>loaded</Text>
    }
/> */
import { memo } from 'react';
import { isFunction  } from './utils';

export const shouldUpdate = ({ isReady: preIsReady }, { isReady: nextIsReady }) => {
    
    const preNeedUpdate = isFunction(preIsReady) ? preIsReady() : preIsReady;
    const nextNeedUpdate = isFunction(nextIsReady) ? nextIsReady() : nextIsReady;

    return preNeedUpdate === nextNeedUpdate;
};

export const Prepare = memo(({ isReady, loading, render, children }) => {
    if (!isReady){
        return isFunction(loading) ? loading() : loading;
    }
    return isFunction(children) ? children() : isFunction(render) ? render() : children;
}, shouldUpdate);

