import Select from 'react-select';
import React from 'react';
import utils from '../../utils';
import styles from './SortUsers.styled';
const { SelectWrap } = styles;
const { sortValues } = utils;

const options = [sortValues.all, sortValues.follow, sortValues.followings];

export const SortUsers = ({ selectedOption, setSelectedOption }) => {
  return (
    <SelectWrap>
      <Select
        name="selected-option"
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </SelectWrap>
  );
};
