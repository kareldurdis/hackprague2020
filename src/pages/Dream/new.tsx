import React, { memo } from "react";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import Content from "../../components/Content";

const NewDream = () => {
  const form = useFormState({
    values: { name: "", cost: 0, image: null, payment: 0 },
    onValidate: (values) => {
      let errors: Record<string, string> = {};
      if (!values.name) {
        errors.name = "Please specify a name of your dream";
      }
      if (!values.cost) {
        errors.cost = "Please specify a cost of your dream";
      }

      if (Object.keys(errors).length) {
        throw errors;
      }
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const payment = parseInt(`${form.values.payment}`, 10) || 0;
  const cost = parseInt(`${form.values.cost}`, 10) || 0;
  const duration = payment > 0 ? Math.ceil(cost / payment) : 0;

  return (
    <Content>
      <h1>New dream</h1>

      <Form {...form}>
        <FormLabel {...form} name="name">
          What
        </FormLabel>
        <FormInput {...form} name="name" />
        <FormMessage {...form} name="name" />

        <FormLabel {...form} name="cost">
          How much €
        </FormLabel>
        <FormInput {...form} name="cost" type="number" />
        <FormMessage {...form} name="cost" />

        <FormLabel {...form} name="image">
          <FormInput
            {...form}
            name="image"
            type="file"
            accept=".jpg, .jpeg, .png"
          />
        </FormLabel>
        <FormMessage {...form} name="image" />

        <div>{payment}&nbsp;€ / month</div>
        <FormInput {...form} name="payment" type="range" min="0" max="1000" />
        <FormMessage {...form} name="payment" />
        <div>{duration} months</div>

        <FormSubmitButton {...form}>Add</FormSubmitButton>
      </Form>
    </Content>
  );
};

export default memo(NewDream);
