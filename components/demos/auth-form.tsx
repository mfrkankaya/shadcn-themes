"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { ScrollArea } from "../ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { ToastAction } from "../ui/toast"
import { useToast } from "../ui/use-toast"

export function AuthForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to themes!</CardTitle>
        <CardDescription>
          Please sign in or register to continue.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="register" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address.")
    .min(1, "Email is required."),
  password: z.string().min(1, "Password is required."),
})

type LoginFormValues = z.infer<typeof loginSchema>

function LoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    values: { email: "", password: "" },
  })
  const { toast } = useToast()

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((v) =>
          toast({
            title: "Logged in!",
            description: "You have successfully logged in.",
            action: <ToastAction altText="Sign out">Signt out!</ToastAction>,
          })
        )}
      >
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="mfrkankaya@gmail.com" {...field} />
                </FormControl>
                <FormDescription>
                  This is an example of a description for the email field.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" {...field} type="password" />
                </FormControl>
                <FormDescription>
                  This is an example of a description for the password field.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-6">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Form>
  )
}

const registerSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address.")
    .min(1, "Email is required."),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(8, "Password must be at least 8 characters long."),
  terms: z.boolean().refine((v) => v, {
    message: "You must accept the terms and conditions.",
  }),
})

type RegisterFormValues = z.infer<typeof registerSchema>

function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    values: { email: "", password: "", terms: false },
  })
  const { toast } = useToast()

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((v) =>
          toast({
            title: "Registered!",
            description: "You have successfully registered.",
            action: <ToastAction altText="Sign out">Signt out!</ToastAction>,
          })
        )}
      >
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="mfrkankaya@gmail.com" {...field} />
                </FormControl>
                <FormDescription>
                  This is an example of a description for the email field.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" {...field} type="password" />
                </FormControl>
                <FormDescription>
                  This is an example of a description for the password field.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="terms"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      {...field}
                      onCheckedChange={onChange}
                      checked={value}
                    />
                  </FormControl>
                  <FormLabel>
                    I agree to the{" "}
                    <Dialog>
                      <DialogTrigger asChild>
                        <span className="font-semibold text-primary underline cursor-pointer">
                          terms and conditions
                        </span>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Terms and Conditions</DialogTitle>
                          <DialogDescription>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptates.
                          </DialogDescription>
                        </DialogHeader>

                        <ScrollArea className="max-h-[60vh]">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque ad, dignissimos alias magnam corrupti
                          aperiam. Voluptas tempore perspiciatis facere ea atque
                          praesentium sapiente sunt aut asperiores! Enim modi
                          dicta ab! Explicabo quidem nisi in non provident
                          cupiditate perferendis laborum, tempore id debitis
                          doloremque repellendus magni consequuntur et
                          architecto veritatis error. Consectetur laudantium sit
                          voluptas ipsa excepturi molestias qui nostrum harum!
                          Voluptas quidem, excepturi nulla reprehenderit libero
                          praesentium quasi, temporibus tempore rem culpa
                          voluptatem facere ab hic illum, sunt aut quos nesciunt
                          corporis optio consequatur quia. Dignissimos eligendi
                          nemo sit ad. Laudantium, officia. Officiis natus sint
                          blanditiis veritatis nostrum modi vitae recusandae aut
                          qui! Facilis ullam quia, perferendis tempora quos
                          obcaecati reiciendis est quaerat vero explicabo,
                          soluta similique maiores laborum voluptates. Quae
                          possimus sint, et perspiciatis atque amet iste harum
                          totam officia laboriosam ad aliquam eum architecto
                          cumque nihil voluptates ea accusamus in minus
                          officiis. Placeat enim minus voluptate. Cumque, quos.
                          Excepturi facilis deserunt animi quos natus enim quia
                          laudantium aut, quasi velit impedit delectus expedita
                          sit nostrum culpa quo inventore porro, error quaerat!
                          Adipisci ad iusto natus facere est error. Quod qui
                          nulla enim iure asperiores, quas odit, praesentium
                          optio veniam aut sint consequuntur, modi eius quasi
                          fugit eveniet magnam atque reiciendis omnis. Veritatis
                          accusantium sint nulla alias cum quae! Repudiandae
                          voluptates modi dolorem! Cumque officiis distinctio
                          maiores harum incidunt nostrum quam et qui alias
                          ratione ab possimus magnam, nesciunt cupiditate.
                          Consectetur aliquid nihil nisi eligendi ut. Sapiente,
                          vel odit. Nostrum fugiat placeat laboriosam rerum
                          nesciunt sit laudantium tempora! Id hic consequatur
                          voluptatem, esse atque fugiat cumque, iure ullam
                          delectus voluptatum magni fuga non dignissimos vero
                          dolor. Repellendus, optio ad! Eum itaque officia quod
                          repellat debitis voluptates labore beatae sint dolorum
                          nihil aperiam mollitia, odit vitae veritatis
                          reiciendis autem. Nam delectus maxime consectetur
                          quidem et rerum odit natus consequuntur provident.
                          Hic, debitis! Quam, dolore similique? Ipsam corporis
                          tenetur, explicabo maxime sequi eligendi ut accusamus
                          saepe odio animi architecto blanditiis dolor
                          voluptatem labore, repellat soluta quo corrupti nisi
                          velit ea quibusdam! Pariatur, non! Facilis culpa,
                          commodi alias nisi esse ratione repudiandae, facere
                          atque architecto voluptatem iste minus hic quo
                          inventore deserunt nesciunt quae nemo dignissimos
                          blanditiis quaerat tempore ullam placeat aliquid?
                          Excepturi quaerat doloremque et quia, magnam
                          aspernatur facere quas, quae, cupiditate laudantium ex
                          animi voluptas error. Vel nemo saepe suscipit. Quasi
                          iure repellat nulla modi! Aspernatur odit placeat
                          earum cumque. Nihil, nesciunt! Enim maxime provident,
                          nulla, aliquam error in harum vitae dolores ab magni
                          porro veniam perspiciatis aspernatur laboriosam modi!
                          Sunt, optio! Officia maiores iure provident nihil
                          consequatur laborum dolorum. Atque accusamus ipsam,
                          recusandae corporis dicta libero quam dolores beatae
                          earum nulla consequatur tempora incidunt mollitia
                          harum excepturi, nesciunt reprehenderit facilis sunt
                          quis delectus qui. Voluptates animi eum cupiditate
                          placeat. Reprehenderit iure nostrum tenetur incidunt
                          quisquam voluptatibus corporis. Natus ad facere enim
                          delectus esse quia soluta aliquam accusamus quos,
                          velit porro tempora cum temporibus distinctio a
                          eligendi maiores. Dicta, eveniet. Quasi quidem maxime
                          suscipit ad, inventore qui, illo corrupti odit unde
                          quas quia aspernatur eius nisi accusamus vitae porro
                          doloremque sequi enim! Laudantium nihil fugiat,
                          aspernatur eveniet quaerat asperiores ipsam.
                          Consequuntur atque harum eligendi sint qui,
                          perferendis dolore praesentium, iure explicabo
                          reprehenderit quas obcaecati, minima sequi temporibus
                          quod officia culpa corrupti. Ex doloribus tempore quos
                          ipsa magni maiores praesentium esse! Illum eum cumque,
                          quia et quibusdam deleniti commodi. Ipsam nihil
                          sapiente odit iusto modi vitae, molestiae tempora
                          nesciunt quidem reprehenderit consequuntur. Officiis,
                          harum placeat distinctio impedit laborum praesentium
                          magni veritatis. Excepturi sit cupiditate pariatur
                          dolorem unde totam explicabo, error nisi possimus.
                          Repudiandae numquam ipsa totam, ducimus vel tempora
                          laudantium, modi quasi, laborum quis dolorem ipsam
                          asperiores architecto. Dolor, quidem hic?
                        </ScrollArea>

                        <DialogFooter>
                          <Button variant="secondary">Close</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    .
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-6">
          <Button type="submit">Register</Button>
        </div>
      </form>
    </Form>
  )
}
