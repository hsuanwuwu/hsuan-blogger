const Person = function(name, ...prop) {
  return {
    name,
    linkId: prop.linkId,
  };
};

export default Person;
