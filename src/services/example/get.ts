import Example from "&db/models/example";

const getExamples = () => {
  return Example.find({ status: "ACTIVE" }).lean().exec();
};

const getExampleById = (id: string) => {
  return Example.findById(id).lean().exec();
};

export { getExamples, getExampleById };
