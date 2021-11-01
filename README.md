## @xianzou/logic-components

> react版本的逻辑控制组件，让代码更符合语义化，参照[nautil](https://www.tangshuang.net/7273.html)代码实现。

`render方法`和`children`说明：使用`render方法`传入组件或者`jsx`第一次代码不会执行，而直接通过`children`书写组件或者`jsx`第一次会执行该代码；

### Static

静态组件，当shouldUpdate变化的时候才会更新；

```js
 import { Static } from '@xianzou/logic-components';

 <Static
        shouldUpdate={bool}
    >
    <div>
       {Date.now()}
    </div>
 </Static>
    # or
 <Static
    shouldUpdate={bool}
    render={() => <div>{Date.now()}</div>}
 />
```

### Each
```js
import { Each } from '@xianzou/logic-components';

<Each
	data={data}
	render={(value, key) =>
   	 <div>{key}: {value}</div>
	} 
 />
```
### For

用于For循环

```js
import { For } from '@xianzou/logic-components';

<For
	data={}
	render={i =>
        <div>{i}</div>
	}
/>
```

### Prepare
准备渲染组件。当遇到一些异步，或动态变化时，你可能希望用一个 loading 效果返回给用户。Prepare 组件用于实现该目的;
```js
import { Prepare } from '@xianzou/logic-components';

<Prepare
	isReady={bool}
	loading={<div>loading</div>}
    render={() =><div>loaded</div>}
/>
```

### Show
通过 is 控制其显示或隐藏
```js
import { Show } from '@xianzou/logic-components';

<Show is={bool}>
    <div>show me</div>
</Show>
# or
<Show is={bool} render={() => <div>show me</div>} />
```

### Swich-case
```js
import { Switch,Case } from '@xianzou/logic-components';

<Switch data={value}>
    <Case is="0">0</Case>
	<Case is="1">1</Case>
	<Case is="1" break>1</Case>
	<Case default>x</Case>
</Switch>
```
### IF  Else

用于条件控制组件显示隐藏

```jsx
import {  If, ElseIf, Else } from '@xianzou/logic-components';

  <If is={cond1} render={fn1}>
   <ElseIf is={cond2} render={fn2} />
   <Else render={fn0} />
  </If>
 
  <If is={cond1}>
    <Cond1 />
    <ElseIf is={cond2}>
    <Cond2 />
    <Else />
    <Rest />
  </If>
```

### Img

图片加载异常同时显示alt文字说明和默认图片加载异常背景
图片默认最小高度和宽度为48px 请务必自行根据项目设置图片高宽
```js
import { Img } from '@xianzou/logic-components';

<Img alt="图片描述，文字加载失败显示文字" src="图片路径" className="图片类名" ...{otherProps} />
```