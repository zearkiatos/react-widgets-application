import React, { useState, useEffect } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        console.log('I am a useEffect hook');
    }, [term]);
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        type="text"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;