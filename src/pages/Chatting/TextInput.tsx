import React from 'react';
import {useRecoilState,useRecoilValue,} from 'recoil';
import { textState } from '../../recoil/atom';

const TextInput = () => {
    const [text,setText] = useRecoilState(textState);

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange}/>
        </div>
    );
};

export default TextInput;