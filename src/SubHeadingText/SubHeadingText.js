import React from 'react'

const SubHeadingText = ({ Form }) => {
    return (
      <>
      {console.log('form', Form)}
        {Form.searchResultHeading ?
        <h3>All Movies</h3>
        :
        <h3>{Form.searchResultHeading}</h3>
        }
      </>
    );
}

export default SubHeadingText