import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => {
console.log(props.arraysOfNumber);
let multiply = props.multiply;
  return (

    <div>
      <div>
        {props.arraysOfNumber.map(number=>{
          return <p>{number}</p>
        })}
      </div>
      <p>{props.text}</p>
      <p>{props.number}</p>
      <p>{props.boolean}</p>
      <p>{props.objectWithInfo.key}</p>
      <p>{props.objectWithInfo.key2}</p>
      <p>{multiply}</p>
      <p>{props.title}</p>
    </div>
  )
}

/* Text.propTypes = {
  arraysOfNumber: PropTypes.array,
  text: PropTypes.string,
  number: PropTypes.number,
  boolean: PropTypes.boolean,
  objectWithInfo: PropTypes.object
} */
export default Text;