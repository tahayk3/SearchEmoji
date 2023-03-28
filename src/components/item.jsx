const Item = ({ title, emoji }) => {
    return (
        <article>
            <p>{title}</p>
            <h4>{emoji}</h4>
        </article>
    );
};

export default Item;