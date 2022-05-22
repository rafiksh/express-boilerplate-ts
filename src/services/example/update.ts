import Example, { IExample } from "&db/models/example";

const updateExample = (id: string, updatedExample: IExample) => {
  return Example.findByIdAndUpdate(id, updatedExample, { new: true })
    .lean()
    .exec();
};

const deleteExample = (id: string) => {
  return Example.findByIdAndUpdate(id, { status: "DELETED" }).lean().exec();
};

export { updateExample, deleteExample };
