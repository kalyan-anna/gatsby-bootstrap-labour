import React, { useState } from 'react';
import ReactAutosuggest from 'react-autosuggest';

interface AutoSuggestProps {
  input: {
    name: string;
    value: string;
  }[];
  placeholder: string;
  name: string;
}

export const AutoSuggest = React.forwardRef<any, AutoSuggestProps>(
  ({ input, placeholder, name }, ref) => {
    const [{ suggestions, value }, setSuggestionsAndValue] = useState({
      suggestions: [],
      value: '',
    });

    const renderSuggestion = (suggestion: any) => <div>{suggestion.name}</div>;

    const getSuggestions = (value: string) => {
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;

      return inputLength === 0
        ? []
        : input.filter(
            (lang) =>
              lang.name.toLowerCase().slice(0, inputLength) === inputValue
          );
    };

    const onSuggestionsFetchRequested = ({ value }) => {
      setSuggestionsAndValue((prev: any) => ({
        ...prev,
        suggestions: getSuggestions(value),
      }));
    };

    const onSuggestionsClearRequested = () => {
      setSuggestionsAndValue((prev: any) => ({ ...prev, suggestions: [] }));
    };

    const onChange = (event: any, { newValue }) => {
      setSuggestionsAndValue((prev: any) => ({ ...prev, value: newValue }));
    };

    const getSuggestionValue = (suggestion: any) => suggestion.name;

    const inputProps = {
      placeholder,
      value,
      onChange,
    };

    const renderInputComponent = (inputProps: any) => (
      <div>
        <input {...inputProps} className="form-control" name={name} />
      </div>
    );

    return (
      <ReactAutosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        ref={ref}
        renderInputComponent={renderInputComponent}
      />
    );
  }
);
