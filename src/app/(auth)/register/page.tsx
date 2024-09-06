"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Register = () => {
  return (
    <div className="mb-4">
      <Card className="border-none shadow-none mx-auto max-w-4xl">
        <CardHeader className="flex-row justify-between items-center">
          <div>
            <CardTitle className="text-xl">Company Registration</CardTitle>
            <CardDescription>
              Enter the information to register your company.
            </CardDescription>
          </div>

          <Link href={"/register-as-reader"}>
            Create an account as a reader
          </Link>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-4">
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Company Information
              </h4>
              <div className="grid gap-2">
                <Label htmlFor="text">Name</Label>
                <Input id="text" type="text" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">Business type</Label>
                  <Input id="first-name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Industry</Label>
                  <Input id="last-name" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="text">Address</Label>
                <Input id="text" type="text" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="text">Official Website (URL)</Label>
                <Input id="text" type="text" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="text">Contact Number</Label>
                <Input id="text" type="text" />
              </div>
            </div>

            <div className="flex flex-col justify-between h-full">
              <div className="grid gap-4">
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                  Representative Information
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first_name">First Name</Label>
                    <Input id="first_name" type="text"></Input>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last_name">Last Name</Label>
                    <Input id="last_name" type="text"></Input>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="email">Email Address </Label>
                    <small>Use Official Email</small>
                  </div>
                  <Input id="email" type="email" />
                </div>
              </div>

              <div className="mt-4">
                <Button type="submit" className="w-full">
                  Register an account
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-4 text-center lg:text-right text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
