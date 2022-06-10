import Example, { IExample } from "&db/models/example";

const addExample = (example: IExample) => {
  return Example.create(example);
};

export { addExample };
