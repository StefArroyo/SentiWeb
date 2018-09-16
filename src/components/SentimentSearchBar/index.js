import React from 'react';
import SearchBar from 'material-ui-search-bar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const SentimentSearchBar = (props) => {

       const { _onRequestSearch, _onChange } = props

       return (
           <div>
               <MuiThemeProvider>
                   <SearchBar
                        onChange={(value) => _onChange(value)}
                        onRequestSearch={(value) => _onRequestSearch(value)}
                    />
                </MuiThemeProvider>
            </div>
       )
}

export { SentimentSearchBar }
