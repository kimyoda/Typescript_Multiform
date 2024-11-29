import { FormWrapper } from "./FormWrapper";

export const AccountForm = () => {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input autoFocus required type="email" />
      <label>Password</label>
      <input required type="passowrd" />
    </FormWrapper>
  );
};
