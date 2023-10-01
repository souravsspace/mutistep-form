import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card"
import UserAcoout from "./components/USER_CARD_CONTENT/UserAcoout"
import UserAddress from "./components/USER_CARD_CONTENT/UserAddress"
import UserDetails from "./components/USER_CARD_CONTENT/UserDetails"
import { Button } from "./components/ui/button"
import useMultistep from "./hooks/useMultistep"
import { FormEvent, useState } from "react"
import { INIT_STATE, FORM_DATA_TYPE } from "./types"
import { ModeToggle } from "./components/ModeToggle"

export default function App() {
  const [data, setData] = useState(INIT_STATE)

  const updateFields = (fields: Partial<FORM_DATA_TYPE>) => {
    return setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  const { step, next, back, currentStepIndex, steps, isFirstPage, isLastPage } =
    useMultistep({
      title: "My Multistep",
      steps: [
        <UserDetails {...data} updateFields={updateFields} />,
        <UserAddress {...data} updateFields={updateFields} />,
        <UserAcoout {...data} updateFields={updateFields} />,
      ],
    })

  const handleForm = (e: FormEvent) => {
    e.preventDefault()
    next()
    if (isLastPage) alert(JSON.stringify(data, null, 2))
  }

  return (
    <main>
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <Card className="max-w-[30rem] border mx-auto my-8 rounded-md p-4">
        <CardHeader className="relative">
          <h1 className="text-2xl font-mono font-bold uppercase text-center">
            user details
          </h1>
          <div className="absolute top-1 right-1">
            {currentStepIndex + 1} / {steps.length}
          </div>
        </CardHeader>
        <form onSubmit={handleForm}>
          <CardContent>
            <div>{step}</div>
          </CardContent>
          <CardFooter className="flex justify-end gap-1">
            <Button
              disabled={isFirstPage ? true : false}
              type="button"
              onClick={back}
              variant="secondary"
            >
              Back
            </Button>
            <Button type="submit">{isLastPage ? "Finish" : "Next"}</Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  )
}
