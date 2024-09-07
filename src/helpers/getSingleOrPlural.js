const getSingleOrPlural = (count, single, plural) => {
  return count === 1 ? single : plural;
}

export default getSingleOrPlural;