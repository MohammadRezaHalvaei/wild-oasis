import styled from "styled-components";
import StyledFormRow from "./StyledFormRow";

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

type Props = {
  label?: string;
  error?: string;
  children: React.ReactElement<{ id: string }>;
};

export default function FormRow({ label, error, children }: Props) {
  return (
    <StyledFormRow>
      <Label htmlFor={children.props?.id}>{label}</Label>
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}
