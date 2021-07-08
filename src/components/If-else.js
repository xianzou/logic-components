/**
 * If, ElseIf, Else
 *
 * <If is={cond1} render={fn1}>
 *  <ElseIf is={cond2} render={fn2} />
 *  <Else render={fn0} />
 * </If>
 *
 * <If is={cond1}>
 *   <Cond1 />
 *   <ElseIf is={cond2}>
 *   <Cond2 />
 *   <Else />
 *   <Rest />
 * </If>
 */
import { Children, createElement, Fragment } from 'react';
import { isFunction } from './utils';

export const Else  = ({ render, children }) => {
    return isFunction(children) ? children() : isFunction(render) ? render() : children;
};

export const ElseIf = ({ is, render, children }) => {
    const isShow = isFunction(is) ? is() : is;

    if (isShow){
        return isFunction(children) ? children() : isFunction(render) ? render() : children;
    }
    return null;
};

export const If = ({ is, render, children }) => {
    const isShow = isFunction(is) ? is() : is;

    if (isFunction(children)) {
        return isShow ? children() : null;
    }
    if (isShow && isFunction(render)) {
        return render();
    }
    let block = {
        isShow,
        render,
        elements: [],
    };
    const create = () => {
        if (isFunction(block.render)) {
            return createElement(Fragment, {}, ...[].concat(block.render()));
        } else if (block.elements.length) {
            return createElement(Fragment, {}, ...block.elements);
        } else {
            return null;
        }
    };
    const items = Children.toArray(children);

    for (let i = 0, len = items.length; i < len; i++) {
        const item = items[i];
        const { type } = item;
  
        if (type === Else || type === ElseIf) {
            if (block.isShow) {
                return create();
            }
  
            const { props } = item;
            const { is, render } = props;

            block = {
                isShow: type === Else ? true : isFunction(is) ? is() : is,
                render,
                elements: [],
            };
        } else {
            block.elements.push(item);
        }
    }
  
    if (block.isShow) {
        return create();
    }
  
    return null;
};
