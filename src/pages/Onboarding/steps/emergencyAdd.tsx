import dayjs from "dayjs";
import React, { memo } from "react";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import { v4 as uuid } from "uuid";
import Content from "../../../components/Content";
import { useEmergencyFundContext } from "../../../context/emergencyFund";
import getNumber from "../../../utils/getNumber";

const EmergencyAdd = () => {
  const { setEmergencyFund } = useEmergencyFundContext();

  const form = useFormState({
    values: { cost: 0, payment: 0 },
    onValidate: (values) => {
      let errors: Record<string, string> = {};
      if (!values.cost) {
        errors.cost = "Please specify a cost of your dream";
      }

      if (Object.keys(errors).length) {
        throw errors;
      }
    },
    onSubmit: (values) => {
      const rawPayment = getNumber(values.payment);
      const cost = getNumber(values.cost);
      const payment = Math.min(rawPayment, cost);

      const months = payment > 0 ? Math.ceil(cost / payment) : 0;
      const end = dayjs().add(months, "month");

      const newEmergencyFund = {
        id: uuid(),
        cost: getNumber(values.cost),
        payment: getNumber(values.payment),
        end: end.toDate(),
      };
      setEmergencyFund(newEmergencyFund);

      // TODO: Redirect to summary
    },
  });

  const rawPayment = getNumber(form.values.payment);
  const cost = getNumber(form.values.cost);
  const payment = Math.min(rawPayment, cost);
  const duration = payment > 0 ? Math.ceil(cost / payment) : 0;

  return (
    <Content>
      <h1>Emergency fund</h1>

      <p>
        Create a safety net for unexpected expenses, so they don't disrupt your
        dreams.
      </p>

      <Form {...form}>
        <FormLabel {...form} name="cost">
          How much €
        </FormLabel>
        <FormInput {...form} name="cost" type="number" />
        <FormMessage {...form} name="cost" />

        <div>{payment}&nbsp;€ / month</div>
        <FormInput
          {...form}
          name="payment"
          type="range"
          min="0"
          max={cost}
          value={payment}
        />
        <FormMessage {...form} name="payment" />
        <div>{duration} months</div>

        <FormSubmitButton {...form}>Add</FormSubmitButton>
      </Form>
    </Content>
  );
};

export default memo(EmergencyAdd);
