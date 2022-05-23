import mongoose from "mongoose";

export interface IExample {
  name: string;
  age: number;
  status?: string;
}

const ExampleSchema = new mongoose.Schema<IExample>({
  name: { type: String, required: true },
  age: { type: Number, required: false },
  status: { type: String, default: "ACTIVE" },
});

const Example = mongoose.model<IExample>("Example", ExampleSchema);

export default Example;
