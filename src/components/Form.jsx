import { useState } from "react";

const Form = ({setValueEmoji}) =>{
    const [value, setValue] = useState('');

    function handleSearch(e){
        e.preventDefault();
        setValueEmoji(value);
        console.log(value);
    }

    return(
        <section>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="search"
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </section>
    );
};

export default Form;