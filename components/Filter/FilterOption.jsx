import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const FilterOption = () => {

    const top100Films = [
        { title: 'Tours', year: 2023 },
        { title: 'Hospedaje', year: 2023 },
        { title: 'Gastronomia', year: 2023 },

  ];

  return (
    <div className="FilterInput">
    <Autocomplete
        className='Autocomplete'
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[0]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Filtrar Intereses"
          />
        )}
      />

    </div>

  )
}

export default FilterOption