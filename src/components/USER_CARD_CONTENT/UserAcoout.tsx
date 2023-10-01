import { Label } from "@radix-ui/react-label"
import { Input } from "../ui/input"
import UserCardStyle from "@/style/UserCardStyle"
import { FORM_DATA_TYPE } from "@/types"

type UserAcooutProps = FORM_DATA_TYPE & {
  updateFields: (field: Partial<FORM_DATA_TYPE>) => void
}

export default function UserAcoout({
  email,
  password,
  confirmPassword,
  updateFields,
}: UserAcooutProps) {
  return (
    <UserCardStyle>
      <Label>Email</Label>
      <Input
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        required
        autoFocus
      />
      <Label>Password</Label>
      <Input
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
        required
      />
      <Label>Confirm password</Label>
      <Input
        type="password"
        value={confirmPassword}
        onChange={(e) => updateFields({ confirmPassword: e.target.value })}
        required
      />
    </UserCardStyle>
  )
}
