import Example from "../../db/models/example";

const getExamples = () => {
  return Example.find({});
};

const getExampleById = (id: string) => {
  return Example.findById(id);
};

export { getExamples, getExampleById };
