/*
    <For
        data={}
        render={i =>
            <Text>{i}</Text>
        }
    />
*/
import { isArray } from './utils';

export const For  = ({ data = [], render }) => {
    if (!isArray(data)){
        return null;
    }
    return data.map((row, index) => {
        return render(row, index);
    });
};
