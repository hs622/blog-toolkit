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

const RegisterAsReader = () => {
  return (
    <div className="mb-4">
      <Card className="border-none shadow-none mx-auto max-w-4xl">
        <CardHeader>
          <CardTitle className="text-xl">Registration</CardTitle>
          <CardDescription>
            Enter your information to create an account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
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
              </div>
              <Input id="email" type="email" />
            </div>
            <div className="grid gap-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="Password">Password</Label> 
              </div>
              <Input id="Password" type="password" />
            </div>
            <div className="grid gap-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="Password">Confirm Password</Label> 
              </div>
              <Input id="Password" type="password" />
            </div>
          </div>

          <div className="mt-4">
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterAsReader;
