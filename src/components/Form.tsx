import { FC, useState, ChangeEventHandler, FormEventHandler } from 'react';
import Button from './Button';

interface Props {}

const Form: FC<Props> = (): JSX.Element => {
    // const [value, setValue] = useState<string>();
    const [value, setValue] = useState("");
    const [file, setFile] = useState<File>();
    
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(value);
    };

    return (
        <form onSubmit={handleSubmit} className='flex-col'>
            <input type="file" className='border padding-10' value={value} onChange={({ target }) => {
                const {files} = target;
                if(files) {
                    const file = files[0];
                    setFile(file);
                }
            }} />
            <input type="text" className='border padding-10' value={value} onChange={handleOnChange} />
            <Button value='Submit' />
        </form>
    );
}

export default Form;