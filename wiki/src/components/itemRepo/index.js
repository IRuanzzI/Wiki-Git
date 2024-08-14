import React from "react";
import { ItemContainer } from "./styles.js";


function itemRepo() {
    return (
        <ItemContainer>
            <h3>Index</h3>
            <p>Dio</p>
            <a href="#">Ver repositório</a><br/>
            <a href="#" className="remover">Remover</a>
            <hr></hr>
        </ItemContainer>
    )
}

export default itemRepo;