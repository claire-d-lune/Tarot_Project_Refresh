import React from "react";
import Navbar from "./Navbar";

const Library = () => {
    return( 
        <div class="text-center">
            <Navbar/>
            <p className="font-sans ...">The quick brown fox ...</p>
            <p className="font-serif ...">The quick brown fox ...</p>
            <p className="font-mono ...">The quick brown fox ...</p>
        
       
            <h1>Hello from Library</h1>
        
        </div>
    )
}

export default Library