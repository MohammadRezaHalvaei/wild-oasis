import { useForm, SubmitHandler } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import StyledFormRow from "../../ui/StyledFormRow";
import useCreateCabin from "./useCreateCabin";
import useEditCabin from "./useEditCabin";

function CreateCabinForm({ cabinToEdit }: { cabinToEdit?: CabinDataProps }) {
  const { ...editValues } = cabinToEdit ? cabinToEdit : {};
  const IsEditSession = Boolean(cabinToEdit?.id);

  const { createStatus, createCabin } = useCreateCabin();

  const { editCabin, editStatus } = useEditCabin();

  const { register, handleSubmit, reset, getValues, formState } =
    useForm<CabinDataProps>({
      defaultValues: IsEditSession ? editValues : {},
    });
  const { errors } = formState;

  const onSubmit: SubmitHandler<CabinDataProps> = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (IsEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: cabinToEdit!.id as number },
        { onSuccess: () => reset() }
      );
    else createCabin({ ...data, image }, { onSuccess: () => reset() });
  };

  const isWorking = createStatus === "pending" || editStatus === "pending";

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow error={errors.name?.message} label="Cabin Name">
        <Input
          disabled={isWorking}
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors.maxCapacity?.message}>
        <Input
          disabled={isWorking}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors.regularPrice?.message}>
        <Input
          disabled={isWorking}
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors.discount?.message}>
        <Input
          disabled={isWorking}
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: IsEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <StyledFormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {IsEditSession ? "Edit cabin" : "Create new cabin"}
        </Button>
      </StyledFormRow>
    </Form>
  );
}

export default CreateCabinForm;
