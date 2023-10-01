import { Label } from "@radix-ui/react-label"
import { Input } from "../ui/input"
import UserCardStyle from "@/style/UserCardStyle"
import { FORM_DATA_TYPE } from "@/types"

type UserAddressProps = FORM_DATA_TYPE & {
  updateFields: (fields: Partial<FORM_DATA_TYPE>) => void
}

export default function UserAddress({
  country,
  state,
  city,
  zip,
  updateFields,
}: UserAddressProps) {
  return (
    <UserCardStyle>
      <Label>Country</Label>
      <Input
        type="text"
        value={country}
        onChange={(e) => updateFields({ country: e.target.value })}
        required
        autoFocus
      />
      <Label>State</Label>
      <Input
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
        required
      />
      <Label>City</Label>
      <Input
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
        required
      />
      <Label>Zip code</Label>
      <Input
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
        required
      />
    </UserCardStyle>
  )
}
