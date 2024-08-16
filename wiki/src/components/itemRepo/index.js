import React from "react";
import { ItemContainer } from "./styles.js";

function ItemRepo({ repo, handleRemoveRepo }) {

    const handleRemove = (event) => {
        event.preventDefault();
        handleRemoveRepo(repo.id);
    }

    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br/>
            <a href="#" onClick={handleRemove} rel="noreferrer" className="remover" aria-label={`Remover repositório ${repo.name}`}>Remover</a>
            <hr />
        </ItemContainer>
    );
}

export default ItemRepo;

