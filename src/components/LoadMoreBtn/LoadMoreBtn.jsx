import SyncLoader from 'react-spinners/SyncLoader';
import React from 'react';
import styles from './LoadMoreBtn.styled';
const { Button, ButtonWrap } = styles;

export const LoadMoreBtn = ({ isLoading, setPage, isLastPage }) => {
  return (
    <ButtonWrap>
      <Button
        type="button"
        onClick={() => setPage(s => (s += 1))}
        isLastPage={isLastPage}
        disabled={isLastPage}
      >
        {isLoading ? (
          <SyncLoader loading={isLoading} size={8} color="#000000" />
        ) : !isLastPage ? (
          'Load More'
        ) : (
          'No more users)'
        )}
      </Button>
    </ButtonWrap>
  );
};
