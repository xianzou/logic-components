/*
    <Each
        data={data}
        render={(value, key) =>
        <Text>{key}: {value}</Text>
    } />
*/

export const Each = props => {
    const { data, render } = props;
    const blocks = [];

    for (const { value, key, ...otherKey } of data){
        const block = render(value, key, ...otherKey);

        blocks.push(block);
    }
    return blocks;
};

