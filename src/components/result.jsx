import {searchEmoji} from '../helpers/searchEmoji'
import Item from './item';

const Result = ({valueEmoji}) =>{
    const arrayEmojis = searchEmoji(valueEmoji);
    console.log(arrayEmojis);
    return(
        <seccion>
            {
                arrayEmojis && arrayEmojis.map( item => (
                    <Item
                    key = {item.title}
                    title = {item.title}
                    emoji = {item.symbol}
                    />
                ))
            }
        </seccion>
    );
};

export default Result;