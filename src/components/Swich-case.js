/**
 * Switch, Case
 *
 * <Switch data={value}>
 *   <Case is="0">0</Case>
 *   <Case is="1" break>1</Case>
 *   <Case default>x</Case>
 * </Switch>
 */
import { Children, isValidElement } from 'react';
import { isFunction } from './utils';

export const Case = ({ render, children }) => {
    return isFunction(children) ? children() : isFunction(render) ? render() : children;
};


export const Switch = ({ data, children }) => {
    const blocks = [];
    let isMeet = false;
    const items = Children.toArray(children);

    for (let i = 0, len = items.length; i < len; i++) {
        const item = items[i];

        if (!isValidElement(item)) {
            continue;
        }
  
        const { type, props } = item;

        if (type !== Case) {
            continue;
        }

        const { is, default: isDefault, break: isBreak, render, children } = props;
  
        const h = () => (isFunction(children) ? children() : isFunction(render) ? render() : children);

        if (is === data) {
            const block = h();

            blocks.push(block);
            isMeet = true;
            if (isBreak) {
                break;
            }
        }
        if (isDefault && !isMeet) {
            const block = h();

            blocks.push(block);
            break;
        }
    }

    return blocks.length ? blocks : null;
};
