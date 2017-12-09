import R from 'ramda';
import _ from 'lodash/fp';


function reduceToSingleDigit(number) {
  if (!_.isNumber(number)) {
    return new Error({
      message: 'Variable is not a number.',
    });
  }
  const filterOnlyNumbers = (maybeNumber) => (!Number.isNaN(maybeNumber));
  const addArray = (acc, value) => (_.toNumber(value) + acc);
  const createArray = R.compose(R.filter(filterOnlyNumbers), R.split(''), R.toString);
  const numberArray = createArray(number);

  const createReductionValue = R.compose(R.toString, R.reduce(addArray, 0));
  const reductionValue = createReductionValue(numberArray);

  if (reductionValue.length === 1) {
    return _.toNumber(reductionValue);
  }
  return reduceToSingleDigit(_.toNumber(reductionValue));
}

export default reduceToSingleDigit;
