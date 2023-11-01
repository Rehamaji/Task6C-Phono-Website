import './SearchBar.css';
import react from 'react';

function SearchBar() {
    return (
        <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-enterpriseAutoComplete"
             aria-expanded="false"
             className="react-autosuggest__container"><input type="text" autoComplete="off" aria-autocomplete="list"
                                                             aria-controls="react-autowhatever-enterpriseAutoComplete"
                                                             className="react-autosuggest__input"
                                                             placeholder="Search Coursera for Syrian Youth Assembly|Global"
                                                             aria-label="Search catalog" value=""/>
            <div id="react-autowhatever-enterpriseAutoComplete" role="listbox"
                 className="react-autosuggest__suggestions-container">
            </div>
        </div>
    )
}

export default SearchBar;


