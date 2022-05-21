import Example, { IExample } from "../../db/models/example";

const addExample = (example: IExample) => {
  Example.create(example);
};

export { addExample };
