## logic-components

> react版本的逻辑控制组件，让代码更符合语义化，参照[nautil](https://www.tangshuang.net/7273.html)代码实现。

### Static

静态组件，当shouldUpdate变化的时候才会更新；

```js
 import { Static } from 'logic-components';

 <Static
        shouldUpdate={bool}
    >
    <Text>{Date.now()}</Text>
 </Static>
    # or
 <Static
    shouldUpdate={bool}
    render={() => <Text>{Date.now()}</Text>}
 />
```

### Each
```js
import { Each } from 'logic-components';

<Each
	data={data}
	render={(value, key) =>
   	 <Text>{key}: {value}</Text>
	} 
 />
```
### For

用于For循环

```js
import { For } from 'logic-components';

<For
	data={}
	render={i =>
        <Text>{i}</Text>
	}
/>
```

### Prepare
准备渲染组件。当遇到一些异步，或动态变化时，你可能希望用一个 loading 效果返回给用户。Prepare 组件用于实现该目的;
```js
import { Prepare } from 'logic-components';

<Prepare
	isReady={bool}
	loading={<Text>loading</Text>}
    render={() =><Text>loaded</Text>}
/>
```

### Show
通过 is 控制其显示或隐藏
```js
import { Show } from 'logic-components';

<Show is={bool}>
    <Text>show me</Text>
</Show>
# or
<Show is={bool} render={() => <Text>show me</Text>} />
```

### Swich-case
```js
import { Switch,Case } from 'logic-components';

<Switch data={value}>
    <Case is="0">0</Case>
	<Case is="1">1</Case>
	<Case is="1" break>1</Case>
	<Case default>x</Case>
</Switch>
```
