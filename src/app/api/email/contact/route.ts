import { env } from "@/env.mjs"
import nodemailer from "nodemailer"
import { z } from "zod"

import { siteConfig } from "@/config/site"

const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "firstNameInputError")
    .max(28, "firstNameInputError"),
  lastName: z
    .string()
    .min(2, "lastNameInputError")
    .max(28, "lastNameInputError"),
  email: z.email("emailInputError"),
  phoneNumber: z
    .string()
    .transform((value) => value.replace(/[-\s]/g, ""))
    .pipe(
      z
        .string()
        .min(10, "phoneNumberInputError")
        .max(13, "phoneNumberInputError")
        .regex(/^\+?\d+$/, "phoneNumberInputError")
    ),
  treatment: z.string().min(1, "treatmentInputError"),
  message: z.string().min(2, "messageInputError").max(100, "messageInputError"),
})

export async function POST(req: Request) {
  const input = contactFormSchema.parse(await req.json())

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "gabrielarcangel.contacto@gmail.com",
        pass: env.GOOGLE_APP_PASS,
      },
    })

    await transporter.sendMail({
      from: siteConfig.name,
      to: input.email,
      subject: `${input.firstName}, hemos recibido tu mensaje en ${siteConfig.name}`,
      html: `
        <h1><b>¡Gracias por contactarnos!</b></h1>
        <p>Un miembro de nuestro equipo se comunicará con usted en breve.</p>
      `,
    })

    await transporter.sendMail({
      from: siteConfig.name,
      to: "gabrielarcangel.contacto@gmail.com",
      subject: "Nuevo mensaje desde formulario web",
      html: `
        <p><b>Nombre de contacto:</b> ${input.firstName} ${input.lastName}</p>
        <p><b>Correo de contacto:</b> ${input.email}</p>
        <p><b>Número de teléfono:</b> ${input.phoneNumber}</p>
        <p><b>Tratamiento:</b> ${input.treatment}</p>
        <p><b>Descripción de la problemática o solución que necesita:</b> ${input.message}</p>
      `,
    })

    return new Response(null, { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response("Something went wrong", { status: 422 })
    }

    if (err instanceof Error) {
      return new Response("Something went wrong", { status: 500 })
    }

    return new Response("Something went wrong", { status: 500 })
  }
}
