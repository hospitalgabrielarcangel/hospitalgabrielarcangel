"use client"

import { type CSSProperties } from "react"
import { useForm } from "@tanstack/react-form"
import { useTranslations } from "next-intl"
import { toast } from "sonner"
import * as z from "zod"

import { serviceConfig } from "@/config/service"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const t = useTranslations("ContactForm")
  const tService = useTranslations("Service")

  const formSchema = z.object({
    firstName: z
      .string()
      .min(2, t("firstNameError"))
      .max(28, t("firstNameError")),
    lastName: z.string().min(2, t("lastNameError")).max(28, t("lastNameError")),
    email: z.email(t("emailError")),
    phoneNumber: z.e164(t("phoneNumberError")),
    service: z.string().min(1, t("serviceError")),
    message: z.string().min(2, t("messageError")).max(100, t("messageError")),
  })

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      service: "",
      message: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast("You submitted the following values:", {
        description: (
          <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as CSSProperties,
      })
    },
  })

  return (
    <div className="flex flex-col gap-y-8">
      <div>
        <form
          id="contact-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup className="gap-5">
            <form.Field
              name="firstName"
              // eslint-disable-next-line react/no-children-prop
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder={t("firstNamePlaceholder")}
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="lastName"
              // eslint-disable-next-line react/no-children-prop
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder={t("lastNamePlaceholder")}
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="email"
              // eslint-disable-next-line react/no-children-prop
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder={t("emailPlaceholder")}
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="phoneNumber"
              // eslint-disable-next-line react/no-children-prop
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder={t("phoneNumberPlaceholder")}
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="service"
              // eslint-disable-next-line react/no-children-prop
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <Select
                      name={field.name}
                      value={field.state.value}
                      onValueChange={(value) => field.handleChange(value)}
                    >
                      <SelectTrigger
                        id={field.name}
                        onBlur={field.handleBlur}
                        aria-invalid={isInvalid}
                        className="w-full"
                      >
                        <SelectValue placeholder={t("servicePlaceholder")} />
                      </SelectTrigger>
                      <SelectContent className="z-70">
                        <SelectGroup>
                          <SelectLabel>{t("servicePlaceholder")}</SelectLabel>
                          {serviceConfig.map((service) => {
                            const serviceName = tService(service.name)
                            return (
                              <SelectItem key={serviceName} value={serviceName}>
                                {serviceName}
                              </SelectItem>
                            )
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="message"
              // eslint-disable-next-line react/no-children-prop
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <InputGroup>
                      <InputGroupTextarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder={t("messagePlaceholder")}
                        rows={6}
                        className="min-h-24 resize-none"
                        aria-invalid={isInvalid}
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="tabular-nums">
                          {field.state.value.length}/100 {t("messageChars")}
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
          </FieldGroup>
        </form>
      </div>
      <div>
        <Field orientation="horizontal" className="gap-0.5">
          <Button
            className="h-11 px-8 pt-px tracking-widest uppercase"
            type="submit"
            form="contact-form"
            size="lg"
          >
            {t("submitButton")}
          </Button>
          <Button
            className="uppercase"
            type="button"
            variant="link"
            size="sm"
            onClick={() => form.reset()}
          >
            {t("resetButton")}
          </Button>
        </Field>
      </div>
    </div>
  )
}
