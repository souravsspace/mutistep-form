import UserCardStyle from "@/style/UserCardStyle"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { FORM_DATA_TYPE } from "@/types"

type UserDetailsProps = FORM_DATA_TYPE & {
  updateFields: (fields: Partial<FORM_DATA_TYPE>) => void
}

export default function UserDetails({
  firstName,
  lastName,
  age,
  updateFields,
}: UserDetailsProps) {
  return (
    <UserCardStyle>
      <Label>First Name</Label>
      <Input
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
        required
        autoFocus
      />
      <Label>Last Name</Label>
      <Input
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
        required
      />
      <Label>Age</Label>
      <Input
        type="number"
        min={10}
        max={100}
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
        required
      />
    </UserCardStyle>
  )
}
