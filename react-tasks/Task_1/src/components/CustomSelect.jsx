import React, { useEffect, useState } from 'react';

const CustomSelect = ({
  asyncLoadOptions,
  isMulti = false,
  onChange,
  placeholder = 'Select...',
  customStyles = {},
  enableSearch = false,
}) => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(isMulti ? [] : null);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  // Load options asynchronously
  useEffect(() => {
    asyncLoadOptions().then((loadedOptions) => {
      setOptions(loadedOptions);
      setLoading(false);
    });
  }, [asyncLoadOptions]);

  const handleOptionClick = (option) => {
    if (isMulti) {
      if (selectedOptions.some((selected) => selected.value === option.value)) {
        setSelectedOptions(selectedOptions.filter((selected) => selected.value !== option.value));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      setSelectedOptions(option);
    }
    onChange(isMulti ? [...selectedOptions, option] : option);
  };

  const renderSelectedOptions = () => {
    if (isMulti) {
      if (selectedOptions.length === 0) return <span>{placeholder}</span>;
      return (
        <div>
          <strong>Selected Skills: </strong>
          {selectedOptions.map((option) => option.label).join(', ')}
        </div>
      );
    }
    if (!selectedOptions) return <span>{placeholder}</span>;
    return (
      <div>
        <strong>Selected Position: </strong> {selectedOptions.label}
      </div>
    );
  };

  // Filter options based on search input
  const filterOptions = () => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const filteredOptions = filterOptions();

  return (
    <div style={customStyles.container}>
      <div style={customStyles.selected}>{renderSelectedOptions()}</div>
      {enableSearch && (
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          style={customStyles.search}
        />
      )}
      <div style={customStyles.dropdown}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleOptionClick(option)}
                  style={customStyles.option}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <p style={{ padding: '10px', color: 'red' }}>No options found</p>  // Render message if no options match search
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
